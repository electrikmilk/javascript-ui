/*
 * Copyright (c) 2022 Brandon Jordan
 */

import * as jsUI from 'jsUI';
import {Header, Div, Image, Nav, List, ListItem, Hyperlink, HStack, HSpacer} from 'jsUI';

jsUI.globalStyle('nav ul')
	.padding(0)
	.margins(['23px', '0'])
	.listStyleNone();

jsUI.globalStyle('nav ul li')
	.padding('5px')
	.inlineBlock();

jsUI.globalStyle('nav ul li a')
	.textDecorationNone()
	.textColor('white');

export default [
	Nav([
		HStack([
			Image('icon.png')
				.caption('jsUI')
				.width('50px')
				.margins(['10px', '0']),
			List([
				ListItem([
					Hyperlink('Home')
						.route('home')
				]),
				ListItem([
					Hyperlink('Animation')
						.route('animation')
				])
			])
		])
	])
		.paddings(['0px', '10px'])
		.z(100)
		.sticky()
		.shadowMedium()
		.textColor('white')
		.backgroundColor('black')
];