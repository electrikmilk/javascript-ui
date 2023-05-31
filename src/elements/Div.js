/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Div(elements) {
    return new DivTag(elements);
}

class DivTag extends Element {
    constructor(elements) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}