/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function ForEach(items, callback) {
    return new ForEachElement(items, callback);
}

class ForEachElement extends Element {
    constructor(items, callback) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.elements = [];
        let index = 0;
        for (let key in items) {
            const value = items[key];
            this.elements.push(...callback(value, key, index));
            index++;
        }
    }
}
