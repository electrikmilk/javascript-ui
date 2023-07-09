/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Events} from './events.js';

export class Element extends Events {
    element;
    mountedCallback;
    createdCallback;

    constructor(element) {
        super(element);
        this.element = element;
    }

    created(callback) {
        this.createdCallback = callback;
        return this;
    }

    mounted(callback) {
        this.mountedCallback = callback;
        return this;
    }

    model(store) {
        let tagname = this.element.tagName ?? null;
        if (tagname) {
            tagname = tagname.toLowerCase();
        }
        const self = this;
        store.model((value) => {
            if (self.element.textContent) {
                self.element.textContent = value;
            } else {
                switch (tagname) {
                    case 'input':
                        self.element.value = value;
                        break;
                    case 'button':
                        self.element.textContent = value;
                        break;
                    case 'select':
                        self.element.value = value;
                        break;
                    default:
                        self.element.innerText = value;
                }
            }
        });
        return this;
    }

    attribute(attribute, value) {
        this.element.setAttribute(attribute, value);
        return this;
    }

    property(property, value) {
        this.element[property] = value;
        return this;
    }

    id(id) {
        return this.attribute('id', id);
    }

    class(className) {
        return this.attribute('class', className);
    }

    classes(classes) {
        if (Array.isArray(classes)) {
            this.element.className = classes.join(' ');
        }
        return this;
    }

    text(text) {
        return this.property('innerText', text);
    }

    html(html) {
        return this.property('innerHTML', html);
    }

    copy(text) {
        if (navigator.clipboard) {
            this.onClick(() => {
                const type = 'text/plain';
                const blob = new Blob([text], {type});
                const data = [new ClipboardItem({[type]: blob})];
                navigator.clipboard.write(data)
                    .then(() => console.log('[javascript-ui] Content was copied'))
                    .catch((error) => console.log('[javascript-ui] Error copying content', error));
            });
        }
        return this;
    }

    share(content) {
        let data;
        if (content.constructor && content.constructor === Object) {
            data = content;
        } else if (content.includes('http')) {
            data = {
                url: content
            };
        } else {
            data = {
                text: content
            };
        }
        if (navigator.share && navigator.canShare(data)) {
            navigator.share(data)
                .then(() => console.log('[javascript-ui] Content was shared'))
                .catch((error) => console.log('[javascript-ui] Error sharing content', error));
        } else {
            console.error('[javascript-ui] Unable to share!');
        }
        return this;
    }
}