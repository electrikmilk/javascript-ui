import {Element} from '../base/element.js';

export function RadioGroup(name, options) {
	return new InputRadioGroup(name, options);
}

class InputRadioGroup extends Element {
	constructor(name, options) {
		const element = new DocumentFragment();
		for (let option in options) {
			const radio = document.createElement('input');
			radio.type = 'radio';
			radio.id = option;
			radio.name = name;
			element.append(radio);
			const label = document.createElement('label');
			label.innerText = options[option];
			label.setAttribute('for', option);
			element.append(label);
		}
		super(element);
		this.element = element;
	}
}