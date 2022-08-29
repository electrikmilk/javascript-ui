/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Spacer(times = 1) {
	return new BreakTag(times);
}

export function HSpacer(size = 1) {
	return new HorizontalSpacer(size);
}

class BreakTag extends Element {
	constructor(times) {
		const element = new DocumentFragment();
		for (let i = 0; i < times; i++) {
			element.append(document.createElement('br'));
		}
		super(element);
		this.element = element;
	}
}

class HorizontalSpacer extends Element {
	constructor(size) {
		const element = document.createElement('div');
		element.style.width = size + 'rem';
		super(element);
		this.element = element;
	}
}