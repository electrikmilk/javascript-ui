import {Element} from '../element.js';

export function CheckBoxGroup(options) {
	return new InputCheckboxGroup(options);
}

class InputCheckboxGroup extends Element {
	constructor(options) {
		const element = new DocumentFragment();
		for (let option in options) {
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = option;
			checkbox.name = option;
			element.append(checkbox);
			const label = document.createElement('label');
			label.innerText = options[option];
			label.setAttribute('for', option);
			element.append(label);
		}
		super(element);
		this.element = element;
	}
}