/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Audio(elements) {
    return new AudioTag(elements);
}

class AudioTag extends Element {
    constructor(elements) {
        const element = document.createElement('audio');
        super(element);
        this.element = element;
        this.elements = elements;
    }

    src(src) {
        return this.attribute('src', src);
    }

    preload(preload) {
        return this.attribute('preload', preload);
    }

    controls() {
        return this.attribute('controls', '');
    }

    autoplay() {
        return this.attribute('autoplay', '');
    }

    loop() {
        return this.attribute('loop', '');
    }

    muted() {
        return this.attribute('muted', '');
    }
}