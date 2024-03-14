<p align=center>
	<img src="https://i.imgur.com/HnRViVq.png"/>
</p>

# JavaScript UI

[![License](https://img.shields.io/github/license/electrikmilk/javascript-ui)](https://github.com/electrikmilk/javascript-ui/blob/main/LICENSE)
[![Version](https://img.shields.io/npm/v/javascript-ui)](https://www.npmjs.com/package/javascript-ui)

Javascript UI is a JavaScript framework. It describes HTML and CSS in Javascript similar to SwiftUI.

## ❇️ Features

- ✔️ Declarative syntax, functions nest within each other, similar to HTML, but with methods instead of CSS properties
  and HTML attributes.
- 😎 Useful shorthands for HTML tags and attributes and CSS properties.
- 🤓 Methods for CSS tricks like `truncate()`, `fontSmoothing()`, fit, etc. More CSS is abstracted into views and
  stacks like `ScrollView()`, `GridStack()`, `HStack()`, `VStack()`, etc.
- 🐰 It's fast! Element objects simply provide helpful methods and are used during the first render, but they keep a
  reference to their element or document fragment. They modify the element directly rather than re-rendering it. There
  are never entire page re-renders, only selective re-renders when needed for state management.

### 🔧 Built-in

- 💾 Stores
- ⚛️ State management
- 🦋 Standard animations (rotate, fade, flip, shake, and more!)
- 🧭 Router

[Playground](https://codepen.io/internetgho5t/pen/ZExgBbm)
&bull; [Documentation](https://github.com/electrikmilk/jsUI/wiki)

## Usage

Install via NPM:

```console
npm i javascript-ui
```

Import and add elements to the `view()` function.

```javascript
import {view, Section, Paragraph} from 'javascript-ui';

window.onload = () => {
    view([
        Section([
            Paragraph('Hello, World!')
                .textColor('green')
        ])
    ]);
};
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

This project aims to create a framework that allows you to create UI in a way that feels natural and easy.
