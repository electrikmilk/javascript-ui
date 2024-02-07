/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {StandardAnimation} from './animations.js';
import {addCSS, globalStyle} from './main.js';

export class Style extends StandardAnimation {
    element;

    constructor(element) {
        super(element);
        this.element = element;
    }

    style(property, value) {
        this.element.style[property] = value;
        return this;
    }

    reboot() {
        this.style('margin', '0');
        this.style('padding', '0');
        this.style('appearance', 'none');
        this.style('-webkit-appearance', 'none');
        this.style('-moz-appearance', 'none');
        this.style('border', 'none');
        this.style('background', 'none');
        this.style('color', 'initial');
        return this;
    }

    selector() {
        let selector = this.tag();
        if (this.element.id) {
            selector += '#' + this.element.id;
        } else if (this.element.className) {
            selector += '.' + this.element.className;
        }
        return selector;
    }

    effectSelector(effect) {
        if (!this.selector) {
            console.error('Element instance does not have a selector!');
            return false;
        }
        if (this.selector.includes(',')) {
            let selectors = this.selector.trim().split(',');
            return selectors.join(':' + effect + ',') + ':' + effect;
        } else {
            return this.selector + ':' + effect;
        }
    }

    hover(callback) {
        callback(
                globalStyle(
                        this.effectSelector('hover'),
                ),
        );
        return this;
    }

    active(callback) {
        callback(
                globalStyle(
                        this.effectSelector('active'),
                ),
        );
        return this;
    }

    focus(callback) {
        callback(
                globalStyle(
                        this.effectSelector('focus'),
                ),
        );
        return this;
    }

    // misc

    disableResize() {
        return this.style('resize', 'none');
    }

    transition() {
        return this.style('transition', 'all 0.3s');
    }

    transitionProperty(property, duration, easing, delay) {
        return this.style('transition', [property, duration, easing, delay].join(' '));
    }

    colorScheme(scheme) {
        return this.style('color-scheme', scheme);
    }

    // list

    listStyle(listStyle) {
        return this.style('list-style', listStyle);
    }

    listStyleNone() {
        return this.style('list-style', 'none');
    }

    listStyleType(listStyleType) {
        return this.style('list-style-type', listStyleType);
    }

    listStyleImage(listStyleImage) {
        return this.style('list-style-image', listStyleImage);
    }

    // border

    border(color, width, style) {
        if (color === 'none') {
            this.style('border', 'none');
            return this;
        }
        this.style('borderWidth', width ?? '1px');
        this.style('borderStyle', style ?? 'solid');
        this.style('borderColor', color ?? 'black');
        return this;
    }

    borderTop(color, width, style) {
        if (color === 'none') {
            this.style('border-top', 'none');
            return this;
        }
        if (width) {
            this.style('borderTopWidth', width);
        } else {
            this.style('borderTopWidth', '1px');
        }
        if (style) {
            this.style('borderTopStyle', style);
        } else {
            this.style('borderTopStyle', 'solid');
        }
        this.style('borderTopColor', color);
        return this;
    }

    borderLeft(color, width, style) {
        if (color === 'none') {
            this.style('border-left', 'none');
            return this;
        }
        if (width) {
            this.style('borderLeftWidth', width);
        } else {
            this.style('borderLeftWidth', '1px');
        }
        if (style) {
            this.style('borderLeftStyle', style);
        } else {
            this.style('borderLeftStyle', 'solid');
        }
        this.style('borderLeftColor', color);
        return this;
    }

    borderRight(color, width, style) {
        if (color === 'none') {
            this.style('border-right', 'none');
            return this;
        }
        if (width) {
            this.style('borderRightWidth', width);
        } else {
            this.style('borderRightWidth', '1px');
        }
        if (style) {
            this.style('borderRightStyle', style);
        } else {
            this.style('borderRightStyle', 'solid');
        }
        this.style('borderRightColor', color);
        return this;
    }

