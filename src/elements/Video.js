/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Video(elements) {
    return new VideoTag(elements);
}

class VideoTag extends Element {
    constructor(elements) {
        const element = document.createElement('video');
        super(element);
        this.element = element;
        this.elements = elements;
    }

    src(src) {
        return this.attribute('src', src);
    }

    poster(src) {
        return this.attribute('poster', src);
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