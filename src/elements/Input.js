/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function TextInput() {
    return new TextInputTag();
}

export function SpinBox() {
    return new TextInputTag('number');
}

export function EmailInput() {
    return new TextInputTag('email');
}

export function SecureInput() {
    return new TextInputTag('password');
}

export function ColorPicker() {
    return new TextInputTag('color');
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
}

class BaseTextInput extends InputTag {
    constructor(type) {
        super(type);
    }

    name(name) {
        return this.attribute('name', name);
    }

    placeholder(placeholder) {
        return this.attribute('placeholder', placeholder);
    }

    autofocus(state = null) {
        this.toggleAttribute('autofocus', state);
    }

    required(state = null) {
        this.toggleAttribute('required', state);
    }
}

class TextInputTag extends BaseTextInput {
    constructor(type = 'text') {
        super(type);
    }

    value() {
        return this.element.value;
    }

    setValue(value) {
        return this.attribute('value', value);
    }
}

class TextareaTag extends BaseTextInput {
    constructor() {
        const element = document.createElement('textarea');
        super(element);
        this.element = element;
    }

    value() {
        return this.element.innerText;
    }

    setValue(text) {
        return this.property('innerText', text);
    }

    cols(columns) {
        return this.attribute('cols', columns);
    }

    rows(rows) {
        return this.attribute('rows', rows);
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

class InputCheckbox extends InputTag {
    constructor() {
        super('checkbox');
    }

    checked(state = null) {
        return this.toggleAttribute('checked', state);
    }
}

class InputRadio extends InputTag {
    constructor() {
        super('radio');
    }

    selected(state = null) {
        return this.toggleAttribute('checked', state);
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
