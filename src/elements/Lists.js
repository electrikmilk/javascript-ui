/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function List(elements) {
    return new UnorderedList(elements);
}

class UnorderedList extends Element {
    constructor(elements) {
        const element = document.createElement('ul');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function NumberList(elements) {
    return new OrderedList(elements);
}

class OrderedList extends Element {
    constructor(elements) {
        const element = document.createElement('ol');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function ListItem(text) {
    return new ListTag(text);
}

class ListTag extends Element {
    constructor(text) {
        const element = document.createElement('li');
        super(element);
        this.element = element;
        if (text) {
            if (!Array.isArray(text)) {
                this.element.innerText = text;
            } else {
                this.elements = text;
            }
        }
    }
}