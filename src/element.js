/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Events} from './events.js';

export class Element extends Events {
	element;

	constructor(element) {
		super(element);
		this.element = element;
	}

	attribute(attribute, value) {
		this.element.setAttribute(attribute, value);
		return this;
	}

	property(property, value) {
		this.element[property] = value;
		return this;
	}

	id(id) {
		return this.attribute('id', id);
	}

	class(className) {
		return this.attribute('class', className);
	}

	classes(classes) {
		if (Array.isArray(classes)) {
			this.element.className = classes.join(' ');
		}
		return this;
	}

	text(text) {
		return this.property('innerText', text);
	}

	html(html) {
		return this.property('innerHTML', html);
	}
}