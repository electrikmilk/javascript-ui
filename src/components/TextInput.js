/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextInput() {
	return new TextBox();
}

class TextBox extends Element {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'text';
	}

	type(type) {
		return this.attribute('type', type);
	}

	name(name) {
		return this.attribute('name', name);
	}

	placeholder(placeholder) {
		return this.attribute('placeholder', placeholder);
	}
}