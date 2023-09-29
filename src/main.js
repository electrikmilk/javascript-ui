/*
 * Copyright (c) 2023 Brandon Jordan
 */

'use strict';

export * from './elements/Audio.js';
export * from './elements/Button.js';
export * from './elements/Canvas.js';
export * from './elements/Div.js';
export * from './elements/Dialog.js';
export * from './elements/Frame.js';
export * from './elements/Line.js';
export * from './elements/Hyperlink.js';
export * from './elements/Lists.js';
export * from './elements/Semantic.js';
export * from './elements/Picture.js';
export * from './elements/Progress.js';
export * from './elements/Meter.js';
export * from './elements/Tag.js';
export * from './elements/Form.js';
export * from './elements/Text.js';
export * from './elements/Input.js';
export * from './elements/Table.js';
export * from './elements/Source.js';
export * from './elements/Track.js';
export * from './elements/Image.js';
export * from './elements/Video.js';
export * from './elements/Dropdown.js';
export * from './elements/CheckBoxGroup.js';
export * from './elements/RadioGroup.js';
export * from './elements/Spacer.js';

export * from './components/Logic.js';
export * from './components/Repeat.js';
export * from './components/Model.js';
export * from './components/Spinner.js';
export * from './components/Stack.js';
export * from './components/View.js';

import {Element} from './element.js';

export * from './store.js';
export * from './router.js';

const head = document.querySelector('head');

let globalCSS = '';
let accent;

window.onload = () => {
    if (!document.querySelector('meta[name=viewport]')) {
        let metaViewport = document.createElement('meta');
        metaViewport.name = 'viewport';
        metaViewport.content = 'width=device-width, initial-scale=1';
        head.appendChild(metaViewport);
    }
    if (!document.querySelector('meta[name=http-equiv]')) {
        let meta = document.createElement('meta');
        meta.httpEquiv = 'X-UA-Compatible';
        meta.content = 'IE=edge';
        head.appendChild(meta);
    }
    if (!document.querySelector('meta[charset]')) {
        let metaCharset = document.createElement('meta');
        metaCharset.charset = 'UTF-8';
        head.appendChild(metaCharset);
    }
};

export let elementsTree;

export function view(elements, debug = false) {
    elementsTree = elements;
    if (document.body.hasChildNodes()) {
        document.body.innerHTML = '';
    }
    if (debug === true) {
        printDebug(elements);
    }
    render(document.body, elements);
    setTimeout(function() {
        applyGlobalStyle();
    }, 500);
    return new Body();
}

function updateView(debug = false) {
    if (document.body.hasChildNodes()) {
        document.body.innerHTML = '';
    }
    if (debug === true) {
        printDebug(elementsTree);
    }
    render(document.body, elementsTree);
    setTimeout(function() {
        document.querySelector('style#jsUI').innerText = globalCSS;
    }, 500);
}

export function render(parent, elements) {
    if (Array.isArray(elements)) {
        elements.forEach(function(element) {
            if (Array.isArray(element)) {
                render(parent, element);
            } else {
                mount(parent, element);
            }
        });
    } else {
        mount(parent, elements);
    }
}

function mount(parent, element) {
    if (element.createdCallbacks) {
        element.createdCallbacks.map(c => c(element));
    }
    parent.appendChild(element.element);
    if (element.mountedCallbacks) {
        element.mountedCallbacks.map(m => m(element));
    }
    if (element.elements) {
        render(element.element, element.elements);
    }
}

function applyGlobalStyle() {
    const style = document.createElement('style');
    style.id = 'jsUI';
    style.setAttribute('type', 'text/css');
    style.innerText = globalCSS;
    head.appendChild(style);
}

export function addCSS(rules) {
    for (let rule in rules) {
        globalCSS += rule + '{';
        for (let property in rules[rule]) {
            globalCSS += property + ':' + rules[rule][property] + ';';
        }
        globalCSS += '}';
    }
}

export function globalStyle(selector) {
    return new GlobalElementStyle(selector);
}

class GlobalElementStyle extends Element {
    constructor(selector) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.selector = selector;
        const instance = this;
        setTimeout(function() {
            instance.apply();
        }, 100);
    }

    apply() {
        document.body.append(this.element);
        globalCSS += this.selector + '{' + this.element.getAttribute('style') + '}';
        this.element.remove();
    }
}

export class Body extends Element {
    constructor() {
        const element = document.body;
        super(element);
        this.element = element;
    }

    title(title) {
        document.title = title;
        return this;
    }

    icon(src) {
        icon(src);
        return this;
    }

    accentColor(hexColor) {
        accentColor(hexColor);
        return this;
    }
}

export function icon(src) {
    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'icon';

    const touchIconLink = document.createElement('link');
    touchIconLink.rel = 'apple-touch-icon';

    shortcutLink.href = src;
    touchIconLink.href = src;

    head.appendChild(shortcutLink);
    head.appendChild(touchIconLink);
}

export function getAccentColor() {
    return accent;
}

export function accentColor(hexColor) {
    accent = hexColor;
    if (!hexColor.includes('#')) {
        console.warn('Accent color should be a hex color value for proper application.');
    }
    addCSS({
        '::selection': {
            'background': hexColor + '50',
        },
        '::moz-selection': {
            'background': hexColor + '50',
        },
        'a:link': {
            'color': hexColor,
        },
        '.jsui-spinner': {
            'border-top-color': hexColor,
        },
        'input,textarea,select': {
            'accent-color': hexColor,
            'outline-color': hexColor,
            'caret-color': hexColor,
        },
    });
    return this;
}

export function ref(reference) {
    const ref = findRef(elementsTree, reference);
    if (!ref) {
        console.warn(`[javascript-ui] No element with reference '${reference}'.`);
    }
    return ref;
}

function findRef(elements, reference) {
    let referencedElement = null;
    for (let e in elements) {
        const element = elements[e];
        if (Array.isArray(element)) {
            return findRef(element, reference);
        } else {
            if (element.reference && element.reference === reference) {
                referencedElement = element;
                break;
            }
            if (element.elements) {
                return findRef(element.elements, reference);
            }
        }
    }
    return referencedElement;
}

export function select(selector) {
    return new Selector(selector);
}

class Selector extends Element {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            super(element);
            this.element = element;
        } else {
            console.error('Cannot find element with selector: ' + selector);
            return false;
        }
    }
}

export function printDebug(elements) {
    const body = document.body;
    const globalStyle = document.querySelector('style#jsUI');
    console.log('[javascript-ui] Generated HTML', body);
    console.log('[javascript-ui] Generated CSS', globalStyle);
    console.group('[javascript-ui] Elements Tree');
    printElements(elements);
    console.groupEnd();
}

function printElements(elements) {
    elements.forEach((element) => {
        console.group(`[${element.constructor.name}]`);
        if (element.element) {
            const tagName = element.tag();
            const selector = element.selector();
            if (tagName) {
                console.log(`HTML Tag: <${tagName}/>`);
            }
            if (selector) {
                console.log(`Selector: ${selector}`);
            }
            if (element.reference) {
                console.log(`Reference: ${element.reference}`);
            }
        }
        if (element.elements || Array.isArray(element)) {
            console.group('[Elements]');
            if (Array.isArray(element)) {
                printElements(element);
            } else {
                printElements(element.elements);
            }
            console.groupEnd();
        } else if (element.element) {
            console.log(`Content: "${element.element.innerHTML ?? element.element.innerText}"`);
        }
        console.groupEnd();
    });
}
