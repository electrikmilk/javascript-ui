import {Element} from '../element.js';

export function Button(components) {
	return new ButtonTag('button');
}

export function SubmitButton(components) {
	return new ButtonTag('submit');
}

export function ResetButton(components) {
	return new ButtonTag('reset');
}

class ButtonTag extends Element {
	constructor(type) {
		const element = document.createElement('button');
		super(element);
		this.element = element;
		if(type) {
			this.element.type = type;
		}
	}
}