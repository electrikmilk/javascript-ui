/*
 * Copyright (c) 2022 Brandon Jordan
 */

import * as jsUI from 'https://cdn.skypack.dev/javascript-ui';

import index from './pages/index.js';
import animation from './pages/animation.js';

window.onload = () => {
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
	jsUI.router([
		{name: 'home', url: '/', title: 'jsUI', view: index},
		{name: 'animation', url: '/animation', title: 'Animation - jsUI', view: animation}
	])
		.accentColor('#924ff0')
		.icon('icon.png')
		.margin(0)
		.padding(0)
		.fontSize('18px')
		.fontSmoothing()
		.font('system');
};
