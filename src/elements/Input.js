/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextInput() {
    return new InputTag('text');
}

export function SpinBox() {
    return new InputTag('number');
}

export function SecureInput() {
    return new InputTag('password');
}

export function ColorPicker() {
    return new InputTag('color');
}

export function Slider() {
    return new InputRange();
}

export function CheckBox() {
    return new InputCheckbox();
}

export function Radio() {
    return new InputRadio();
}

export function TextBox() {
    return new TextareaTag();
}

export function TextEditor(elements) {
    return new ContentEditable(elements);
}

class InputTag extends Element {
    constructor(type) {
        const element = document.createElement('input');
        super(element);
        this.element = element;
        this.element.type = type;
    }

    type(type) {
        return this.attribute('type', type);
    }

    value() {
        return this.element.value;
    }

    setValue(value) {
        return this.attribute('value', value);
    }

    name(name) {
        return this.attribute('name', name);
    }

    placeholder(placeholder) {
        return this.attribute('placeholder', placeholder);
    }
}

class TextareaTag extends Element {
    constructor() {
        const element = document.createElement('textarea');
        super(element);
        this.element = element;
    }

    value() {
        return this.element.innerText;
    }

    setValue(text) {
        this.element.innerText = text;
        return this;
    }

    cols(columns) {
        return this.attribute('cols', columns);
    }

    rows(rows) {
        return this.attribute('rows', rows);
    }

    name(name) {
        return this.attribute('name', name);
    }

    placeholder(placeholder) {
        return this.attribute('placeholder', placeholder);
    }
}

class InputRange extends InputTag {
    constructor() {
        super('range');
    }

    min(min) {
        return this.attribute('min', min);
    }

    max(max) {
        return this.attribute('max', max);
    }

    step(step) {
        return this.attribute('step', step);
    }
}

class CheckableInput extends InputTag {
    constructor(type) {
        super(type);
    }

    setChecked(state = null) {
        if (state || state === false) {
            if (state && !this.element.checked) {
                this.attribute('checked', '');
            } else {
                this.element.removeAttribute('checked');
            }
        } else if (this.element.checked) {
            this.attribute('checked', '');
        } else {
            this.element.removeAttribute('checked');
        }
    }
}

class InputCheckbox extends CheckableInput {
    constructor() {
        super('checkbox');
    }

    checked(state = null) {
        this.setChecked(state);
        return this;
    }
}

class InputRadio extends CheckableInput {
    constructor() {
        super('radio');
    }

    selected(state = null) {
        this.setChecked(state);
        return this;
    }
}

class ContentEditable extends Element {
    constructor(elements) {
        const element = document.createElement('div');
        super(element);
        this.element = element;
        this.elements = elements;
        this.element.contentEditable = true;
    }
}
