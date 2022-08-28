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
import {select} from 'jsUI';
import {Div} from 'jsUI';

jsUI.addCSS({
	'selector': {
		'property': 'value'
	}
});

jsUI.globalStyle('input,textarea,select,button')
	.textSize('18px')
	.rounded('5px')
	.border('#c7c7c7', '2px')
	.paddings(['8px', '5px'])
	.font('system');

jsUI.globalStyle('button')
	.backgroundColor('dodgerblue')
	.borderColor('dodgerblue')
	.textColor('white')
	.bold()
	.paddings(['8px','15px'])

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
		])
	])
		.textColor('white')
		.backgroundColor('black'),
	VStack([
		Text('Item'),
		Text('Item'),
		Text('Item'),
		Text('Item'),
		Text('Item')
	])
		.border("gray"),
	Section([
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
		Section([
			Div([
				Div([
					Image('domo.png')
						.name('domo')
						.lazyLoad()
						.caption('Thank you...')
						.size('300px', '300px')
						.border('blue')
						.circle()
				])
					.center(),
				Spacer(),
				HStack([
					Button("Rotate")
						.onClick(() => {
							select('domo')
								.rotate()
						}),
					Button("Shake")
						.onClick(() => {
							select('domo')
								.shake()
						}),
					Button("Flip")
						.onClick(() => {
							select('domo')
								.flip()
						}),
					Button("Bounce")
						.onClick(() => {
							select('domo')
								.bounce()
						}),
					Button("Fade In")
						.onClick(() => {
							select('domo')
								.fadeIn()
						}),
					Button("Fade Out")
						.onClick(() => {
							select('domo')
								.fadeOut()
						}),
				])
					.gridGap('10px')
			])
		])
			.center(),
		Spacer(),
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
], true)
	.textSize('18px')
	.fontSmoothing()
	.font('system')
	.accent('#ab2c34');