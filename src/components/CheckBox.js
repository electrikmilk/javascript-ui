import {EventElement} from '../events.js';

export function CheckBox() {
	return new InputCheckbox();
}

class InputCheckbox extends EventElement {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'checkbox';
	}
}