import {Element} from './element.js';

class ActionElement extends Element {}
export class EventElement extends ActionElement {
	#element;

	constructor(element) {
		super(element);
		this.#element = element;
	}

	onClick(callback) {
		this.#element.onclick = (e) => callback(e);
		return this;
	}

	onChange(callback) {
		this.#element.onchange = (e) => callback(e);
		return this;
	}

	onSubmit(callback) {
		this.#element.onsubmit = (e) => callback(e);
		return this;
	}

	onBlur(callback) {
		this.#element.onblur = (e) => callback(e);
		return this;
	}

	onDoubleClick(callback) {
		this.#element.ondblclick = (e) => callback(e);
		return this;
	}

	onFocus(callback) {
		this.#element.onfocus = (e) => callback(e);
		return this;
	}

	onError(callback) {
		this.#element.onerror = (e) => callback(e);
		return this;
	}

	onKeypress(callback) {
		this.#element.onkeyup = (e) => callback(e);
		return this;
	}
}