function highlight() {
	if (!window.location.hash) return;
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

// ---

function scrollToElement(id) {
	const element = document.getElementById(id);
	if (element)
		element.scrollIntoView({ behavior: "smooth" });
}

let currentFilter = null;

function filterBy(tagName) {
	if (currentFilter != null) {
		document.querySelectorAll(".project").forEach((it) => {
			it.style.display = "block";
		});
		document.querySelectorAll(`.index .tag`).forEach((it) => {
			it.style.display = "block"
		});
		document.querySelectorAll(`.clearfilter`).forEach((it) => {
			it.style.display = "none"
		});
		currentFilter = null;
		return;
	}

	document.querySelectorAll(`.project:not([data-tag="${tagName}"])`).forEach((it) => {
		it.style.display = "none"
	});
	document.querySelectorAll(`[data-tag="${tagName}"]`).forEach((it) => {
		it.style.display = "block"
	});
	document.querySelectorAll(`.index .tag`).forEach((it) => {
		it.style.display = "none"
	});
	document.querySelectorAll(`.clearfilter`).forEach((it) => {
		it.style.display = "block"
	});
	
	currentFilter = tagName;
	scrollToElement("index");
}

function findTag(node) {
	if (!node.parentElement) return null;

	return node.parentElement.dataset.tag != null
		? node.parentElement.dataset.tag
		: findTag(node.parentElement);
}

document.querySelectorAll(".tag").forEach((node) => {
	const isProjectButton = findTag(node) != null;

	node.addEventListener("click", () => {
		if (isProjectButton && currentFilter != null) return;

		const tagName = node.dataset.tag || findTag(node);
		filterBy(tagName);
	});
});

document.querySelectorAll(".clearfilter").forEach((node) => {
	node.addEventListener("click", () => filterBy(null));
});