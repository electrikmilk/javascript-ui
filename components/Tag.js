import {Element} from '../base/element.js';

export function Tag(tagName) {
	return new CustomElement(tagName);
}

class CustomElement extends Element {
	constructor(tagName) {
		const element = document.createElement(tagName);
		super(element);
		this.element = element;
	}
}