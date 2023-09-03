/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';

export function Dropdown(options) {
    return new DropdownGroup(options);
}

class DropdownGroup extends Element {
    constructor(options) {
        const select = document.createElement('select');
        for (let option in options) {
            if (options[option].constructor === Object) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = option;
                for (let groupOption in options[option]) {
                    const optionTag = document.createElement('option');
                    optionTag.value = groupOption;
                    optionTag.innerText = options[option][groupOption];
                    optgroup.appendChild(optionTag);
                }
                select.appendChild(optgroup);
            } else {
                const optionTag = document.createElement('option');
                optionTag.value = option;
                optionTag.innerText = options[option];
                select.appendChild(optionTag);
            }
        }
        super(select);
        this.element = select;
    }
}