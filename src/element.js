/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Events} from './events.js';

export class Element extends Events {
	element;

	constructor(element) {
		super(element);
		this.element = element;
	}

	attribute(attribute, value) {
		this.element.setAttribute(attribute, value);
		return this;
	}

	property(property, value) {
		this.element[property] = value;
		return this;
	}

	id(id) {
		return this.attribute('id', id);
	}

	class(className) {
		return this.attribute('class', className);
	}

	classes(classes) {
		if (Array.isArray(classes)) {
			this.element.className = classes.join(' ');
		}
		return this;
	}

	text(text) {
		return this.property('innerText', text);
	}

	html(html) {
		return this.property('innerHTML', html);
	}

	copy(text) {
		if (navigator.clipboard) {
			this.onClick(() => {
				const type = 'text/plain';
				const blob = new Blob([text], {type});
				const data = [new ClipboardItem({[type]: blob})];
				navigator.clipboard.write(data)
					.then(() => console.log('[JSUI] Content was copied'))
					.catch((error) => console.log('[JSUI] Error copying content', error));
			});
		}
		return this;
	}

	share(content) {
		let data;
		if (content.constructor && content.constructor === Object) {
			data = content;
		} else if (content.includes('http')) {
			data = {
				url: content
			};
		} else {
			data = {
				text: content
			};
		}
		if (navigator.share && navigator.canShare(data)) {
			navigator.share(data)
				.then(() => console.log('[JSUI] Content was shared'))
				.catch((error) => console.log('[JSUI] Error sharing content', error));
		} else {
			console.error('[JSUI] Unable to share!');
		}
		return this;
	}
}