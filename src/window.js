/*
 * Copyright (c) 2022 Brandon Jordan
 */

let resizeCallbacks = [];

window.onresize = () => {
	resizeCallbacks.forEach((callback) => {
		callback();
	});
};

export function onWindowResize(callback) {
	resizeCallbacks.push(callback);
}