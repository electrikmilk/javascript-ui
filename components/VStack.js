import {Element} from '../base/element.js';

export function VStack(components) {
	return new VStackTag(components);
}

class VStackTag extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;

		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'row';
		this.element.style.gridTemplateRows = 'repeat(12, 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(1, 1fr)';
	}
}