'use strict';

export function view(components) {
	buildUI(document.querySelector('body'), components);
}

function buildUI(parent, components) {
	components.forEach(function (component) {
		parent.appendChild(component.element);
		if (component.components) {
			buildUI(component.element, component.components);
		}
	});
}
