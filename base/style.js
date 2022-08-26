export class Style {
	#element;

	constructor(element) {
		this.#element = element;
	}

	style(property, value) {
		this.#element.style[property] = value;
		return this;
	}

	// border

	borderWidth(width) {
		return this.style('borderWidth', width);
	}

	borderStyle(style) {
		return this.style('borderStyle', style);
	}

	borderColor(color) {
		return this.style('borderColor', color);
	}

	borders(widths) {
		return this.style('border-width', widths.join(' '));
	}

	rounded(width) {
		return this.style('border-radius', width);
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

	textFont(family) {
		if (family === 'system') {
			family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
		}
		return this.style('font-family', family);
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