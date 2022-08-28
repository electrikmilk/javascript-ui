import {EventElement} from '../events.js';

export function TextBox() {
	return new TextArea();
}

class TextArea extends EventElement {
	constructor() {
		const element = document.createElement('textarea');
		super(element);
		this.element = element;
	}

	placeholder(placeholder) {
		return this.attribute('placeholder', placeholder);
	}

	cols(columns) {
		return this.attribute('cols', columns);
	}

	rows(rows) {
		return this.attribute('rows', rows);
	}
}