import {EventElement} from '../events.js';

export function Radio() {
	return new InputRadio();
}

class InputRadio extends EventElement {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'radio';
	}
}