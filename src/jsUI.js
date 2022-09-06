/*
 * Copyright (c) 2022 Brandon Jordan
 */

'use strict';

export * from './components/Audio.js';
export * from './components/Button.js';
export * from './components/Canvas.js';
export * from './components/Div.js';
export * from './components/Dialog.js';
export * from './components/Frame.js';
export * from './components/Line.js';
export * from './components/Hyperlink.js';
export * from './components/Lists.js';
export * from './components/Semantic.js';
export * from './components/Picture.js';
export * from './components/Progress.js';
export * from './components/Meter.js';
export * from './components/Tag.js';
export * from './components/Form.js';
export * from './components/Text.js';
export * from './components/Input.js';
export * from './components/Textarea.js';
export * from './components/Table.js';
export * from './components/Source.js';
export * from './components/Track.js';
export * from './components/Image.js';
export * from './components/Video.js';

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

export function view(components, debugLog = false) {
	if (document.body.hasChildNodes()) {
		document.body.innerHTML = '';
	}
	buildUI(document.body, components);
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

	title(title) {
		document.title = title;
		return this;
	}

	icon(src) {
		icon(src);
		return this;
	}

	accentColor(hexColor) {
		accentColor(hexColor);
		return this;
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
	if (!hexColor.includes('#')) {
		console.warn('Accent color should be a hex color value for proper application.');
	}
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
			return false;
		}
	}
}

function debug() {
	const body = document.body;
	const globalStyle = document.querySelector('style#jsUI');
	console.log('[JSUI] Generated HTML', body);
	console.log('[JSUI] Generated CSS', globalStyle);
}

/* === Router === */

let routes = [];
let urlParams = [];
let currentRoute;

export function router(appRoutes) {
	if (!appRoutes || !Array.isArray(appRoutes) || appRoutes.length === 0) {
		console.error('[Router] Invalid or empty routes were provided!', appRoutes);
		return false;
	}
	for (let r in appRoutes) {
		if (!appRoutes[r].url) {
			console.error('[JSUI] [Router] Path was not provided for route!', appRoutes[r]);
			return false;
		}
		if (!appRoutes[r].view) {
			console.error('[JSUI] [Router] View was not provided for route!', appRoutes[r]);
		}
		if (!appRoutes[r].name) {
			console.warn(`[JSUI] [Router] You have not provided a name for '${appRoutes[r].url}' route. You will not be able to reference this route other places in your code.`);
		}
	}
	routes = appRoutes;
	window.addEventListener('popstate', evaluateURL);
	evaluateURL();
	return new Body();
}

export function routeTo(name) {
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
	return false;
}


function evaluateURL() {
	let found = false;
	for (let route in routes) {
		if (routes[route].url === window.location.pathname) {
			found = true;
			goTo(routes[route]);
		}
	}
	if (found === false) {
		goTo(routes[0]);
	}
	getParams();
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
	if (route !== currentRoute) {
		if (route.url) {
			history.pushState(null, null, route.url);
		}
		if (route.view) {
			view(route.view);
		}
		if (route.title) {
			document.title = route.title;
		}
		currentRoute = route;
		activateRoutes();
	}
}

export function get(key) {
	if (Object.keys(urlParams).includes(key)) {
		return urlParams[key];
	}
	return false;
}

function getParams() {
	let url = window.location.pathname;
	if (url.includes('?')) {
		if (typeof URL !== 'undefined') {
			let urlObject = new URL(url);
			urlObject.searchParams.forEach(function (value, key) {
				urlParams[key] = value;
			});
		} else {
			if (url.includes('&')) {
				let kvs = window.location.pathname.split('?')[1].split('&');
				kvs.forEach(function (kv) {
					const param = kv.split('=');
					const key = decodeURIComponent(param[0]);
					urlParams[key] = decodeURIComponent(param[1]);
				});
			} else {
				let kv = window.location.pathname.split('?')[1];
				const param = kv.split('=');
				const key = decodeURIComponent(param[0]);
				urlParams[key] = decodeURIComponent(param[1]);
			}
		}
	}
}
