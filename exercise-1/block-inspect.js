// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
	e.preventDefault();
});

// Disable F12, F11, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+J, and other developer tools shortcuts
document.addEventListener('keydown', function (e) {
	if (e.keyCode === 123 || // F12
		e.keyCode === 122 || // F11
		(e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
		(e.ctrlKey && e.keyCode === 85) || // Ctrl+U
		e.keyCode === 27) { // Esc key
		e.preventDefault();
		alert('Access to developer tools is disabled.');
	}
});

// Periodically check if developer tools are open
function detectDevTools() {
	let threshold = 160; // Adjust this value as needed
	let widthThreshold = window.outerWidth - window.innerWidth > threshold;
	let heightThreshold = window.outerHeight - window.innerHeight > threshold;

	if (widthThreshold || heightThreshold) {
		alert('Developer tools are open. This website does not allow access to developer tools.');
		// Optionally, you can redirect or take other actions here
	}
}

// Check for developer tools every second
setInterval(detectDevTools, 1000);