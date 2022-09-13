/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {
	Image,
	Section,
	Text,
	Hyperlink,
	Line,
	Heading,
	Form,
	Label,
	Dropdown,
	TextBox,
	Spacer,
	Button,
	Div,
	TextInput,
	HStack,
	VStack,
	GridStack,
	ScrollView,
	RadioGroup
} from 'javascript-ui';

import NavBar from '../components/NavBar.js';

export default [
	NavBar,
	Section([
		Text('Hello, World! This page was made using jsUI.'),
		Hyperlink('View Source')
			.url('https://github.com/electrikmilk/javascript-ui/tree/gh-pages')
			.openNewTab(),
		Line(),
		Heading('Form Controls'),
		Form([
			HStack([
				Label('Dropdown Label', 'dropdown'),
				Dropdown({
					'1': 'Item 1',
					'2': 'Item 2'
				})
					.id('dropdown')
					.onChange((e) => {
						console.log('changed!', e.target);
					})
			]),
			Spacer(),
			HStack([
				Label('Grouped Dropdown Label', 'groupedDropdown'),
				Dropdown({
					'Group 1': {
						'1': 'Item 1',
						'2': 'Item 2'
					},
					'Group 2': {
						'3': 'Item 3',
						'4': 'Item 4'
					}
				})
					.id('groupedDropdown')
					.onChange((e) => {
						console.log('changed!', e.target);
					})
			]),
			Spacer(),
			HStack([
				Label('TextInput Label', 'textInput'),
				TextInput()
					.id('textInput')
					.block()
					.placeholder('TextInput')
			]),
			Spacer(),
			HStack([
				Label('TextBox Label', 'textBox'),
				TextBox()
					.id('textBox')
					.placeholder('TextBox')
					.cols(50)
					.rows(6)
					.disableResize()
			]),
			Spacer(),
			HStack([
				Label('Radio Group Label', 'radioGroup'),
				Div([
					RadioGroup('radioGroup', {
						'yes': 'Yes',
						'no': 'No'
					})
				])
			]),
			Spacer(),
			Button('Button')
				.block()
		])
			.action('/endpoint')
			.method('POST')
			.onSubmit((event) => {
				event.preventDefault();
			}),
		Spacer(),
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
			.center()
	])
		.paddings(['10px', '20px'])
];
