"use strict";

(function() {

	const BUTTON_NAMES_TO_CLICK = [
		"View more comments",
		"more replies",
		"1 more reply"
	];
	// const SVG_PLUS_PATH = "M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z";

	initialization();

	////////////////////////////////////////////////////////////////////////////////////
	function initialization() {
		clickAllButtons();
		observeBodyMutation();
	}

	////////////////////////////////////////////////////////////////////////////////////
	function observeBodyMutation() {
		const observer = new MutationObserver(clickAllButtons);
		observer.observe(document.body, { childList: true, subtree: true });
	}

	////////////////////////////////////////////////////////////////////////////////////
	function clickAllButtons() {
		document.body.querySelectorAll("button").forEach(clickButton);
	}

	////////////////////////////////////////////////////////////////////////////////////
	function clickButton(button) {

		const isVisible = (button.offsetParent !== null);
		const isClickable = BUTTON_NAMES_TO_CLICK.some((name) => button.innerText.includes(name));	// || button.innerHTML.includes(SVG_PLUS_PATH);

		if( isVisible && isClickable ) {
			button.click();
		}
	}

})();
