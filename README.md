<p align=center>
	<img src="https://i.imgur.com/HnRViVq.png"/>
</p>

# JavaScript UI

[![License](https://img.shields.io/github/license/electrikmilk/javascript-ui)](https://github.com/electrikmilk/javascript-ui/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/javascript-ui)](https://www.npmjs.com/package/javascript-ui)

javascript-ui is a way to describe HTML and CSS in Javascript that will then be applied to the HTML document body.
Inspired by UI
markup languages like SwiftUI.

- Useful shorthands for HTML tags and css properties
- Built-in standard animations like rotate, fade, flip, shake, and more...
- Built-in CSS tricks like truncation, font smoothing, inset, fit, etc.
- CSS properties are abtracted into views and stacks like ScrollView, GridStack, HStack, VStack, etc.
- Built-in router

[Playground](https://codepen.io/internetgho5t/pen/ZExgBbm)
&bull; [Documentation](https://github.com/electrikmilk/jsUI/wiki)

## Usage

Install via NPM:

```console
npm i javascript-ui
```

Import and add elements to the `view()` function.

```javascript
import * as jsUI from 'javascript-ui';
import {Section, Paragraph} from 'javascript-ui';

jsUI.view([
    Section([
        Paragraph('Hello, World!')
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

---

Thanks for taking interest in this project :) I work on jsUI because it's fun and because I feel like I discover more
and more uses for it the more I work on it. I've come to find it's very hackable, it has more possibilities than I
originally thought when I started the project and I love stuff like that.

This project aims to create a framework that allows you to create UI in a way that feels more natural and fun and not a
chore.
