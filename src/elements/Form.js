/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Form(elements) {
    return new FormElement(elements);
}

class FormElement extends Element {
    constructor(elements) {
        const element = document.createElement('form');
        super(element);
        this.element = element;
        this.elements = elements;
    }

    onSubmit(callback) {
        this.element.onsubmit = (event) => callback(event);
        return this;
    }

    action(action) {
        return this.attribute('action', action);
    }

    method(method) {
        return this.attribute('method', method);
    }
}