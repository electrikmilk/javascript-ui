/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function CheckBox() {
	return new InputCheckbox();
}

class InputCheckbox extends Element {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'checkbox';
	}
}