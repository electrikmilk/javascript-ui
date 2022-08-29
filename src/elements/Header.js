/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Header(components) {
	return new HeaderTag(components);
}

class HeaderTag extends Element {
	constructor(components) {
		const element = document.createElement('header');
		super(element);
		this.element = element;
		this.components = components;
	}
}