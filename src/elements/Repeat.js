/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from "../element.js";

export const Repeat = {
    For(items, callback) {
        return new ForElement(items, callback);
    },
    Each(items, callback) {
        return new ForEachElement(items, callback);
    }
}

class ForElement extends Element {
    constructor(items, callback) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.elements = [];
        for (let key in items) {
            const value = items[key];
            this.elements.push(...callback(key, value));
        }
    }
}

class ForEachElement extends Element {
    constructor(items, callback) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.elements = [];
        items.forEach((item, index) => {
            this.elements.push(...callback(item, index));
        });
    }
}
