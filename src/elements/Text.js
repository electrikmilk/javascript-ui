/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Text(text) {
    return new TextTag(text);
}

class TextTag extends Element {
    constructor(text) {
        const element = document.createTextNode(text);
        super(element);
        this.element = element;
        this.element.innerText = text;
    }
}

export function Bold(text) {
    return new BoldTag(text);
}

class BoldTag extends Element {
    constructor(text) {
        const element = document.createElement('strong');
        super(element);
        this.element = element;
        if (text) {
            this.element.innerText = text;
        }
    }
}

export function Italic(text) {
    return new ItalicTag(text);
}

class ItalicTag extends Element {
    constructor(text) {
        const element = document.createElement('em');
        super(element);
        this.element = element;
        if (text) {
            this.element.innerText = text;
        }
    }
}

export function Paragraph(elements) {
    return new ParagraphTag(elements);
}

class ParagraphTag extends Element {
    constructor(elements) {
        const element = document.createElement('p');
        super(element);
        this.element = element;
        if (elements) {
            if (Array.isArray(elements)) {
                let i = 0;
                for (let element in elements) {
                    if (elements[element].element.innerText) {
                        if (i === 0) {
                            elements[element].element.innerText += ' ';
                        } else {
                            elements[element].element.innerText = ' ' + elements[element].element.innerText + ' ';
                        }
                    }
                    ++i;
                }
                this.elements = elements;
            } else {
                this.element.innerText = elements;
            }
        }
    }
}

export function Heading(text, size = '1') {
    return new HeadingTag(text, size);
}

class HeadingTag extends Element {
    constructor(text, size) {
        const element = document.createElement('h' + size);
        super(element);
        this.element = element;
        if (text) {
            this.element.innerText = text;
        }
    }
}

export function Label(text, forName) {
    return new LabelTag(text, forName);
}

class LabelTag extends Element {
    constructor(text, forName) {
        const element = document.createElement('label');
        super(element);
        this.element = element;
        if (text) {
            this.element.innerText = text;
        }
        if (forName) {
            this.attribute('for', forName);
        }
    }
}