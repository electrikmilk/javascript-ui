/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';

export function Aside(components) {
	return new AsideTag(components);
}

class AsideTag extends Element {
	constructor(components) {
		const element = document.createElement('aside');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Address(components) {
	return new AddressTag(components);
}

class AddressTag extends Element {
	constructor(components) {
		const element = document.createElement('address');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Article(components) {
	return new ArticleTag(components);
}

class ArticleTag extends Element {
	constructor(components) {
		const element = document.createElement('article');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Blockquote(components) {
	return new BlockquoteTag(components);
}

class BlockquoteTag extends Element {
	constructor(components) {
		const element = document.createElement('blockquote');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Code(code) {
	return new CodeTag(code);
}

class CodeTag extends Element {
	constructor(code) {
		const element = document.createElement('code');
		super(element);
		this.element = element;
		if (code) {
			this.element.innerText = code;
		}
	}
}

export function Details(components) {
	return new DetailsTag(components);
}

class DetailsTag extends Element {
	constructor(components) {
		const element = document.createElement('details');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Footer(components) {
	return new FooterTag(components);
}

class FooterTag extends Element {
	constructor(components) {
		const element = document.createElement('footer');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Header(components) {
	return new HeaderTag(components);
}

class HeaderTag extends Element {
	constructor(components) {
		const element = document.createElement('header');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Main(components) {
	return new MainTag(components);
}

class MainTag extends Element {
	constructor(components) {
		const element = document.createElement('main');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Nav(components) {
	return new NavTag(components);
}

class NavTag extends Element {
	constructor(components) {
		const element = document.createElement('nav');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Section(components) {
	return new SectionTag(components);
}

class SectionTag extends Element {
	constructor(components) {
		const element = document.createElement('section');
		super(element);
		this.element = element;
		this.components = components;
	}
}

export function Summary(components) {
	return new SummaryTag(components);
}

class SummaryTag extends Element {
	constructor(components) {
		const element = document.createElement('summary');
		super(element);
		this.element = element;
		this.components = components;
	}
}