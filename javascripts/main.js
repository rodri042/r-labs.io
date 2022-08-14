if (window.location.hash) {
	const selectedProject = document.querySelector(window.location.hash);
	if (selectedProject)
		selectedProject.parentNode.style = "background-color: rgba(255, 255, 255, 0.25)";
}