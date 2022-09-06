/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextInput() {
	return new InputTag();
}

class InputTag extends Element {
	constructor() {
		const element = document.createElement('input');
		super(element);
		this.element = element;
		this.element.type = 'text';
	}

	defaultValue(value) {
		return this.attribute('value', value);
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

export function ColorInput() {
	return new InputColor();
}

class InputColor extends InputTag {
	constructor() {
		super();
		this.element.type = 'color';
	}
}

export function Slider() {
	return new InputRange();
}

class InputRange extends InputTag {
	constructor() {
		super();
		this.element.type = 'range';
	}
}

export function SecureInput() {
	return new InputPassword();
}

class InputPassword extends InputTag {
	constructor() {
		super();
		this.element.type = 'password';
	}
}

export function CheckBox() {
	return new InputCheckbox();
}

class InputCheckbox extends InputTag {
	constructor() {
		super();
		this.element.type = 'checkbox';
	}

	checked() {
		return this.attribute('checked', '');
	}
}

export function Radio() {
	return new InputRadio();
}

class InputRadio extends InputTag {
	constructor() {
		super();
		this.element.type = 'radio';
	}

	selected() {
		return this.attribute('checked', '');
	}
}