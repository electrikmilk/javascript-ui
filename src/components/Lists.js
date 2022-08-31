/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function List(components) {
	return new UnorderedList(components);
}

class UnorderedList extends Element {
	constructor(components) {
		const element = document.createElement('ul');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function NumberList(components) {
	return new OrderedList(components);
}

class OrderedList extends Element {
	constructor(components) {
		const element = document.createElement('ol');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function ListItem(text) {
	return new ListTag(text);
}

class ListTag extends Element {
	constructor(text) {
		const element = document.createElement('li');
		super(element);
		this.element = element;
		if (text) {
			if (!Array.isArray(text)) {
				this.element.innerText = text;
			} else {
				this.components = text;
			}
		}
	}
}