/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Item(components) {
	return new ListItem(components);
}

class ListItem extends Element {
	constructor(components) {
		const element = document.createElement('li');
		super(element);
		this.element = element;
		this.components = components;
	}
}