'use strict';

export * from './elements/Button.js';
export * from './elements/CheckBox.js';
export * from './elements/Div.js';
export * from './elements/Footer.js';
export * from './elements/Line.js';
export * from './elements/Header.js';
export * from './elements/Hyperlink.js';
export * from './elements/List.js';
export * from './elements/ListItem.js';
export * from './elements/Radio.js';
export * from './elements/Section.js';
export * from './elements/Tag.js';
export * from './elements/Text.js';
export * from './elements/TextBox.js';
export * from './elements/TextInput.js';
export * from './elements/Image.js';

export * from './components/Dropdown.js';
export * from './components/CheckBoxGroup.js';
export * from './components/RadioGroup.js';
export * from './components/Spacer.js';
export * from './components/Stack.js';
export * from './components/View.js';

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

export function select(selector) {
	return new InstanceSelector(selector);
}

class InstanceSelector extends Element {
	constructor(selector) {
		const element = document.querySelector('#' + selector);
		super(element);
		this.element = element;
	}
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