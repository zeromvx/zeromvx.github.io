const toggleBtn = document.querySelector(".toggle-btn"), // toggle button
	icon = document.querySelector(".toggle-icon"),
	header = document.querySelector(".header"), // header section
	mainContent = document.querySelector(".main-content"), // main content section
	navList = document.querySelector('.nav'); 

function addActiveClasses() {
	toggleBtn.classList.add("active");
	icon.classList.add("open");
	header.classList.add("header--active");
}

function removeActiveClasses() {
	toggleBtn.classList.remove("active");
	icon.classList.remove("open");
	header.classList.remove("header--active");
}

toggleBtn.addEventListener("click", function () {
	if (!toggleBtn.classList.contains("active")) {
		addActiveClasses();
	} else {
		removeActiveClasses();
	}
});


// removing header on click outside the header
mainContent.addEventListener("click", function () {
	if (toggleBtn.classList.contains("active")) {
		removeActiveClasses();
	}
});

// removing header on nav links click
navList.addEventListener('click', (e) => {
	if (e.target.tagName === "A"){
		removeActiveClasses();
	}
});