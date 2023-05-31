/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Dialog(elements) {
    return new DialogTag(elements);
}

class DialogTag extends Element {
    constructor(elements) {
        const element = document.createElement('dialog');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}