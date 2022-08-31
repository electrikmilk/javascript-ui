/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Audio(components) {
	return new AudioTag(components);
}

class AudioTag extends Element {
	constructor(components) {
		const element = document.createElement('audio');
		super(element);
		this.element = element;
		this.components = components;
	}

	src(src) {
		return this.attribute('src', src);
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