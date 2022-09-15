/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextBox() {
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

export function TextEditor(components) {
	return new ContentEditable(components);
}

class ContentEditable extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
		this.element.contentEditable = true;
	}
}

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