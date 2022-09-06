/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Table(components) {
	return new TableTag(components);
}

class TableTag extends Element {
	constructor(components) {
		const element = document.createElement('table');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableRow(components) {
	return new TableRowTag(components);
}

class TableRowTag extends Element {
	constructor(components) {
		const element = document.createElement('tr');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableHeader(components) {
	return new TableHeaderTag(components);
}

class TableHeaderTag extends Element {
	constructor(components) {
		const element = document.createElement('thead');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableBody(components) {
	return new TableBodyTag(components);
}

class TableBodyTag extends Element {
	constructor(components) {
		const element = document.createElement('tbody');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableFooter(components) {
	return new TableFooterTag(components);
}

class TableFooterTag extends Element {
	constructor(components) {
		const element = document.createElement('tfoot');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableHeaderCell(components) {
	return new TableHeaderCellTag(components);
}

class TableHeaderCellTag extends Element {
	constructor(components) {
		const element = document.createElement('th');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function TableCell(components) {
	return new TableDataCellTag(components);
}

class TableDataCellTag extends Element {
	constructor(components) {
		const element = document.createElement('td');
		super(element);
		this.element = element;
		this.components = components;
	}
}
