/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Track(src) {
	return new TrackTag(src);
}

class TrackTag extends Element {
	constructor(src) {
		const element = document.createElement('track');
		super(element);
		this.element = element;
		if (src) {
			this.element.srcset = src;
		}
	}

	src(src) {
		return this.attribute('src', src);
	}

	type(type) {
		return this.attribute('type', type);
	}

	defaultTrack() {
		return this.attribute('default', '');
	}

	label(label) {
		return this.attribute('label', label);
	}

	srcLang(lang) {
		return this.attribute('srclang', lang);
	}
}