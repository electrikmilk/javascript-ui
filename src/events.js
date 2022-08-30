/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Style} from './style.js';

export class EventElement extends Style {
	element;

	constructor(element) {
		super(element);
		this.element = element;
	}

	onClick(callback) {
		this.element.onclick = (event) => callback(this, event);
		return this;
	}

	onChange(callback) {
		this.element.onchange = (event) => callback(this, event);
		return this;
	}

	onHover(callback, leaveCallback) {
		this.element.onmouseenter = (event) => callback(this, event);
		if (leaveCallback) {
			this.element.onmouseout = (event) => leaveCallback(this, event);
		}
		return this;
	}

	onFocus(callback) {
		this.element.onfocus = (event) => callback(this, event);
		return this;
	}

	onBlur(callback) {
		this.element.onblur = (event) => callback(this, event);
		return this;
	}

	onDoubleClick(callback) {
		this.element.ondblclick = (event) => callback(this, event);
		return this;
	}

	onError(callback) {
		this.element.onerror = (event) => callback(this, event);
		return this;
	}

	onKeypress(callback) {
		this.element.onkeyup = (event) => callback(this, event);
		return this;
	}
}
