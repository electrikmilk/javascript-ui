import {Element} from '../element.js';

export function List(components) {
	return new UnorderedList(components);
}

class UnorderedList extends Element {
	constructor(components) {
		const element = document.createElement('ul');
		super(element);
		this.element = element;
		this.components = components;
	}
}