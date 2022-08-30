/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Nav(components) {
	return new NavTag(components);
}

class NavTag extends Element {
	constructor(components) {
		const element = document.createElement('nav');
		super(element);
		this.element = element;
		this.components = components;
	}
}