    borderBottom(color, width, style) {
        if (color === 'none') {
            this.style('border-bottom', 'none');
            return this;
        }
        if (width) {
            this.style('borderBottomWidth', width);
        } else {
            this.style('borderBottomWidth', '1px');
        }
        if (style) {
            this.style('borderBottomStyle', style);
        } else {
            this.style('borderBottomStyle', 'solid');
        }
        this.style('borderBottomColor', color);
        return this;
    }

    borders(widths) {
        return this.style('border-width', widths.join(' '));
    }

    borderWidth(width) {
        return this.style('borderWidth', width);
    }

    borderStyle(style) {
        return this.style('borderStyle', style);
    }

    borderColor(color) {
        return this.style('borderColor', color);
    }

    rounded(radius = '4px') {
        return this.style('border-radius', radius);
    }

    rounding(widths) {
        return this.style('border-radius', widths.join(' '));
    }

    circle() {
        return this.style('border-radius', '50%');
    }

    // background

    backgroundColor(color) {
        return this.style('backgroundColor', color);
    }

    backgroundImage(url) {
        return this.style('backgroundImage', `url(${url})`);
    }

    // text

    fontSmoothing() {
        this.style('-webkit-font-smoothing', 'antialiased');
        this.style('-moz-osx-font-smoothing', 'grayscale');
        this.style('-webkit-text-size-adjust', '100%');
        this.style('text-rendering', 'optimizeLegibility');
        this.style('font-synthesis', 'none');
        return this;
    }

    alignLeft() {
        return this.style('text-align', 'left');
    }

    alignCenter() {
        return this.style('text-align', 'center');
    }

    alignRight() {
        return this.style('text-align', 'right');
    }

    textColor(color) {
        return this.style('color', color);
    }

    fontWeight(weight) {
        return this.style('font-weight', weight);
    }

    fontSize(size) {
        return this.style('font-size', size);
    }

    textDecorationNone() {
        this.style('text-decoration', 'none');
        return this;
    }

    textDecoration(decoration) {
        if (this.element.style.textDecoration) {
            this.style('text-decoration', this.element.style.textDecoration + ' ' + decoration);
        } else {
            this.style('text-decoration', decoration);
        }
        return this;
    }

    textIndent(indent) {
        return this.style('text-indent', indent);
    }

    textJustify(justify) {
        return this.style('text-justify', justify);
    }

    font(family) {
        switch (family) {
            case 'system':
                family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
                break;
            case 'sans':
                family = 'Inter, system-ui, Roboto, Avenir, Helvetica, Arial, sans-serif';
                break;
            case 'serif':
                family = 'Garamond, Georgia, Times New Roman, serif';
                break;
        }
        if (this.tag() === 'body') {
            addCSS({
                'input,textarea,select,button': {
                    'font-family': family,
                },
            });
        }
        return this.style('font-family', family);
    }

    bold() {
        return this.style('font-weight', 'bold');
    }

    italic() {
        return this.style('font-style', 'italic');
    }

    underline() {
        return this.textDecoration('underline');
    }

    overline() {
        return this.textDecoration('overline');
    }

    strikethrough() {
        return this.textDecoration('line-through');
    }

    lineHeight(height) {
        return this.style('line-height', height);
    }

    title() {
        return this.fontSize('2em');
    }

    heading() {
        return this.fontSize('1.5em');
    }

    subheading() {
        return this.fontSize('1.17em');
    }

    header() {
        return this.fontSize('1em');
    }

    subheader() {
        return this.fontSize('.83em');
    }

    truncate(lines = 1) {
        if (lines === 1) {
            this.style('white-space', 'nowrap');
            this.style('overflow', 'hidden');
            this.style('text-overflow', 'ellipsis');
        } else {
            this.style('display', '-webkit-box');
            this.style('-webkit-line-clamp', lines);
            this.style('-webkit-box-orient', 'vertical');
        }
        return this;
    }

    upperCase() {
        return this.style('text-transform', 'uppercase');
    }

    lowerCase() {
        return this.style('text-transform', 'lowercase');
    }

    capitalize() {
        return this.style('text-transform', 'capitalize');
    }

