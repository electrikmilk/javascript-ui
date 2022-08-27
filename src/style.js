import {addCSS} from './jsUI.js';

export class Style {
	#element;

	constructor(element) {
		this.#element = element;
	}

	style(property, value) {
		this.#element.style[property] = value;
		return this;
	}

	disableResize() {
		return this.style('resize','none')
	}

	accent(color) {
		addCSS({
			'input,textarea,select': {
				'accent-color': color,
				'outline-color': color,
				'caret-color': color
			}
		})
		this.style('accent-color', color);
		this.style('outline-color', color);
		this.style('caret-color', color);
		return this;
	}

	// border

	border(color, width, style) {
		if (width) {
			this.style('borderWidth', width);
		} else {
			this.style('borderWidth', '1px');
		}
		if (style) {
			this.style('borderStyle', style);
		} else {
			this.style('borderStyle', 'solid');
		}
		this.style('borderColor', color);
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

	rounded(radius) {
		return this.style('border-radius', radius);
	}

	rounding(widths) {
		return this.style('border-radius', widths.join(' '));
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
		return this;
	}

	textLeft() {
		return this.style('text-align', 'left');
	}

	textCenter() {
		return this.style('text-align', 'center');
	}

	textRight() {
		return this.style('text-align', 'right');
	}

	textColor(color) {
		return this.style('color', color);
	}

	textWeight(weight) {
		return this.style('font-weight', weight);
	}

	textSize(size) {
		return this.style('font-size', size);
	}

	textDecoration(decoration) {
		if (this.#element.style.textDecoration) {
			this.style('text-decoration', this.#element.style.textDecoration + ' ' + decoration);
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
		if (family === 'system') {
			family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
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

	title() {
		return this.textSize('2em');
	}

	heading() {
		return this.textSize('1.5em');
	}

	subheading() {
		return this.textSize('1.17em');
	}

	header() {
		return this.textSize('1em');
	}

	subheader() {
		return this.textSize('.83em');
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

	uppercase() {
		return this.style('text-transform', 'uppercase');
	}

	lowercase() {
		return this.style('text-transform', 'lowercase');
	}

	capitalize() {
		return this.style('text-transform', 'capitalize');
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

	padding(padding) {
		return this.style('padding', padding);
	}

	paddings(paddings) {
		return this.style('padding', paddings.join(' '));
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

	x(x) {
		return this.style('left', x);
	}

	y(y) {
		return this.style('top', y);
	}

	z(z) {
		return this.style('zIndex', z);
	}

	inset(value) {
		this.style('top', value);
		this.style('left', value);
		this.style('right', value);
		this.style('bottom', value);
		return this;
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

	fit() {
		this.style('width', '100%');
		this.style('width', '-moz-available');
		this.style('width', '-webkit-fill-available');
		this.style('width', 'fill-available');
		this.style('width', 'stretch');
		return this;
	}

	aspectRatio(ratio) {
		return this.style('aspect-ratio', ratio);
	}

	// flex placement

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

	center() {
		this.style('display', 'flex');
		this.style('place-content', 'center');
		this.style('place-items', 'center');
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

	hidden() {
		return this.style('display', 'none');
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

	// grid

	gridInline() {
		return this.style('display', 'inline-grid');
	}

	gridColumn(columns) {
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