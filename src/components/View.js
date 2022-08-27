import {Element} from '../element.js';

export function ScrollView(components, auto = true) {
	return new OverflowDiv(components, auto);
}

class OverflowDiv extends Element {
	constructor(components, auto) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
		this.element.style.overflow = (auto === true ? 'auto' : 'scroll');
	}
}
