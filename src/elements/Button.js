/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Button(text) {
	return new ButtonTag('button', text);
}

export function SubmitButton(text) {
	return new ButtonTag('submit', text);
}

export function ResetButton(text) {
	return new ButtonTag('reset', text);
}

class ButtonTag extends Element {
	constructor(type, text) {
		const element = document.createElement('button');
		super(element);
		this.element = element;
		if (type) {
			this.element.type = type;
		}
		if (text) {
			this.element.innerText = text;
		}
	}
}