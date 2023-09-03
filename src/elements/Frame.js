/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Frame() {
    return new FrameTag();
}

class FrameTag extends Element {
    constructor() {
        const element = document.createElement('iframe');
        super(element);
        this.element = element;
    }

    src(src) {
        return this.attribute('src', src);
    }

    allow(allows) {
        if (allows && Array.isArray(allows)) {
            allows.forEach(function(a) {
                this.attribute('allow' + a, '');
            });
        }
        return this;
    }

    border(border) {
        return this.attribute('frameborder', border);
    }
}