/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Line() {
    return new HorizontalRuleTag();
}

class HorizontalRuleTag extends Element {
    constructor() {
        const element = document.createElement('hr');
        super(element);
        this.element = element;
    }
}