    titleCase() {
        let nonTitles = ['of', 'a', 'the', 'and', 'an', 'or', 'nor', 'but', 'is', 'if', 'then', 'else', 'when', 'at', 'from', 'by', 'on', 'off', 'for', 'in', 'out', 'over', 'to', 'into', 'with'];
        let words = this.element.innerText.split(' ');
        words.forEach(function(word, idx) {
            if (idx === 0 || !nonTitles.includes(word)) {
                words[idx] = word[0].toUpperCase() + word.substring(1, word.length);
            }
        });
        this.element.innerText = words.join(' ');
        return this;
    }

    // spacing

    leading(leading) {
        return this.style('lineHeight', leading);
    }

    margin(margin) {
        return this.style('margin', margin);
    }

    margins(margins) {
        return this.style('margin', margins.join(' '));
    }

    marginTop(margin) {
        return this.style('marginTop', margin);
    }

    marginLeft(margin) {
        return this.style('marginLeft', margin);
    }

    marginRight(margin) {
        return this.style('marginRight', margin);
    }

    marginBottom(margin) {
        return this.style('marginBottom', margin);
    }

    marginX(padding) {
        this.style('marginLeft', padding);
        return this.style('marginRight', padding);
    }

    marginY(padding) {
        this.style('marginTop', padding);
        return this.style('marginBottom', padding);
    }

    padding(padding) {
        return this.style('padding', padding);
    }

    paddings(paddings) {
        return this.style('padding', paddings.join(' '));
    }

    paddingTop(padding) {
        return this.style('paddingTop', padding);
    }

    paddingLeft(padding) {
        return this.style('paddingLeft', padding);
    }

    paddingRight(padding) {
        return this.style('paddingRight', padding);
    }

    paddingBottom(padding) {
        return this.style('paddingBottom', padding);
    }

    paddingX(padding) {
        this.style('paddingLeft', padding);
        return this.style('paddingRight', padding);
    }

    paddingY(padding) {
        this.style('paddingTop', padding);
        return this.style('paddingBottom', padding);
    }

    // overflow

    overflow(overflow) {
        return this.style('overflow', overflow);
    }

    overflowX(x) {
        return this.style('overflow-x', x);
    }

    overflowY(y) {
        return this.style('overflow-y', y);
    }

    overflowScroll(autoScrollbar = false) {
        return this.style('overflow', (autoScrollbar === true ? 'auto' : 'scroll'));
    }

    dontOverflow() {
        return this.style('overflow', 'hidden');
    }

    // position

    position(position) {
        return this.style('position', position);
    }

    sticky(top = '0') {
        this.style('position', 'sticky');
        this.style('top', top);
        return this;
    }

    fixed() {
        return this.style('position', 'fixed');
    }

    absolute() {
        return this.style('position', 'absolute');
    }

    relative() {
        return this.style('position', 'relative');
    }

    x(x) {
        return this.style('left', x);
    }

    y(y) {
        return this.style('top', y);
    }

    z(z) {
        return this.style('zIndex', z);
    }

    top(top) {
        return this.style('top', top);
    }

    left(top) {
        return this.style('left', top);
    }

    right(top) {
        return this.style('right', top);
    }

    bottom(top) {
        return this.style('bottom', top);
    }

    inset(value) {
        return this.style('inset', value);
    }

    // dimensions

    size(w, h) {
        this.width(w);
        this.height(h);
        return this;
    }

    width(value) {
        return this.style('width', value);
    }

    height(value) {
        return this.style('height', value);
    }

    fitWidth() {
        this.style('width', '100%');
        this.style('width', '-moz-available');
        this.style('width', '-webkit-fill-available');
        this.style('width', 'fill-available');
        this.style('width', 'stretch');
        return this;
    }

    fitHeight() {
        this.style('height', '100%');
        this.style('height', '-moz-available');
        this.style('height', '-webkit-fill-available');
        this.style('height', 'fill-available');
        this.style('height', 'stretch');
        return this;
    }

    fitViewport() {
        this.style('width', '100vw');
        this.style('height', '100vh');
        return this;
    }

