/*
 * Copyright (c) 2022 Brandon Jordan
 */

'use strict';

export * from './components/Button.js';
export * from './components/CheckBox.js';
export * from './components/Div.js';
export * from './components/Footer.js';
export * from './components/Line.js';
export * from './components/Header.js';
export * from './components/Hyperlink.js';
export * from './components/List.js';
export * from './components/ListItem.js';
export * from './components/Radio.js';
export * from './components/Section.js';
export * from './components/Tag.js';
export * from './components/Form.js';
export * from './components/Text.js';
export * from './components/TextBox.js';
export * from './components/TextInput.js';
export * from './components/Image.js';

export * from './components/Dropdown.js';
export * from './components/CheckBoxGroup.js';
export * from './components/RadioGroup.js';
export * from './components/Spacer.js';
export * from './components/Stack.js';
export * from './components/View.js';

import {Element} from './element.js';

const head = document.querySelector('head');

let globalCSS = '';
let accent = '';

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

export function view(components, debugLog = false) {
	buildUI(document.querySelector('body'), components);
	setTimeout(function () {
		applyGlobalStyle();
		if (debugLog === true) {
			debug();
		}
	}, 500);
	return new Body();
}

function buildUI(parent, components) {
	if (components.default) {
		components = components.default;
	}
	if (Array.isArray(components)) {
		components.forEach(function (component) {
			if (component.default) {
				component = component.default;
			}
			if (Array.isArray(component)) {
				buildUI(parent, component);
			} else {
				parent.appendChild(component.element);
				if (component.components) {
					buildUI(component.element, component.components);
				}
			}
		});
	} else {
		parent.appendChild(components.element);
		if (components.components) {
			buildUI(components.element, components.components);
		}
	}
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
		document.body.append(this.element);
		globalCSS += this.selector + '{' + this.element.getAttribute('style') + '}';
		this.element.remove();
	}
}

class Body extends Element {
	constructor() {
		const element = document.body;
		super(element);
		this.element = element;
	}
}

export function icon(src) {
	const shortcutLink = document.createElement('link');
	shortcutLink.rel = 'icon';

	const touchIconLink = document.createElement('link');
	touchIconLink.rel = 'apple-touch-icon';

	shortcutLink.href = src;
	touchIconLink.href = src;

	head.appendChild(shortcutLink);
	head.appendChild(touchIconLink);
}

export function accentColor(hexColor) {
	addCSS({
		'::selection': {
			'background': hexColor + '50'
		},
		'::moz-selection': {
			'background': hexColor + '50'
		},
		'input,textarea,select': {
			'accent-color': hexColor,
			'outline-color': hexColor,
			'caret-color': hexColor
		}
	});
	accent = hexColor;
	return this;
}

export function select(selector) {
	return new InstanceSelector(selector);
}

class InstanceSelector extends Element {
	constructor(selector) {
		const element = document.getElementById(selector);
		if (element) {
			super(element);
			this.element = element;
		} else {
			console.error('Cannot find element with name: ' + selector);
			return;
		}
	}
}

function debug() {
	const body = document.querySelector('body');
	const globalStyle = document.querySelector('style#jsUI');
	console.log('HTML', body);
	console.log('CSS', globalStyle);
}

/* === Router === */

let routes = {};

export function router(appRoutes) {
	if (!routes || routes.constructor !== Object || routes.length === 0) {
		console.error('[Router] No routes were provided!', routes);
		return false;
	}
	for (let r in appRoutes) {
		if (!appRoutes[r].url) {
			console.error('[Router] Path was not provided for route!', appRoutes[r]);
			return false;
		}
		if (!appRoutes[r].view) {
			console.error('[Router] View was not provided for route!', appRoutes[r]);
		}
		if (!appRoutes[r].name) {
			console.warn(`[Router] You have not provided a name for '${appRoutes[r].url}' route. You will not be able to reference this route other places in your code.`);
		}
	}
	routes = appRoutes;
	window.addEventListener('popstate', evaluateURL());
	evaluateURL();
}

export function routeTo(route) {
	for (let route in routes) {
		if (routes[route].name === name) {
			goTo(routes[route]);
		}
	}
	return false;
}

export function route(name) {
	for (let route in routes) {
		if (routes[route].name === name) {
			return routes[route].url;
		}
	}
	return '#';
}

function evaluateURL() {
	let found = false;
	for (let route in routes) {
		if (routes[route].url === window.location.pathname) {
			goTo(route);
		}
	}
	if (found === false) {
		goTo(routes[0]);
	}
}

function activateRoutes() {
	document.querySelectorAll('a').forEach((link) => {
		if (link.getAttribute('route')) {
			link.setAttribute('href', route(link.getAttribute('route')));
			link.removeAttribute('route');
		}
		link.onclick = (e) => {
			e.preventDefault();
			let found = false;
			for (let route in routes) {
				let href = link.getAttribute('href');
				if (href === routes[route].url) {
					found = true;
					goTo(routes[route]);
					break;
				}
			}
			if (found === false) {
				window.open(link.href, '_blank');
			}
		};
	});
}

function goTo(route) {
	if (route.url) {
		history.pushState(null, null, route.url);
	}
	if (route.title) {
		document.title = route.title;
	}
	if (route.view) {
		view(route.view);
	}
	activateRoutes();
}
