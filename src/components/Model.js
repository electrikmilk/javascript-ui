/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from "../element.js";
import {render} from "../main.js";

export function Model(store, callback) {
    return new ModelElement(store, callback);
}

class ModelElement extends Element {
    constructor(store, callback) {
        const element = document.createElement('span');
        super(element);
        this.element = element;

        const self = this;
        store.model((value) => {
            self.element.innerHTML = '';
            render(self.element, callback(value));
        });
    }
}
