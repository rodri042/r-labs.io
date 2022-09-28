if (window.location.hash) {
	const selectedProject = document.querySelector(window.location.hash);
	if (selectedProject) {
		const parentNode = selectedProject.parentNode;
		if (parentNode && parentNode.nodeName === "DIV")
			selectedProject.parentNode.style = "background-color: rgba(255, 255, 255, 0.25)";
	}
}