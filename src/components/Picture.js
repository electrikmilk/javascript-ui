/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Picture(components) {
	return new PictureTag(components);
}

class PictureTag extends Element {
	constructor(components) {
		const element = document.createElement('picture');
		super(element);
		this.element = element;
		this.components = components;
	}
}