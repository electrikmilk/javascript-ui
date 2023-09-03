/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Source(src) {
    return new SourceTag(src);
}

class SourceTag extends Element {
    constructor(src) {
        const element = document.createElement('source');
        super(element);
        this.element = element;
        if (src) {
            this.element.srcset = src;
        }
    }

    src(src) {
        return this.attribute('src', src);
    }

    type(type) {
        return this.attribute('type', type);
    }

    media(media) {
        return this.attribute('media', media);
    }
}