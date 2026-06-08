const openBtn = document.getElementById("openContact");
const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {

    modal.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

const projectLinks =
document.querySelectorAll(".open-project");

const projectModal =
document.getElementById("projectModal");

const closeProject =
document.getElementById("closeProject");

projectLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        document.getElementById(
            "modalProjectTitle"
        ).textContent =
        link.dataset.title;

        document.getElementById(
            "modalProjectDescription"
        ).textContent =
        link.dataset.description;

        document.getElementById(
            "modalProjectImage"
        ).src =
        link.dataset.image;

        document.getElementById(
            "modalProjectLocation"
        ).textContent =
        "📍 " + link.dataset.location;

        document.getElementById(
            "modalProjectSize"
        ).textContent =
        "📐 " + link.dataset.size;

        document.getElementById(
            "modalProjectType"
        ).textContent =
        "🏗️ " + link.dataset.type;

        projectModal.classList.add(
            "active"
        );

    });

});

closeProject.addEventListener("click", () => {

    projectModal.classList.remove("active");

});

projectModal.addEventListener("click", (e) => {

    if(e.target === projectModal){

        projectModal.classList.remove("active");

    }

});

document
.querySelector(".project-contact-btn")
.addEventListener("click", () => {

    projectModal.classList.remove("active");

    contactModal.classList.add("active");

});
