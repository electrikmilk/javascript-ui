'use strict';

export * from './components/Button.js';
export * from './components/CheckBox.js';
export * from './components/CheckBoxGroup.js';
export * from './components/Div.js';
export * from './components/Footer.js';
export * from './components/Line.js';
export * from './components/HStack.js';
export * from './components/Header.js';
export * from './components/Hyperlink.js';
export * from './components/List.js';
export * from './components/ListItem.js';
export * from './components/Radio.js';
export * from './components/RadioGroup.js';
export * from './components/Section.js';
export * from './components/Spacer.js';
export * from './components/Tag.js';
export * from './components/Text.js';
export * from './components/TextBox.js';
export * from './components/TextInput.js';
export * from './components/VStack.js';
export * from './components/Image.js';

import {Element} from './element.js';

let globalCSS = '';

export function view(components) {
	if (components.default) {
		components = components.default;
	}
	buildUI(document.querySelector('body'), components);
	setTimeout(function () {
		applyGlobalStyle();
		debug();
	}, 500);
	return new Body();
}

function buildUI(parent, components) {
	components.forEach(function (component) {
		parent.appendChild(component.element);
		if (component.components) {
			buildUI(component.element, component.components);
		}
	});
}

function applyGlobalStyle() {
	const head = document.querySelector('head');
	const style = document.createElement('style');
	style.id = 'jsUI';
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = globalCSS;
	} else {
		style.appendChild(document.createTextNode(globalCSS));
	}
	head.appendChild(style);
}

export function addCSS(rules) {
	for (let rule in rules) {
		globalCSS += rule + '{';
		for (let property in rules[rule]) {
			globalCSS += property + ':' + rules[rule][property] + ';';
		}
		globalCSS += '}';
	}
}

export function styleElement(tagName) {
	return new GlobalElementStyle(tagName);
}

class GlobalElementStyle extends Element {
	constructor(tagName) {
		const element = document.createElement(tagName);
		super(element);
		this.element = element;
		this.tagName = tagName;
	}

	apply() {
		this.element.style.visibility = 'hidden';
		document.querySelector('body').append(this.element);
		this.element.style.removeProperty('visibility');
		globalCSS += this.tagName + '{' + this.element.getAttribute('style') + '}';
		this.element.remove();
	}
}

class Body extends Element {
	constructor() {
		const element = document.querySelector('body');
		super(element);
		this.element = element;
	}
}

function debug() {
	const debug = new DocumentFragment();
	const body = document.querySelector('body');
	const domBody = document.createElement('code');
	const bodyScript = document.querySelector('body script');
	if (bodyScript) {
		body.removeChild(bodyScript);
	}
	domBody.innerText = body.innerHTML.trim();

	const debugHeaderHTML = document.createElement('h3');
	debugHeaderHTML.innerText = 'Output HTML:';
	debug.append(debugHeaderHTML);

	debug.append(domBody);

	const debugHeaderCSS = document.createElement('h3');
	debugHeaderCSS.innerText = 'Output CSS:';
	debug.append(debugHeaderCSS);

	const globalStyle = document.querySelector('style#jsUI');
	const cssBody = document.createElement('code');
	cssBody.innerText = globalStyle.innerHTML;
	debug.append(cssBody);

	body.prepend(debug);
}