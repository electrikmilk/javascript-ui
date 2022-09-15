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

let loadCallbacks = [];

window.onload = () => {
	loadCallbacks.forEach((callback) => {
		callback();
	});
};

export function onWindowLoad(callback) {
	loadCallbacks.push(callback);
}