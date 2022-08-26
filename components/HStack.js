import {Element} from '../base/element.js';

export function HStack(components) {
	return new HStackTag(components);
}

class HStackTag extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;

		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'column';
		this.element.style.gridTemplateRows = 'repeat(1, 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(12, 1fr)';
	}
}