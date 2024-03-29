/*
 * Copyright (c) 2024 Brandon Jordan
 */

export let references = {};
let htmlWarn = false;

export class BaseElement {
    element;
    reference;
    mountedCallbacks = [];
    createdCallbacks = [];
    inputTypes = ['text', 'search', 'url', 'number', 'password', 'email', 'tel'];

    constructor(element) {
        this.element = element;
    }

    ref(reference) {
        const existingRef = references[reference];
        if (existingRef) {
            console.error(`[javascript-ui] Existing element ${existingRef.constructor.name} already has the reference '${reference}'.`);
            return null;
        }
        this.reference = reference;
        references[reference] = this;
        return this;
    }

    tabIndex(index) {
        return this.attribute('tabindex', index);
    }

    toggleAttribute(attribute, state = null) {
        if (state || state === false) {
            if (state && !this.element.hasAttribute(attribute)) {
                this.attribute(attribute, '');
            } else {
                this.element.removeAttribute(attribute);
            }
        } else if (!this.element.hasAttribute(attribute)) {
            this.attribute(attribute, '');
        } else {
            this.element.removeAttribute(attribute);
        }
        return this;
    }

    tag() {
        let tagName = null;
        if (this.element && this.element.tagName) {
            tagName = this.element.tagName.toLowerCase();
        }
        return tagName;
    }

    isTextInput() {
        const tagname = this.tag();
        return ((tagname === 'input' && this.inputTypes.includes(this.element.type)) || tagname === 'textarea');
    }

    created(callback) {
        this.createdCallbacks.push(callback);
        return this;
    }

    mounted(callback) {
        this.mountedCallbacks.push(callback);
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
        if (import.meta.env.DEV && !htmlWarn) {
            console.warn('Do not use the html() method to render user-generated content. This creates a risk of cross-site scripting (XSS) attacks.');
            htmlWarn = true;
        }
        return this.property('innerHTML', html);
    }

    share(content) {
        let data;
        if (content.constructor && content.constructor === Object) {
            data = content;
        } else if (content.includes('http')) {
            data = {
                url: content,
            };
        } else {
            data = {
                text: content,
            };
        }
        if (navigator.share && navigator.canShare(data)) {
            navigator.share(data).then(() => console.log('[javascript-ui] Content was shared')).catch((error) => console.log('[javascript-ui] Error sharing content', error));
        } else {
            console.error('[javascript-ui] Unable to share!');
        }
        return this;
    }
}