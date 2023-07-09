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
export * from './elements/Logic.js';
export * from './elements/Repeat.js';
export * from './elements/CheckBoxGroup.js';
export * from './elements/RadioGroup.js';
export * from './elements/Spinner.js';
export * from './elements/Spacer.js';
export * from './elements/Stack.js';
export * from './elements/View.js';

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

export function view(elements, debugLog = false) {
    if (document.body.hasChildNodes()) {
        document.body.innerHTML = '';
    }
    if (debugLog === true) {
        debug(elements);
    }
    buildUI(document.body, elements);
    setTimeout(function () {
        applyGlobalStyle();
    }, 500);
    return new Body();
}

function buildUI(parent, elements) {
    if (elements.default) {
        elements = elements.default;
    }
    if (Array.isArray(elements)) {
        elements.forEach(function (element) {
            if (element.default) {
                element = element.default;
            }
            if (Array.isArray(element)) {
                buildUI(parent, element);
            } else {
                mountElement(parent, element);
            }
        });
    } else {
        mountElement(parent, elements);
    }
}

function mountElement(parent, element) {
    if (element.createdCallback) {
        element.createdCallback(element);
    }
    parent.appendChild(element.element);
    if (element.mountedCallback) {
        element.mountedCallback(element);
    }
    if (element.elements) {
        buildUI(element.element, element.elements);
    }
}

function applyGlobalStyle() {
    const style = document.createElement('style');
    style.id = 'jsUI';
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = globalCSS;
    } else {
        style.appendChild(document.createTextNode(globalCSS));
    }
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
        setTimeout(function () {
            instance.#apply();
        }, 100);
    }

    #apply() {
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
            'background': hexColor + '50'
        },
        '::moz-selection': {
            'background': hexColor + '50'
        },
        'a:link': {
            'color': hexColor
        },
        '.jsui-spinner': {
            'border-top-color': hexColor
        },
        'input,textarea,select': {
            'accent-color': hexColor,
            'outline-color': hexColor,
            'caret-color': hexColor
        }
    });
    return this;
}

export function select(selector) {
    return new InstanceSelector(selector);
}

class InstanceSelector extends Element {
    constructor(selector) {
        const element = document.getElementById(selector);
        if (element) {
            super(element);
            this.element = element;
        } else {
            console.error('Cannot find element with name: ' + selector);
            return false;
        }
    }
}

export function debug(elements) {
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
            const tagName = element.element ? element.element.tagName ?? null : null;
            if (tagName) {
                console.log(`HTML Tag: <${element.element.tagName.toLowerCase()}/>`);
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
    })
}
