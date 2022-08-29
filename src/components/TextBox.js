/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextBox() {
	return new TextArea();
}

class TextArea extends Element {
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