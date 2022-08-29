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

window.onload = () => {
	jsUI.accentColor('#924ff0');
	jsUI.appIcon('icon.png');
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
		.paddings(['8px', '15px']);
	jsUI.view([
		Header([
			Image('icon.png')
				.caption('jsUI')
				.width('50px')
				.margins(['10px','0'])
		])
			.centerItems()
			.sticky()
			.borderBottom('darkgray', '2px')
			.textColor('white')
			.backgroundColor('black'),
		Section([
			Text("Hello, World! This page was made using jsUI."),
			Line(),
			Heading("Animation"),
			Image("domo.png")
				.name('domo')
				.center(),
			Spacer(),
			Div([
				Heading("Moves", 3),
				HStack([
					Button('Rotate')
						.onClick(() => {
							select('domo')
								.rotate();
						}),
					Button('Shake')
						.onClick(() => {
							select('domo')
								.shake();
						}),
					Button('Flip')
						.onClick(() => {
							select('domo')
								.flip();
						}),
					Button('Bounce')
						.onClick(() => {
							select('domo')
								.bounce();
						}),
					Button('Grow')
						.onClick(() => {
							select('domo')
								.grow();
						}),
					Button('Shrink')
						.onClick(() => {
							select('domo')
								.shrink();
						})
				])
					.gap('10px')

			]),
			Div([
				Heading("Fades", 3),
				HStack([
					Button('Fade In')
						.onClick(() => {
							select('domo')
								.fadeIn();
						}),
					Button('Fade Out')
						.onClick(() => {
							select('domo')
								.fadeOut();
						})
				])
					.gap('10px'),
				Spacer(),
				HStack([
					Button('Fade In Up')
						.onClick(() => {
							select('domo')
								.fadeInUp();
						}),
					Button('Fade In Left')
						.onClick(() => {
							select('domo')
								.fadeInLeft();
						}),
					Button('Fade In Right')
						.onClick(() => {
							select('domo')
								.fadeInRight();
						}),
				])
					.gap('10px'),
				Spacer(),
				HStack([
					Button('Fade Out Down')
						.onClick(() => {
							select('domo')
								.fadeOutDown();
						}),
					Button('Fade Out Left')
						.onClick(() => {
							select('domo')
								.fadeOutLeft();
						}),
					Button('Fade Out Right')
						.onClick(() => {
							select('domo')
								.fadeOutRight();
						})
				])
					.gap('10px')

			])
		])
			.paddings(['10px','20px'])
	], true)
		.margin(0)
		.padding(0)
		.textSize('18px')
		.fontSmoothing()
		.font('system');
};