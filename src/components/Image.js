import {Element} from '../element.js';

export function Image(src) {
	return new ImageTag(src);
}

class ImageTag extends Element {
	constructor(src) {
		const element = document.createElement('img');
		super(element);
		this.element = element;
		if(src) {
			this.element.src = src;
		}
	}
}