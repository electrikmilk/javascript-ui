/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function HStack(elements) {
    return new HStackTag(elements);
}

class HStackTag extends Element {
    constructor(elements) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.element.style.display = 'grid';
        this.element.style.gridAutoFlow = 'column dense';
        this.element.style.gridTemplateRows = 'repeat(1, 1fr)';
        this.element.style.gridTemplateColumns = 'repeat(' + this.elements.length + ', 1fr)';
    }
}

export function VStack(elements) {
    return new VStackTag(elements);
}

class VStackTag extends Element {
    constructor(elements) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.element.style.display = 'grid';
        this.element.style.gridAutoFlow = 'row dense';
        this.element.style.gridTemplateRows = 'repeat(' + this.elements.length + ', 1fr)';
        this.element.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
}

export function GridStack(elements, min = '50%', type = 'fill') {
    return new GridStackTag(elements, min, type);
}

class GridStackTag extends Element {
    constructor(elements, min, type) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.element.style.display = 'grid';
        this.element.style.gridAutoFlow = 'unset';
        this.element.style.gridTemplateColumns = 'repeat(auto-' + type + ', minmax(' + min + ', 1fr))';
    }
}
