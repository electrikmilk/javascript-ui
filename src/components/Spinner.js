/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Spinner(size = '40px', color) {
	return new SpinnerComponent(size, color);
}

class SpinnerComponent extends Element {
	constructor(size, color) {
		const element = document.createElement('div');
		element.className = 'jsui-spinner';
		element.style.display = 'inline-block';
		element.style.position = 'relative';
		if (size) {
			element.style.width = size;
			element.style.height = size;
		}
		super(element);
		this.element = element;
		const fade = 'rgba(150,150,150,.5)';
		this.borderTop(color);
		this.borderLeft(fade);
		this.borderRight(fade);
		this.borderBottom(fade);
		this.borderWidth('4px');
		this.circle();
		this.rotate(800, Infinity);
	}
}