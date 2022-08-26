import * as jsUI from 'jsUI';
import {Section} from '../components/Section.js';
import {Text} from '../components/Text.js';

jsUI.view([
	Section([
		Text('Hello, World!')
			.textColor('green')
	])
]);