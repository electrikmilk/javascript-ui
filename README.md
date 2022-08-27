# jsUI

jsUI is a way to describe HTML and CSS in Javascript that will then be applied to the HTML document body. Inspired by UI markup languages like SwiftUI.

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
