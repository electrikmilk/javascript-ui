<p align=center>
	<img src="https://i.imgur.com/HnRViVq.png"/>
</p>

# jsUI

jsUI is a way to describe HTML and CSS in Javascript that will then be applied to the HTML document body. Inspired by UI markup languages like SwiftUI.

 - Useful shorthands for HTML tags and css properties
 - Built-in standard animations like rotate, fade, flip, shake
 - Built-in CSS tricks like truncation, font smoothing, inset, fit, etc.
 - CSS properties are abtracted into views and stacks like ScrollView, GridStack, HStack, VStack, etc.
 

## Usage

```javascript
import * as jsUI from 'src/jsUI';
import {Section} from 'jsUI';
import {Text} from 'jsUI';

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
