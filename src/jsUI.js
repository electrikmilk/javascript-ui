'use strict';

export * from './components/Button.js';
export * from './components/CheckBox.js';
export * from './components/CheckBoxGroup.js';
export * from './components/Div.js';
export * from './components/Footer.js';
export * from './components/Line.js';
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
export * from './components/Stack.js';
export * from './components/View.js';
export * from './components/Image.js';
export * from './components/Dropdown.js';

import {Element} from './element.js';

const head = document.querySelector('head');

let globalCSS = '';

window.onload = () => {
	if (!document.querySelector('meta[name=viewport]')) {
		let metaViewport = document.createElement('meta');
		metaViewport.name = 'viewport';
		metaViewport.content = 'width=device-width, initial-scale=1';
		head.appendChild(metaViewport);
	}
	if (!document.querySelector('meta[name=http-equiv]')) {
		let meta = document.createElement('meta');
		meta.httpEquiv = 'X-UA-Compatible';
		meta.content = 'IE=edge';
		head.appendChild(meta);
	}
	if (!document.querySelector('meta[charset]')) {
		let metaCharset = document.createElement('meta');
		metaCharset.charset = 'UTF-8';
		head.appendChild(metaCharset);
	}
};

export function appIcon(src) {
	const shortcutLink = document.createElement('link');
	shortcutLink.rel = '';

	const touchIconLink = document.createElement('link');
	touchIconLink.rel = '';

	shortcutLink.href = src;
	touchIconLink.href = src;

	head.appendChild(shortcutLink);
	head.appendChild(touchIconLink);
}

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

export function globalStyle(selector) {
	return new GlobalElementStyle(selector);
}

class GlobalElementStyle extends Element {
	constructor(selector) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.selector = selector;
		const instance = this;
		setTimeout(function () {
			instance.apply();
		}, 500);
	}

	apply() {
		document.querySelector('body').append(this.element);
		globalCSS += this.selector + '{' + this.element.getAttribute('style') + '}';
		this.element.remove();
	}
}

export function ForEach(array, callback) {
	return array.forEach(callback);
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