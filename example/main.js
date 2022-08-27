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

jsUI.addCSS({
	'selector': {
		'property': 'value'
	}
});

jsUI.globalStyle('input,textarea,select')
	.rounded('5px')
	.border('#c7c7c7', '2px')
	.paddings(['8px', '5px'])
	.font('system');

jsUI.view([
	Header([
		HStack([
			Hyperlink('Link')
				.center()
				.textColor('white')
				.url('https://example.com'),
			HSpacer(),
			Text('LOGO')
				.heading()
				.bold()
				.center(),
			HSpacer(),
			Hyperlink('Link')
				.center()
				.textColor('white')
				.url('https://example.com')
		], 5)
	])
		.textColor('white')
		.backgroundColor('black'),
	VStack([
		Text('Item'),
		Text('Item'),
		Text('Item'),
		Text('Item'),
		Text('Item')
	], 5),
	Section([
		Dropdown({
			'1': 'Item 1',
			'2': 'Item 2'
		}).onChange((e) => {
			console.log('changed!', e.target);
		}),
		Button('Button')
			.onClick((e) => {
				console.log('clicked!', e.target);
			}),
		Spacer(),
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
		Heading('Hello, World!'),
		Text('brevity is the soul of wit.')
			.textColor('green')
			.strikethrough()
			.overline()
			.underline()
			.capitalize()
			.width('100px')
			.truncate(1)
			.italic()
			.bold(),
		Image('domo.png')
			.lazyLoad()
			.caption('Thank you.')
			.size('320px', '300px')
			.border('blue')
			.shake()
			.circle(),
		ScrollView([
			GridStack([
				Image('domo.png'),
				Image('domo.png'),
				Image('domo.png'),
				Image('domo.png'),
				Image('domo.png')
			])
		])
			.height('300px')
	])
])
	.fontSmoothing()
	.font('system')
	.accent('#ab2c34');