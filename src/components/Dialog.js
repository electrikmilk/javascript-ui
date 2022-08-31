/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Dialog(components) {
	return new DialogTag(components);
}

class DialogTag extends Element {
	constructor(components) {
		const element = document.createElement('dialog');
		super(element);
		this.element = element;
		this.components = components;
	}
}