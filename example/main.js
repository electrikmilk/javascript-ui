import * as jsUI from 'jsUI';
import {Section} from 'jsUI';
import {Text} from 'jsUI';
import {Image} from 'jsUI';
import {Heading} from 'jsUI';
import {TextBox} from 'jsUI';
import {TextInput} from 'jsUI';
import {Spacer, HSpacer} from 'jsUI';
import {VStack} from 'jsUI';
import {HStack} from 'jsUI';
import {Hyperlink} from 'jsUI';
import {Header} from 'jsUI';

jsUI.addCSS({
	'selector': {
		'property': 'value'
	}
});

jsUI.styleElement('input')
	.rounded('5px')
	.border('#c7c7c7', '2px')
	.paddings(['8px', '5px'])
	.font('system')
	.apply();

jsUI.styleElement('textarea')
	.rounded('5px')
	.border('#c7c7c7', '2px')
	.paddings(['8px', '5px'])
	.font('system')
	.apply();

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
		TextInput()
			.block()
			.placeholder('TextInput'),
		Spacer(),
		TextBox()
			.placeholder('TextBox')
			.cols(50)
			.rows(6)
			.disableResize(),
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
			.rounded('5px')
	])
])
	.fontSmoothing()
	.font('system')
	.accent('#ab2c34');