/*
 * Copyright (c) 2022 Brandon Jordan
 */

import {Element} from '../element.js';
import {onWindowResize} from '../window.js';

export const If = {
	True(condition, components) {
		return new ConditionalComponent(condition, components, true);
	},
	False(condition, components) {
		return new ConditionalComponent(condition, components, false);
	},
	DeviceMobile: (components) => {
		return new MobileComponent(components);
	},
	DeviceNotMobile: (components) => {
		return new NonMobileComponent(components);
	},
	DeviceSmall: (components) => {
		return new SmallDeviceFilter(components);
	},
	DeviceMedium: (components) => {
		return new MediumDeviceFilter(components);
	},
	DeviceLarge: (components) => {
		return new LargeDeviceFilter(components);
	}
};

class ConditionalComponent extends Element {
	constructor(condition, components, evalTo) {
		const element = document.createElement('span');
		super(element);
		this.element = element;
		if (evalTo === true) {
			if (condition) {
				this.components = components;
			}
		} else if (evalTo === false) {
			if (!condition) {
				this.components = components;
			}
		}
	}
}

class MobileComponent extends Element {
	constructor(components) {
		const element = document.createElement('span');
		super(element);
		this.element = element;
		if (!(navigator.userAgentData && navigator.userAgentData.mobile === true) && !navigator.userAgent.includes('Mobile')) {
			this.element.style.display = 'none';
		} else {
			this.components = components;
		}
	}
}

class NonMobileComponent extends Element {
	constructor(components) {
		const element = document.createElement('span');
		super(element);
		this.element = element;
		if ((navigator.userAgentData && navigator.userAgentData.mobile === true) && navigator.userAgent.includes('Mobile')) {
			this.element.style.display = 'none';
		} else {
			this.components = components;
		}
	}
}

class DeviceFilter extends Element {
	constructor(components) {
		const element = document.createElement('span');
		super(element);
		this.element = element;
		this.components = components;
		this.defaultDisplay = this.element.style.display;
		this.check(window.innerWidth);
		onWindowResize(() => {
			this.check(window.innerWidth);
		});
	}

	check(screenWidth) {
	}
}

class SmallDeviceFilter extends DeviceFilter {
	constructor(components) {
		super(components);
	}

	check(screenWidth) {
		if (screenWidth <= 640) {
			this.element.style.display = this.defaultDisplay;
		} else {
			this.element.style.display = 'none';
		}
	}
}

class MediumDeviceFilter extends DeviceFilter {
	constructor(components) {
		super(components);
	}

	check(screenWidth) {
		if (screenWidth > 640 && screenWidth <= 1007) {
			this.element.style.display = this.defaultDisplay;
		} else {
			this.element.style.display = 'none';
		}
	}
}

class LargeDeviceFilter extends DeviceFilter {
	constructor(components) {
		super(components);
	}

	check(screenWidth) {
		if (screenWidth > 1007) {
			this.element.style.display = this.defaultDisplay;
		} else {
			this.element.style.display = 'none';
		}
	}
}