/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Tag(tagName) {
    return new CustomElement(tagName);
}

class CustomElement extends Element {
    constructor(tagName) {
        const element = document.createElement(tagName);
        super(element);
        this.element = element;
    }
}