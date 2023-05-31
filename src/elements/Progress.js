/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function ProgressBar(elements) {
    return new ProgressTag(elements);
}

class ProgressTag extends Element {
    constructor(elements) {
        const element = document.createElement('progress');
        super(element);
        this.element = element;
        this.elements = elements;
    }

    max(max) {
        return this.attribute('max', max);
    }

    defaultValue(value) {
        return this.attribute('value', value);
    }
}