/*
 * Copyright (c) 2022 Brandon Jordan
 */

export class StandardAnimation {
	#element;

	constructor(element) {
		this.#element = element;
	}

	fadeIn(duration = 1000) {
		this.#element.animate([
			{
				opacity: '0'
			},
			{
				opacity: '1'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeInUp(duration = 1000) {
		this.#element.animate([
			{
				opacity: '0%',
				transform: 'translateY(40px)'
			},
			{
				opacity: '100%',
				transform: 'translateY(0)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeInLeft(duration = 1000) {
		this.#element.animate([
			{
				opacity: '0%',
				transform: 'translateX(-40px)'
			},
			{
				opacity: '100%',
				transform: 'translateY(0)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeInRight(duration = 1000) {
		this.#element.animate([
			{
				opacity: '0%',
				transform: 'translateX(40px)'
			},
			{
				opacity: '100%',
				transform: 'translateX(0)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeOut(duration = 1000) {
		this.#element.animate([
			{
				opacity: '100%'
			},
			{
				opacity: '0%'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeOutDown(duration = 1000) {
		this.#element.animate([
			{
				opacity: '100%',
				transform: 'translateY(0)'
			},
			{
				opacity: '0%',
				transform: 'translateY(40px)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeOutLeft(duration = 1000) {
		this.#element.animate([
			{
				opacity: '100%',
				transform: 'translateX(0)'
			},
			{
				opacity: '0%',
				transform: 'translateX(-40px)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	fadeOutRight(duration = 1000) {
		this.#element.animate([
			{
				opacity: '100%',
				transform: 'translateX(0)'
			},
			{
				opacity: '0%',
				transform: 'translateX(40px)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: 1
		});
		return this;
	}

	grow(duration = 1000, iterations = 1) {
		this.#element.animate([
			{
				transform: 'scale(0)'
			},
			{
				transform: 'scale(1)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: iterations
		});
		return this;
	}

	shrink(duration = 1000, iterations = 1) {
		this.#element.animate([
			{
				transform: 'scale(1)'
			},
			{
				transform: 'scale(0)'
			}
		], {
			duration: duration,
			fill: 'forwards',
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: iterations
		});
		return this;
	}

	rotate(duration = 1000, iterations = 1) {
		this.#element.animate([
			{
				transform: 'rotate(0deg)'
			},
			{
				transform: 'rotate(360deg)'
			}
		], {
			duration: duration,
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: iterations
		});
		return this;
	}

	bounce(duration = 500, iterations = 1) {
		this.#element.animate([
			{
				transform: 'translateY(0)'
			},
			{
				transform: 'translateY(-30px)'
			},
			{
				transform: 'translateY(0)'
			},
			{
				transform: 'rotate(-15px)'
			},
			{
				transform: 'translateY(0)'
			},
			{
				transform: 'translateY(-30px)'
			},
			{
				transform: 'translateY(0)'
			},
			{
				transform: 'translateY(-15px)'
			},
			{
				transform: 'translateY(0)'
			},
			{
				transform: 'translateY(0)'
			}
		], {
			duration: duration,
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: iterations
		});
		return this;
	}

	flip(duration = 500, iterations = 1) {
		this.#element.animate([
			{
				transform: 'perspective(400px) rotateY(0)',
				animationTimingFunction: 'ease-out'
			},
			{
				transform: 'perspective(400px) rotateY(0)',
				animationTimingFunction: 'ease-out'
			},
			{
				transform: 'perspective(400px) rotateY(0)',
				animationTimingFunction: 'ease-out'
			},
			{
				transform: 'perspective(400px) translateZ(150px) rotateY(170deg)',
				animationTimingFunction: 'ease-out'
			},
			{
				transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)',
				animationTimingFunction: 'ease-in'
			},
			{
				transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)',
				animationTimingFunction: 'ease-in'
			},
			{
				transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)',
				animationTimingFunction: 'ease-in'
			},
			{
				transform: 'perspective(400px) rotateY(360deg) scale(.95)',
				animationTimingFunction: 'ease-in'
			},
			{
				transform: 'perspective(400px) rotateY(360deg) scale(.95)',
				animationTimingFunction: 'ease-in'
			},
			{
				transform: 'perspective(400px) scale(1)',
				animationTimingFunction: 'ease-in'
			}
		], {
			duration: duration,
			iterations: iterations
		});
		return this;
	}

	shake(duration = 1000, iterations = 1) {
		this.#element.animate([
			{
				transform: 'translateX(0)'
			},
			{
				transform: 'translateX(-10px)'
			},
			{
				transform: 'translateX(10px)'
			},
			{
				transform: 'translateX(-10px)'
			},
			{
				transform: 'translateX(10px)'
			},
			{
				transform: 'translateX(-10px)'
			},
			{
				transform: 'translateX(10px)'
			},
			{
				transform: 'translateX(-10px)'
			},
			{
				transform: 'translateX(10px)'
			},
			{
				transform: 'translateX(-10px)'
			},
			{
				transform: 'translateX(0)'
			}
		], {
			duration: duration,
			easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
			iterations: iterations
		});
		return this;
	}
}