import {Element} from '../element.js';

export function Text(text) {
	return new ParagraphTag(text);
}

class ParagraphTag extends Element {
	constructor(text) {
		const element = document.createElement('p');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}

export function Heading(text, size = '1') {
	return new HeadingTag(text, size);
}

class HeadingTag extends Element {
	constructor(text, size) {
		const element = document.createElement('h' + size);
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}