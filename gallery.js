document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".gallery img");
	const dialog = document.querySelector("dialog");

	images.forEach((image) => {
		image.addEventListener("click", () => {
			const dialogImage = document.createElement("img");
			dialogImage.src = image.src;
			dialogImage.alt = image.alt || "Clicked image";
			dialogImage.style.maxWidth = "100%";
			dialogImage.style.maxHeight = "100%";

			dialog.innerHTML = "";
			dialog.appendChild(dialogImage);

			dialog.showModal();
		});
	});

	dialog.addEventListener("click", (e) => {
		if (e.target === dialog) {
			dialog.close();
		}
	});
});
