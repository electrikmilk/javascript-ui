/*
 * Copyright (c) 2022 Brandon Jordan
 */

import * as jsUI from 'https://cdn.skypack.dev/javascript-ui';
import {
	Header,
	Div,
	Image,
	Nav,
	List,
	ListItem,
	Hyperlink,
	HStack,
	HSpacer
} from 'https://cdn.skypack.dev/javascript-ui';

jsUI.globalStyle('nav ul')
	.padding(0)
	.margins(['20px', '0'])
	.listStyleNone();

jsUI.globalStyle('nav ul li')
	.padding('5px')
	.inlineBlock();

jsUI.globalStyle('nav ul li a')
	.textDecorationNone()
	.rounded('5px')
	.transition('all', '0.3s')
	.paddings(['5px', '8px'])
	.hover((e) => e
		.textColor('white')
		.backgroundColor('#888888')
	)
	.textColor('#dddddd');

export default [
	Nav([
		HStack([
			Image('icon.png')
				.caption('jsUI')
				.width('50px')
				.margins(['10px', '0']),
			HSpacer(),
			Div([
				List([
					ListItem([
						Hyperlink('Home')
							.route('home')
					])
						.onClick((element) => {
							element.bounce();
						}),
					ListItem([
						Hyperlink('Animation')
							.route('animation')
					])
						.onClick((element) => {
							element.bounce();
						})
				])
			])
				.textRight()
		])
	])
		.paddings(['0px', '10px'])
		.z(100)
		.sticky()
		.shadowMedium()
		.textColor('white')
		.backgroundColor('black')
];