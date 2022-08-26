import {Element} from '../base/element.js';

export function Spacer() {
	return new BreakTag();
}

class BreakTag extends Element {
	constructor() {
		const element = document.createElement('br');
		super(element);
		this.element = element;
	}
}