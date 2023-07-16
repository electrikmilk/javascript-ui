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

    if(store) {
        store.model(store, (value) => {
            if ((value) === true) {
                this.show();
            } else if ((value) === false) {
                this.hide();
            }
        })
    }

    model(store, callback = null) {
        if (callback) {
            store.model((value) => callback(this, value));
            return this;
        }

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
                        const type = self.element.getAttribute('type');
                        if (type === 'checkbox' || type === 'radio') {
                            self.setChecked(value);
                        } else {
                            self.element.value = value;
                        }
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

    addClass(c) {
        let classes = this.element.className.split(' ');
        classes.push(c);
        this.element.className = classes.join(' ');
    }

    removeClass(c) {
        let classes = this.element.className.split(' ');
        let classIndex = classes.indexOf(c);
        classes = classes.splice(classIndex, 1);
        this.element.className = classes.join(' ');
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