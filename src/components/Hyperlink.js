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

	url(url) {
		this.element.href = url;
		return this;
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
		this.element.hreflang = lang;
		return this;
	}

	mime(mime) {
		this.element.type = mime;
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