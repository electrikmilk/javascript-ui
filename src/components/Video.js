/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Video(components) {
	return new VideoTag(components);
}

class VideoTag extends Element {
	constructor(components) {
		const element = document.createElement('video');
		super(element);
		this.element = element;
		this.components = components;
	}

	src(src) {
		return this.attribute('src', src);
	}

	poster(src) {
		return this.attribute('poster', src);
	}

	preload(preload) {
		return this.attribute('preload', preload);
	}

	controls() {
		return this.attribute('controls', '');
	}

	autoplay() {
		return this.attribute('autoplay', '');
	}

	loop() {
		return this.attribute('loop', '');
	}

	muted() {
		return this.attribute('muted', '');
	}
}