/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function ProgressBar(components) {
	return new ProgressTag(components);
}

class ProgressTag extends Element {
	constructor(components) {
		const element = document.createElement('progress');
		super(element);
		this.element = element;
		this.components = components;
	}

	max(max) {
		return this.attribute('max', max);
	}

	defaultValue(value) {
		return this.attribute('value', value);
	}
}