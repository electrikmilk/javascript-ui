/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {EventElement} from '../events.js';

export function Dropdown(options) {
	return new DropdownGroup(options);
}

class DropdownGroup extends EventElement {
	constructor(options) {
		const element = document.createElement('select');
		for (let option in options) {
			element.innerHTML += '<option value="' + option + '">' + options[option] + '</option>';
		}
		super(element);
		this.element = element;
	}
}