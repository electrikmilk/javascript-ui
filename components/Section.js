import {Element} from '../base/element.js';

export function Section(components) {
	return new SectionTag(components);
}

class SectionTag extends Element {
	constructor(components) {
		const element = document.createElement('section');
		super(element);
		this.element = element;
		this.components = components;
	}
}