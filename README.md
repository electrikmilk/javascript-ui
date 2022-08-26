# jsUI

jsUI is a way to describe HTML and CSS to apply to the HTML document body. Inspired by UI markup languages like SwiftUI.

```javascript
import * as jsUI from 'jsUI';
import {Section} from './components/Section.js';
import {Text} from './components/Text.js';

jsUI.view([
	Section([
		Text('Hello, World!')
			.textColor('green')
    ])
]);
```

```html
<section>
    <p style="color: green;">Hello, World!</p>
</section>
```

![Example](https://i.imgur.com/8MgKcE4.png)
