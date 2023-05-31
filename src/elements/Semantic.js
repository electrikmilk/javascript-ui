/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Aside(elements) {
    return new AsideTag(elements);
}

class AsideTag extends Element {
    constructor(elements) {
        const element = document.createElement('aside');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Address(elements) {
    return new AddressTag(elements);
}

class AddressTag extends Element {
    constructor(elements) {
        const element = document.createElement('address');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Article(elements) {
    return new ArticleTag(elements);
}

class ArticleTag extends Element {
    constructor(elements) {
        const element = document.createElement('article');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Blockquote(elements) {
    return new BlockquoteTag(elements);
}

class BlockquoteTag extends Element {
    constructor(elements) {
        const element = document.createElement('blockquote');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Code(code) {
    return new CodeTag(code);
}

class CodeTag extends Element {
    constructor(code) {
        const element = document.createElement('code');
        super(element);
        this.element = element;
        if (code) {
            this.element.innerText = code;
        }
    }
}

export function Details(elements) {
    return new DetailsTag(elements);
}

class DetailsTag extends Element {
    constructor(elements) {
        const element = document.createElement('details');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Footer(elements) {
    return new FooterTag(elements);
}

class FooterTag extends Element {
    constructor(elements) {
        const element = document.createElement('footer');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Header(elements) {
    return new HeaderTag(elements);
}

class HeaderTag extends Element {
    constructor(elements) {
        const element = document.createElement('header');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Main(elements) {
    return new MainTag(elements);
}

class MainTag extends Element {
    constructor(elements) {
        const element = document.createElement('main');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Nav(elements) {
    return new NavTag(elements);
}

class NavTag extends Element {
    constructor(elements) {
        const element = document.createElement('nav');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Section(elements) {
    return new SectionTag(elements);
}

class SectionTag extends Element {
    constructor(elements) {
        const element = document.createElement('section');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}

export function Summary(elements) {
    return new SummaryTag(elements);
}

class SummaryTag extends Element {
    constructor(elements) {
        const element = document.createElement('summary');
        super(element);
        this.element = element;
        this.elements = elements;
    }
}