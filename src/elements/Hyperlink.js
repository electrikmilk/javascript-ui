/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Hyperlink(elements, url) {
    return new AnchorTag(elements, url);
}

class AnchorTag extends Element {
    constructor(elements, url) {
        const element = document.createElement('a');
        super(element);
        this.element = element;
        if (elements) {
            if (Array.isArray(elements)) {
                this.elements = elements;
            } else {
                this.element.innerText = elements;
            }
        }
        if (url) {
            this.url(url);
        }
    }

    route(name) {
        return this.attribute('route', name);
    }

    url(url) {
        return this.attribute('href', url);
    }

    openNewTab() {
        return this.target('_blank');
    }

    openWindow(features) {
        let url = this.element.href;
        let windowFeatures = [];
        if (features) {
            for (let feature in features) {
                if (features[feature] === false) {
                    continue;
                }
                if (features[feature] === true) {
                    windowFeatures.push(feature);
                } else {
                    windowFeatures.push(feature + '=' + features[feature]);
                }
            }
        }
        this.element.onclick = (e) => {
            e.preventDefault();
            window.open(url, '_blank', windowFeatures.join(','));
        };
    }

    target(target) {
        if (!target.includes('_')) {
            target = '_' + target;
        }
        this.element.target = target;
        return this;
    }

    relationships(relationships) {
        return this.attribute('rel', relationships.join(' '));
    }

    download(bool) {
        if (bool === true && !this.element.hasAttribute('download')) {
            this.element.download = '';
        } else if (bool === false && this.element.hasAttribute('download')) {
            this.element.removeAttribute('download');
        }
        return this;
    }

    lang(lang) {
        return this.attribute('hreflang', lang);
    }

    mime(mime) {
        return this.attribute('type', mime);
    }

    types(types) {
        if (Array.isArray(types)) {
            this.element.rel = types.join(' ');
        }
        return this;
    }

    ping(urls) {
        if (Array.isArray(urls)) {
            this.element.ping = urls.join(' ');
        }
        return this;
    }
}
