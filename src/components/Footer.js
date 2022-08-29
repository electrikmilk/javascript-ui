/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Footer(components) {
	return new FooterTag(components);
}

class FooterTag extends Element {
	constructor(components) {
		const element = document.createElement('footer');
		super(element);
		this.element = element;
		this.components = components;
	}
}