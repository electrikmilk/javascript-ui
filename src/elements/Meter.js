/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Meter(elements) {
    return new MeterTag(elements);
}

class MeterTag extends Element {
    constructor(elements) {
        const element = document.createElement('meter');
        super(element);
        this.element = element;
        this.elements = elements;
    }

    form(formId) {
        return this.attribute('form', formId);
    }

    low(low) {
        return this.attribute('low', low);
    }

    high(high) {
        return this.attribute('high', high);
    }

    min(min) {
        return this.attribute('min', min);
    }

    max(max) {
        return this.attribute('max', max);
    }

    optimal(optimum) {
        return this.attribute('optimum', optimum);
    }

    defaultValue(value) {
        return this.attribute('value', value);
    }
}