    fitViewportWidth() {
        return this.style('width', '100vw');
    }

    fitViewportHeight() {
        return this.style('height', '100vh');
    }

    aspectRatio(ratio) {
        return this.style('aspect-ratio', ratio);
    }

    // flex

    flex() {
        return this.style('display', 'flex');
    }

    flexRows() {
        return this.style('flex-direction', 'rows');
    }

    flexColumns() {
        return this.style('flex-direction', 'columns');
    }

    gap(gap) {
        return this.style('gap', gap);
    }

    placeItems(placement) {
        return this.style('place-items', placement);
    }

    placeContent(placement) {
        return this.style('place-content', placement);
    }

    topLeft() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-start');
        this.style('place-items', 'flex-start');
        return this;
    }

    topCenter() {
        this.style('display', 'flex');
        this.style('place-content', 'center');
        this.style('place-items', 'flex-start');
        return this;
    }

    topRight() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-end');
        this.style('place-items', 'flex-start');
        return this;
    }

    leftCenter() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-start');
        this.style('place-items', 'center');
        return this;
    }

    centerContent() {
        this.style('display', 'flex');
        this.style('place-content', 'center');
        this.style('place-items', 'center');
        return this;
    }

    center() {
        this.x(0);
        this.y(0);
        if (!this.element.zIndex) {
            this.z(-1);
        }
        this.block();
        this.position('relative');
        this.style('margin', '0 auto');
        return this;
    }

    rightCenter() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-end');
        this.style('place-items', 'center');
        return this;
    }

    bottomLeft() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-start');
        this.style('place-items', 'flex-end');
        return this;
    }

    bottomCenter() {
        this.style('display', 'flex');
        this.style('place-content', 'center');
        this.style('place-items', 'flex-end');
        return this;
    }

    bottomRight() {
        this.style('display', 'flex');
        this.style('place-content', 'flex-end');
        this.style('place-items', 'flex-end');
        return this;
    }

    // float

    floatLeft() {
        return this.style('float', 'left');
    }

    floatCenter() {
        return this.style('float', 'center');
    }

    floatRight() {
        return this.style('float', 'right');
    }

    // visibility

    opacity(opacity) {
        if (!opacity.includes('.')) {
            opacity = '.' + opacity;
        }
        if (opacity.includes('%')) {
            opacity = opacity.replace('%', '');
        }
        return this.style('opacity', opacity);
    }

    // display

    block() {
        return this.style('display', 'block');
    }

    inline() {
        return this.style('display', 'inline');
    }

    inlineBlock() {
        return this.style('display', 'inline-block');
    }

    show() {
        return this.block();
    }

    hide() {
        return this.style('display', 'none');
    }

    toggle() {
        if (this.style.display === 'none') {
            this.show();
        } else {
            this.hide();
        }
    }

    // grid

    grid() {
        return this.style('display', 'grid');
    }

    inlineGrid() {
        return this.style('display', 'inline-grid');
    }

    col(columns) {
        return this.style('grid-column', `auto/span ${columns}`);
    }

    gridGap(gap) {
        return this.style('grid-gap', gap);
    }

    // shadows

    shadowSmall() {
        return this.style('box-shadow', '0 0 10px rgb(0 0 0 / 30%)');
    }

    shadowMedium() {
        return this.style('box-shadow', '0 0 10px rgb(0 0 0 / 50%)');
    }

    shadowLarge() {
        return this.style('box-shadow', '0 0 20px rgb(0 0 0 / 70%)');
    }

    shadowXL() {
        return this.style('box-shadow', '0 0 50px rgb(0 0 0 / 90%)');
    }

    // selection

    noSelect() {
        this.style('-webkit-touch-callout', 'none');
        this.style('-webkit-user-select', 'none');
        this.style('-khtml-user-select', 'none');
        this.style('-moz-user-select', 'none');
        this.style('-ms-user-select', 'none');
        this.style('user-select', 'none');
        return this;
    }

    disabled() {
        this.style('pointer-events', 'none');
        this.style('opacity', '.5');
        return this;
    }
}
