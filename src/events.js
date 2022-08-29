/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Style} from './style.js';

export class EventElement extends Style {
	#element;

	constructor(element) {
		super(element);
		this.#element = element;
	}

	onClick(callback) {
		this.#element.onclick = (event) => callback(event);
		return this;
	}

	onChange(callback) {
		this.#element.onchange = (event) => callback(event);
		return this;
	}

	onSubmit(callback) {
		this.#element.onsubmit = (event) => callback(event);
		return this;
	}

	onBlur(callback) {
		this.#element.onblur = (event) => callback(event);
		return this;
	}

	onDoubleClick(callback) {
		this.#element.ondblclick = (event) => callback(event);
		return this;
	}

	onFocus(callback) {
		this.#element.onfocus = (event) => callback(event);
		return this;
	}

	onError(callback) {
		this.#element.onerror = (event) => callback(event);
		return this;
	}

	onKeypress(callback) {
		this.#element.onkeyup = (event) => callback(event);
		return this;
	}
}