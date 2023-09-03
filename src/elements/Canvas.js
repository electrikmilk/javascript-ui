/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Canvas() {
    return new CanvasTag();
}

class CanvasTag extends Element {
    constructor() {
        const element = document.createElement('canvas');
        super(element);
        this.element = element;
    }

    context(id = '2d') {
        return this.element.getContext(id);
    }
}