function highlight() {
	document.querySelectorAll(".project").forEach((it) => it.style = "");
	
	const selectedProject = document.querySelector(window.location.hash);
	if (selectedProject) {
		const parentNode = selectedProject.parentNode;
		if (parentNode && parentNode.nodeName === "DIV")
			parentNode.style = "background-color: rgba(255, 255, 255, 0.25)";
	}
}

window.addEventListener("hashchange", highlight);
highlight();