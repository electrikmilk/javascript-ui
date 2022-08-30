/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {
	Header,
	Image,
	Section,
	Text,
	Line,
	Heading,
	Form,
	Label,
	Dropdown,
	TextBox,
	TextInput,
	Spacer,
	Button,
	Div,
	HStack,
	VStack,
	GridStack,
	ScrollView
} from 'jsUI';

export default [
	Header([
		Image('icon.png')
			.caption('jsUI')
			.width('50px')
			.margins(['10px', '0'])
	])
		.z(100)
		.centerItems()
		.sticky()
		.shadowMedium()
		.textColor('white')
		.backgroundColor('black'),
	Section([
		Text('Hello, World! This page was made using jsUI.'),
		Line(),
		Heading('Form Controls'),
		Form([
			Label('Dropdown Label', 'dropdown'),
			Dropdown({
				'1': 'Item 1',
				'2': 'Item 2'
			})
				.name('dropdown')
				.onChange((e) => {
					console.log('changed!', e.target);
				}),
			Dropdown({
				'Group 1': {
					'1': 'Item 1',
					'2': 'Item 2'
				},
				'Group 2': {
					'3': 'Item 3',
					'4': 'Item 4'
				}
			}),
			Spacer(2),
			TextInput()
				.block()
				.placeholder('TextInput'),
			Spacer(),
			TextBox()
				.placeholder('TextBox')
				.cols(50)
				.rows(6)
				.disableResize(),
			Button('Button')
				.block()
		])
			.action('/endpoint')
			.method('POST')
			.onSubmit((event) => {
				event.preventDefault();
			}),
		Line(),
		Heading('Animation'),
		Div([
			Heading('Moves', 3),
			HStack([
				Button('Rotate')
					.onClick((element) => {
						element.rotate();
					}),
				Button('Shake')
					.onClick((element) => {
						element.shake();
					}),
				Button('Flip')
					.onClick((element) => {
						element.flip();
					}),
				Button('Bounce')
					.onClick((element) => {
						element.bounce();
					}),
				Button('Grow')
					.onClick((element) => {
						element.grow();
					}),
				Button('Shrink')
					.onClick((element) => {
						element.shrink();
						setTimeout(function () {
							element.grow();
						}, 1000);
					})
			])
				.gap('10px')

		]),
		Div([
			Heading('Fades', 3),
			HStack([
				Button('Fade In')
					.onClick((element) => {
						element.fadeIn();
					}),
				Button('Fade Out')
					.onClick((element) => {
						element.fadeOut();
						setTimeout(function () {
							element.fadeIn();
						}, 1000);
					})
			])
				.gap('10px'),
			Spacer(),
			HStack([
				Button('Fade In Up')
					.onClick((element) => {
						element.fadeInUp();
					}),
				Button('Fade In Left')
					.onClick((element) => {
						element.fadeInLeft();
					}),
				Button('Fade In Right')
					.onClick((element) => {
						element.fadeInRight();
					})
			])
				.gap('10px'),
			Spacer(),
			HStack([
				Button('Fade Out Down')
					.onClick((element) => {
						element.fadeOutDown();
						setTimeout(function () {
							element.fadeInUp();
						}, 1000);
					}),
				Button('Fade Out Left')
					.onClick((element) => {
						element.fadeOutLeft();
						setTimeout(function () {
							element.fadeInLeft();
						}, 1000);
					}),
				Button('Fade Out Right')
					.onClick((element) => {
						element.fadeOutRight();
						setTimeout(function () {
							element.fadeInRight();
						}, 1000);
					})
			])
				.gap('10px')

		]),
		Line(),
		Heading('Stacks and Views'),
		Heading('VStack', 3),
		VStack([
			Text('Item'),
			Text('Item'),
			Text('Item')
		]),
		Heading('HStack', 3),
		HStack([
			Text('Item'),
			Text('Item'),
			Text('Item'),
			Text('Item')
		]),
		Heading('GridStack', 3),
		GridStack([
			Div()
				.text('Item 1')
				.backgroundColor('lightblue')
				.height('300px')
				.margin('3px')
				.centerItems(),
			Div()
				.text('Item 2')
				.backgroundColor('lightblue')
				.height('300px')
				.margin('3px')
				.centerItems(),
			Div()
				.text('Item 3')
				.backgroundColor('lightblue')
				.height('300px')
				.margin('3px')
				.centerItems(),
			Div()
				.text('Item 4')
				.backgroundColor('lightblue')
				.height('300px')
				.margin('3px')
				.centerItems()
		], '50%'),
		Heading('ScrollView', 3),
		ScrollView([
			GridStack([
				Div()
					.text('Item 1')
					.backgroundColor('lightblue')
					.height('300px')
					.margin('3px')
					.centerItems(),
				Div()
					.text('Item 2')
					.backgroundColor('lightblue')
					.height('300px')
					.margin('3px')
					.centerItems(),
				Div()
					.text('Item 3')
					.backgroundColor('lightblue')
					.height('300px')
					.margin('3px')
					.centerItems(),
				Div()
					.text('Item 4')
					.backgroundColor('lightblue')
					.height('300px')
					.margin('3px')
					.centerItems()
			], '50%')
		])
			.height('300px'),
		Spacer(),
		Image('domo.png')
			.name('domo')
			.center()
	])
		.paddings(['10px', '20px'])
];