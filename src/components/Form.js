/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Form(components) {
	return new FormElement(components);
}

class FormElement extends Element {
	constructor(components) {
		const element = document.createElement('form');
		super(element);
		this.element = element;
		this.components = components;
	}

	onSubmit(callback) {
		this.element.onsubmit = (event) => callback(event);
		return this;
	}

	action(action) {
		return this.attribute('action', action);
	}

	method(method) {
		return this.attribute('method', method);
	}
}