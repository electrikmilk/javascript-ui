/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function HStack(components) {
	return new HStackTag(components);
}

class HStackTag extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'column dense';
		this.element.style.gridTemplateRows = 'repeat(1, 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(' + this.components.length + ', 1fr)';
	}
}

export function VStack(components, rows = 12) {
	return new VStackTag(components, rows);
}

class VStackTag extends Element {
	constructor(components) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'row dense';
		this.element.style.gridTemplateRows = 'repeat(' + this.components.length + ', 1fr)';
		this.element.style.gridTemplateColumns = 'repeat(1, 1fr)';
	}
}

export function GridStack(components, type = 'fill', min = '50%') {
	return new GridStackTag(components, type, min);
}

class GridStackTag extends Element {
	constructor(components, min = '200px', type) {
		const element = document.createElement('div');
		super(element);
		this.element = element;
		this.components = components;
		this.element.style.display = 'grid';
		this.element.style.gridAutoFlow = 'unset';
		this.element.style.gridTemplateColumns = 'repeat(auto-' + type + ', minmax(' + min + ', 1fr))';
	}
}
