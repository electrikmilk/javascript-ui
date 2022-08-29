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
	jsUI.globalStyle('input,textarea,jsUI.select,button')
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
	jsUI.globalStyle('hr')
		.borderTop('lightgray', '1px', 'dashed')
		.borderBottom('none');
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
						.onClick(()=>{
							jsUI.select('domo')
								.rotate();r
						}),
					Button('Shake')
						.onClick(() => {
							jsUI.select('domo')
								.shake();
						}),
					Button('Flip')
						.onClick(() => {
							jsUI.select('domo')
								.flip();
						}),
					Button('Bounce')
						.onClick(() => {
							jsUI.select('domo')
								.bounce();
						}),
					Button('Grow')
						.onClick(() => {
							jsUI.select('domo')
								.grow();
						}),
					Button('Shrink')
						.onClick(() => {
							jsUI.select('domo')
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
							jsUI.select('domo')
								.fadeIn();
						}),
					Button('Fade Out')
						.onClick(() => {
							jsUI.select('domo')
								.fadeOut();
						})
				])
					.gap('10px'),
				Spacer(),
				HStack([
					Button('Fade In Up')
						.onClick(() => {
							jsUI.select('domo')
								.fadeInUp();
						}),
					Button('Fade In Left')
						.onClick(() => {
							jsUI.select('domo')
								.fadeInLeft();
						}),
					Button('Fade In Right')
						.onClick(() => {
							jsUI.select('domo')
								.fadeInRight();
						}),
				])
					.gap('10px'),
				Spacer(),
				HStack([
					Button('Fade Out Down')
						.onClick(() => {
							jsUI.select('domo')
								.fadeOutDown();
						}),
					Button('Fade Out Left')
						.onClick(() => {
							jsUI.select('domo')
								.fadeOutLeft();
						}),
					Button('Fade Out Right')
						.onClick(() => {
							jsUI.select('domo')
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