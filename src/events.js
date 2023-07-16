/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Style} from './style.js';
import {onWindowResize} from './window.js';

export class Events extends Style {
    element;

    constructor(element) {
        super(element);
        this.element = element;
    }

    onDeviceSmall(callback) {
        if (window.innerWidth <= 640) {
            callback(this);
        }
        const instance = this;
        onWindowResize(() => {
            if (window.innerWidth <= 640) {
                callback(this);
            }
        });
        return this;
    }

    onDeviceMedium(callback) {
        if (window.innerWidth > 640 && window.innerWidth <= 1007) {
            callback(this);
        }
        const instance = this;
        onWindowResize(() => {
            if (window.innerWidth > 640 && window.innerWidth <= 1007) {
                callback(this);
            }
        });
        return this;
    }

    onDeviceLarge(callback) {
        if (window.innerWidth > 1007) {
            callback(this);
        }
        const instance = this;
        onWindowResize(() => {
            if (window.innerWidth > 1007) {
                callback(this);
            }
        });
        return this;
    }

    onLoad(callback) {
        this.element.onload = (event) => callback(this, event);
        return this;
    }

    onClick(callback) {
        this.element.onclick = (event) => callback(this, event);
        return this;
    }

    onChange(callback) {
        this.element.onchange = (event) => callback(this, event);
        if (this.isTextInput()) {
            this.element.onkeyup = (event) => callback(this, event);
        }
        return this;
    }

    onHover(callback, leaveCallback) {
        this.element.onmouseenter = (event) => callback(this, event);
        if (leaveCallback) {
            this.element.onmouseout = (event) => leaveCallback(this, event);
        }
        return this;
    }

    onFocus(callback) {
        this.element.onfocus = (event) => callback(this, event);
        return this;
    }

    onBlur(callback) {
        this.element.onblur = (event) => callback(this, event);
        return this;
    }

    onDoubleClick(callback) {
        this.element.ondblclick = (event) => callback(this, event);
        return this;
    }

    onError(callback) {
        this.element.onerror = (event) => callback(this, event);
        return this;
    }

    onKeypress(callback) {
        this.element.onkeyup = (event) => callback(this, event);
        return this;
    }
}
