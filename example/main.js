/*
 * Copyright (c) 2022 Brandon Jordan
 */

import * as jsUI from 'jsUI';
import {Section} from 'jsUI';
import {Text} from 'jsUI';
import {Image} from 'jsUI';
import {Heading} from 'jsUI';
import {TextBox} from 'jsUI';
import {TextInput} from 'jsUI';
import {Spacer, HSpacer} from 'jsUI';
import {VStack, HStack, GridStack} from 'jsUI';
import {Hyperlink} from 'jsUI';
import {Header} from 'jsUI';
import {Button} from 'jsUI';
import {Dropdown} from 'jsUI';
import {Line} from 'jsUI';
import {ScrollView} from 'jsUI';
import {Div} from 'jsUI';

window.onload = () => {
	jsUI.accentColor('#924ff0');
	jsUI.icon('icon.png');
	// jsUI.addCSS({
	// 	'body': {
	// 		'property': 'value'
	// 	}
	// });
	jsUI.globalStyle('input,textarea,select,button')
		.textSize('18px')
		.rounded('5px')
		.border('#c7c7c7')
		.paddings(['8px', '5px'])
		.font('system');
	jsUI.globalStyle('button')
		.backgroundColor('#924ff0')
		.borderColor('#8546de')
		.textColor('white')
		.bold()
		.shadowSmall()
		.hover((e) => e
			.backgroundColor('#8649dc')
		)
		.paddings(['8px', '15px']);
	jsUI.globalStyle('hr')
		.borderTop('lightgray', '1px', 'dashed')
		.borderBottom('none');
	jsUI.view([
		Header([
			Image('icon.png')
				.caption('jsUI')
				.width('50px')
				.margins(['10px', '0'])
		])
			.centerItems()
			.sticky()
			.borderBottom('darkgray', '2px')
			.textColor('white')
			.backgroundColor('black'),
		Section([
			Text('Hello, World! This page was made using jsUI.'),
			Line(),
			Heading('Form Controls'),
			Button('Button')
				.block(),
			Spacer(),
			Dropdown({
				'1': 'Item 1',
				'2': 'Item 2'
			}).onChange((e) => {
				console.log('changed!', e.target);
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
			Line(),
			Heading('Animation'),
			Image('domo.png')
				.name('domo')
				.center(),
			Spacer(),
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
						}),
					Button('Fade Out Left')
						.onClick((element) => {
							element.fadeOutLeft();
						}),
					Button('Fade Out Right')
						.onClick((element) => {
							element.fadeOutRight();
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
			]),
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
				])
			])
				.height('300px')
		])
			.paddings(['10px', '20px'])
	], true)
		.margin(0)
		.padding(0)
		.textSize('18px')
		.fontSmoothing()
		.font('system');
};
