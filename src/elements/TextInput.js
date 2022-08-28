import {EventElement} from '../events.js';

export function TextInput() {
	return new TextBox();
}

class TextBox extends EventElement {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'text';
	}

	placeholder(placeholder) {
		return this.attribute('placeholder', placeholder);
	}
}