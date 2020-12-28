window.addEventListener("load", ()=> {
	let progressBars = document.querySelectorAll(".progress-bar");
	let values = [
		"80%",
		"60%",
		"70%",
		"90%",
		"80%",
		"80%",
		"60%",
		"70%",
		"90%",
		"80%",

	];
	progressBars.forEach((progress, index) => {
		progress.style.width = values[index]
	})
})