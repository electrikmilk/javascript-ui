/*
 * Copyright (c) 2023 Brandon Jordan
 */

import {Element} from '../element.js';
import {onWindowResize} from '../window.js';

export function If(condition, elements) {
    return new ConditionalElement(condition, elements, true);
}

class ConditionalElement extends Element {
    constructor(condition, elements) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.condition = condition;
        if ((this.condition) === true) {
            this.elements = elements;
        }
    }

    Else(elements) {
        if (!(this.condition)) {
            this.elements = elements;
        }
        return this;
    }

    ElseIf(condition, elements) {
        if ((condition) === true) {
            this.elements = elements;
        }
        return this;
    }
}

export function Switch(conditional) {
    return new SwitchElement(conditional);
}

class SwitchElement extends Element {
    conditional;
    cases = {};
    default = null;

    constructor(conditional) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.conditional = conditional;
    }

    Case(conditional, elements) {
        this.cases[`${conditional}`] = {
            conditional: conditional,
            elements: elements,
        };
        return this;
    }

    Default(elements) {
        this.default = elements;
        return this;
    }

    EndSwitch() {
        for (const i in this.cases) {
            const c = this.cases[`${i}`];
            const conditional = c.conditional;
            const elements = c.elements;
            if ((conditional) === this.conditional) {
                this.elements = elements;
                return this;
            }
        }
        if (this.default) {
            this.elements = this.default;
        }
        return this;
    }
}

export const Device = {
    Mobile: (elements) => {
        return new MobileElement(elements);
    },
    NotMobile: (elements) => {
        return new NonMobileElement(elements);
    },
    Small: (elements) => {
        return new SmallDeviceFilter(elements);
    },
    Medium: (elements) => {
        return new MediumDeviceFilter(elements);
    },
    Large: (elements) => {
        return new LargeDeviceFilter(elements);
    },
};

class MobileElement extends Element {
    constructor(elements) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        if (!(navigator.userAgentData && navigator.userAgentData.mobile === true) && !navigator.userAgent.includes('Mobile')) {
            this.element.style.display = 'none';
        } else {
            this.elements = elements;
        }
    }
}

class NonMobileElement extends Element {
    constructor(elements) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        if ((navigator.userAgentData && navigator.userAgentData.mobile === true) && navigator.userAgent.includes('Mobile')) {
            this.element.style.display = 'none';
        } else {
            this.elements = elements;
        }
    }
}

class DeviceFilter extends Element {
    constructor(elements) {
        const element = document.createElement('span');
        super(element);
        this.element = element;
        this.elements = elements;
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
    constructor(elements) {
        super(elements);
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
    constructor(elements) {
        super(elements);
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
    constructor(elements) {
        super(elements);
    }

    check(screenWidth) {
        if (screenWidth > 1007) {
            this.element.style.display = this.defaultDisplay;
        } else {
            this.element.style.display = 'none';
        }
    }
}
