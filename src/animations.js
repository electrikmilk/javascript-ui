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
			easing: 'ease-in',
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
			easing: 'ease-in',
			iterations: 1
		});
		return this;
	}

	rotate(duration = 1000, iterations = 1) {
		this.#element.animate([
			{
				transform: 'rotate(0deg)'
			},
			{
				transform: 'rotate(359deg)'
			}
		], {
			duration: duration,
			easing: 'linear',
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
			iterations: iterations
		});
		return this;
	}
}