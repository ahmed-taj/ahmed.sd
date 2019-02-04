(function() {
	// Toggle dark theme
	window.onload = function() {
		document.getElementById('toggle').onclick = function() {
			document.body.classList.toggle('light');
			document.body.classList.toggle('dark');
		};
	};
})();
