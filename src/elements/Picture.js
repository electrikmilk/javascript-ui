/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Picture(elements) {
    return new PictureTag(elements);
}

class PictureTag extends Element {
    constructor(elements) {
        const element = document.createElement('picture');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}