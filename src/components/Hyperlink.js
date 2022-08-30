/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Hyperlink(text) {
	return new AnchorTag(text);
}

class AnchorTag extends Element {
	constructor(text) {
		const element = document.createElement('a');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
	
	route(name) {
		return this.attribute('route', name);
	}

	url(url) {
		return this.attribute('href',url);
	}

	target(target) {
		if (!target.includes('_')) {
			target = '_' + target;
		}
		this.element.target = target;
		return this;
	}

	download(bool) {
		if (bool === true && !this.element.hasAttribute('download')) {
			this.element.download = '';
		} else if (bool === false && this.element.hasAttribute('download')) {
			this.element.removeAttribute('download');
		}
		return this;
	}

	lang(lang) {
		return this.attribute('hreflang',lang);
	}

	mime(mime) {
		return this.attribute('type',mime);
	}

	types(types) {
		if (Array.isArray(types)) {
			this.element.rel = types.join(' ');
		}
		return this;
	}

	ping(urls) {
		if (Array.isArray(urls)) {
			this.element.ping = urls.join(' ');
		}
		return this;
	}
}
