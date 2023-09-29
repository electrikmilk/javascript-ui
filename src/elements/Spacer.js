/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Space() {
    return new NonBreakingSpace();
}

class NonBreakingSpace extends Element {
    constructor() {
        const element = document.createTextNode(' ');
        super(element);
        this.element = element;
    }
}

export function Spacer(times = 1) {
    return new BreakTag(times);
}

export function HSpacer(size = 1) {
    return new HorizontalSpacer(size);
}

class BreakTag extends Element {
    constructor(times) {
        let element;
        if (times === 1) {
            element = document.createElement('br');
        } else {
            element = new DocumentFragment();
            for (let i = 0; i < times; i++) {
                let brTag = document.createElement('br');
                element.append(brTag);
            }
        }
        super(element);
        this.element = element;
    }
}

class HorizontalSpacer extends Element {
    constructor(size) {
        const element = document.createElement('div');
        element.style.width = size + 'rem';
        super(element);
        this.element = element;
    }
}