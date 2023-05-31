/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Table(elements) {
    return new TableTag(elements);
}

class TableTag extends Element {
    constructor(elements) {
        const element = document.createElement('table');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableRow(elements) {
    return new TableRowTag(elements);
}

class TableRowTag extends Element {
    constructor(elements) {
        const element = document.createElement('tr');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableHeader(elements) {
    return new TableHeaderTag(elements);
}

class TableHeaderTag extends Element {
    constructor(elements) {
        const element = document.createElement('thead');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableBody(elements) {
    return new TableBodyTag(elements);
}

class TableBodyTag extends Element {
    constructor(elements) {
        const element = document.createElement('tbody');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableFooter(elements) {
    return new TableFooterTag(elements);
}

class TableFooterTag extends Element {
    constructor(elements) {
        const element = document.createElement('tfoot');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableHeaderCell(elements) {
    return new TableHeaderCellTag(elements);
}

class TableHeaderCellTag extends Element {
    constructor(elements) {
        const element = document.createElement('th');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function TableCell(elements) {
    return new TableDataCellTag(elements);
}

class TableDataCellTag extends Element {
    constructor(elements) {
        const element = document.createElement('td');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}
