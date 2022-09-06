/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Textarea() {
	return new TextareaTag();
}

class TextareaTag extends Element {
	constructor() {
		const element = document.createElement('textarea');
		super(element);
		this.element = element;
	}

	defaultValue(value) {
		return this.element.innerText = value;
	}

	name(name) {
		return this.attribute('name', name);
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