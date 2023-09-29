/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Events} from './events.js';

export class Element extends Events {
    element;

    constructor(element) {
        super(element);
        this.element = element;
    }

    parent() {
        return this.element.parentElement;
    }

    if(store) {
        store.model((value) => {
            if ((value) === true) {
                this.show();
            } else if ((value) === false) {
                this.hide();
            }
        });
    }

    model(store, callback = null) {
        if (callback) {
            store.model((value) => callback(this, value));
            return this;
        }

        const tagname = this.tag();
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
        if (this.isTextInput()) {
            this.onChange((element) => {
                store.set(element.value());
            });
        }
        return this;
    }

    copy(text) {
        if (navigator.clipboard) {
            this.onClick(() => {
                const type = 'text/plain';
                const blob = new Blob([text], {type});
                const data = [new ClipboardItem({[type]: blob})];
                navigator.clipboard.write(data).then(() => console.log('[javascript-ui] Content was copied')).catch((error) => console.log('[javascript-ui] Error copying content', error));
            });
        }
        return this;
    }
}