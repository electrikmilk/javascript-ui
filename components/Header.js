import {Element} from '../base/element.js';

export function Header(components) {
	return new HeaderTag(components);
}

class HeaderTag extends Element {
	constructor(components) {
		const element = document.createElement('header');
		super(element);
		this.element = element;
		this.components = components;
	}
}