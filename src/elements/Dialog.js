/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Dialog(elements, open = null) {
    return new DialogTag(elements, open);
}

class DialogTag extends Element {
    constructor(elements, open) {
        const element = document.createElement('dialog');
        super(element);
        this.element = element;
        this.elements = elements;
        if (open) {
            this.open(open);
        }
    }

    open(state) {
        return this.toggleAttribute('open', state);
    }

    show() {
        this.element.showModal();
    }

    close(data) {
        this.element.close(data);
    }

    onClose(callback) {
        this.element.onclose = (event) => callback(this, event);
        return this;
    }

    returnValue() {
        return this.element.returnValue;
    }
}