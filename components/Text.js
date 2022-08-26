import {Element} from '../base/element.js';

export function Text(text) {
	return new ParagraphTag(text);
}

class ParagraphTag extends Element {
	constructor(text) {
		const element = document.createElement('p');
		super(element);
		this.element = element;
		this.element.innerText = text;
	}
}