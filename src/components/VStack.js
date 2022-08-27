import {Element} from '../element.js';

export function VStack(components, rows = 12) {
	return new VStackTag(components, rows);
}

class VStackTag extends Element {
	constructor(components, rows) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;

		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'row dense';
		this.element.style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(1, 1fr)';
	}
}