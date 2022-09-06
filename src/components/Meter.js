/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Meter(components) {
	return new MeterTag(components);
}

class MeterTag extends Element {
	constructor(components) {
		const element = document.createElement('meter');
		super(element);
		this.element = element;
		this.components = components;
	}

	form(formId) {
		return this.attribute('form', formId);
	}

	low(low) {
		return this.attribute('low', low);
	}

	high(high) {
		return this.attribute('high', high);
	}

	min(min) {
		return this.attribute('min', min);
	}

	max(max) {
		return this.attribute('max', max);
	}

	optimal(optimum) {
		return this.attribute('optimum', optimum);
	}

	defaultValue(value) {
		return this.attribute('value', value);
	}
}