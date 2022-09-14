/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Text(text) {
	return new TextTag(text);
}

class TextTag extends Element {
	constructor(text) {
		const element = document.createElement('span');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}

export function Bold(text) {
	return new BoldTag(text);
}

class BoldTag extends Element {
	constructor(text) {
		const element = document.createElement('strong');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}

export function Italic(text) {
	return new ItalicTag(text);
}

class ItalicTag extends Element {
	constructor(text) {
		const element = document.createElement('em');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}

export function Paragraph(components) {
	return new ParagraphTag(components);
}

class ParagraphTag extends Element {
	constructor(components) {
		const element = document.createElement('p');
		super(element);
		this.element = element;
		if (components) {
			if (Array.isArray(components)) {
				let i = 0;
				for (let component in components) {
					if (components[component].element.innerText) {
						if (i === 0) {
							components[component].element.innerText += ' ';
						} else {
							components[component].element.innerText = ' ' + components[component].element.innerText + ' ';
						}
					}
					++i;
				}
				this.components = components;
			} else {
				this.element.innerText = components;
			}
		}
	}
}

export function Heading(text, size = '1') {
	return new HeadingTag(text, size);
}

class HeadingTag extends Element {
	constructor(text, size) {
		const element = document.createElement('h' + size);
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
	}
}

export function Label(text, forName) {
	return new LabelTag(text, forName);
}

class LabelTag extends Element {
	constructor(text, forName) {
		const element = document.createElement('label');
		super(element);
		this.element = element;
		if (text) {
			this.element.innerText = text;
		}
		if (forName) {
			this.attribute('for', forName);
		}
	}
}