import {Element} from '../element.js';

export function HStack(components, columns = 12) {
	return new HStackTag(components, columns);
}

class HStackTag extends Element {
	constructor(components, columns) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;

		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'column dense';
		this.element.style.gridTemplateRows = 'repeat(1, 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
	}
}