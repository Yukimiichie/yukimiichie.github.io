(function () {
	'use strict';

	var showcase = document.querySelector('.home-showcase');
	if (!showcase) return;

	var track = showcase.querySelector('.home-showcase__track');
	var panels = Array.prototype.slice.call(showcase.querySelectorAll('.home-showcase__panel'));
	var dots = Array.prototype.slice.call(showcase.querySelectorAll('.home-showcase__dot'));
	var previousButton = showcase.querySelector('.home-showcase__arrow--prev');
	var nextButton = showcase.querySelector('.home-showcase__arrow--next');
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var currentIndex = 0;
	var timer = null;
	var scrollFrame = null;

	function setActive(index) {
		currentIndex = Math.max(0, Math.min(index, panels.length - 1));
		dots.forEach(function (dot, dotIndex) {
			if (dotIndex === currentIndex) dot.setAttribute('aria-current', 'true');
			else dot.removeAttribute('aria-current');
		});
	}

	function goTo(index, behavior) {
		var panel = panels[index];
		if (!panel) return;
		track.scrollTo({ left: panel.offsetLeft, behavior: behavior || 'smooth' });
		setActive(index);
	}

	function stopRotation() {
		if (timer) window.clearInterval(timer);
		timer = null;
	}

	function startRotation() {
		stopRotation();
		if (document.hidden) return;
		timer = window.setInterval(function () {
			goTo((currentIndex + 1) % panels.length, reduceMotion ? 'auto' : 'smooth');
		}, 6500);
	}

	dots.forEach(function (dot, index) {
		dot.addEventListener('click', function (event) {
			event.preventDefault();
			goTo(index, reduceMotion ? 'auto' : 'smooth');
			stopRotation();
		});
	});

	if (previousButton) {
		previousButton.addEventListener('click', function () {
			goTo((currentIndex - 1 + panels.length) % panels.length, reduceMotion ? 'auto' : 'smooth');
			stopRotation();
		});
	}

	if (nextButton) {
		nextButton.addEventListener('click', function () {
			goTo((currentIndex + 1) % panels.length, reduceMotion ? 'auto' : 'smooth');
			stopRotation();
		});
	}

	track.addEventListener('scroll', function () {
		if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
		scrollFrame = window.requestAnimationFrame(function () {
			var width = track.clientWidth || 1;
			setActive(Math.round(track.scrollLeft / width));
		});
	}, { passive: true });

	showcase.addEventListener('mouseenter', stopRotation);
	showcase.addEventListener('mouseleave', startRotation);
	showcase.addEventListener('focusin', stopRotation);
	showcase.addEventListener('focusout', startRotation);
	track.addEventListener('pointerdown', stopRotation, { passive: true });
	track.addEventListener('touchend', startRotation, { passive: true });
	document.addEventListener('visibilitychange', startRotation);

	var initialIndex = panels.findIndex(function (panel) {
		return panel.id && ('#' + panel.id) === window.location.hash;
	});
	if (initialIndex < 0) initialIndex = 0;
	setActive(initialIndex);
	if (initialIndex > 0) {
		window.requestAnimationFrame(function () { goTo(initialIndex, 'auto'); });
	}
	startRotation();
}());
