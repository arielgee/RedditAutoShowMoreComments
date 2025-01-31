"use strict";

(function() {

	const BUTTON_TEXT_TO_CLICK = [
		"more replies",
		"1 more reply",
		"View more comments",
	];

	initialization();

	////////////////////////////////////////////////////////////////////////////////////
	function initialization() {

		clickAllButtons();

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
		const isClickable = BUTTON_TEXT_TO_CLICK.some((t) => button.innerText.includes(t));

		if( isVisible && isClickable ) {
			button.click();
		}
	}

})();
