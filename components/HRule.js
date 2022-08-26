import {Element} from '../base/element.js';

export function HRule() {
	return new HRuleTag();
}

class HRuleTag extends Element {
	constructor() {
		const element = document.createElement('hr');
		super(element);
		this.element = element;
	}
}