import {Style} from './style.js';

export class Element extends Style {
	#element;

	constructor(element) {
		super(element);
		this.#element = element;
	}

	name(name) {
		this.#element.id = name;
		return this;
	}

	attribute(attribute, value) {
		this.#element.setAttribute(attribute, value);
		return this;
	}

	property(property, value) {
		this.#element[property] = value;
		return this;
	}

	defaultValue(value) {
		return this.attribute('value', value);
	}

	class(className) {
		return this.attribute('class', className);
	}

	classes(classes) {
		if (Array.isArray(classes)) {
			this.#element.className = classes.join(' ');
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