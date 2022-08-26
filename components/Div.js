import {Element} from '../base/element.js';

export function Div(components) {
	return new DivTag(components);
}

class DivTag extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
	}
}