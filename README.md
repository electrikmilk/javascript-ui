<p align=center>
	<img src="https://i.imgur.com/HnRViVq.png"/>
</p>

# jsUI

jsUI is a way to describe HTML and CSS in Javascript that will then be applied to the HTML document body. Inspired by UI markup languages like SwiftUI.

 - Useful shorthands for HTML tags and css properties
 - Built-in standard animations like rotate, fade, flip, shake
 - Built-in CSS tricks like truncation, font smoothing, inset, fit, etc.
 - CSS properties are abtracted into views and stacks like ScrollView, GridStack, HStack, VStack, etc.
 
[Playground](https://codepen.io/internetgho5t/pen/ZExgBbm) &bull; [Documentation](https://github.com/electrikmilk/jsUI/wiki) &bull; [NPM](https://www.npmjs.com/package/javascript-ui)

## Usage

Install via NPM:

```console
npm i javascript-ui
```

Import and add components to the `view()` function.

```javascript
import * as jsUI from 'javascript-ui';
import {Section,Text} from 'javascript-ui';

jsUI.view([
	Section([
		Text('Hello, World!')
			.textColor('green')
	])
]);
```

Resulting HTML:

```html
<section>
    <p style="color: green;">Hello, World!</p>
</section>
```

Result in browser:

![Example](https://i.imgur.com/8MgKcE4.png)
