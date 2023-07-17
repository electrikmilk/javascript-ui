/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function ScrollView(elements, auto = true) {
    return new OverflowDiv(elements, auto);
}

class OverflowDiv extends Element {
    constructor(elements, auto) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.overflow(auto === true ? 'auto' : 'scroll');
    }
}

export function FlexContent(elements) {
    return new FlexDiv(elements);
}

class FlexDiv extends Element {
    constructor(elements, auto) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.flex();
        this.placeItems('center');
    }
}
