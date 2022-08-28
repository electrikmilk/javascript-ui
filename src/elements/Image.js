import {Element} from '../element.js';

export function Image(src) {
	return new ImageTag(src);
}

class ImageTag extends Element {
	constructor(src) {
		const element = document.createElement('img');
		super(element);
		this.element = element;
		this.element.alt = 'Image';
		if (src) {
			this.element.src = src;
		}
	}

	src(src) {
		return this.attribute('src', src);
	}

	caption(caption) {
		return this.attribute('alt', caption);
	}

	crossOrigin(cors) {
		return this.attribute('crossOrigin', cors);
	}

	decoding(decoding) {
		return this.attribute('decoding', decoding);
	}

	lazyLoad() {
		return this.attribute('loading', 'lazy');
	}
}