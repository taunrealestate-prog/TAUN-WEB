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

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }

});

const hamburger =
document.getElementById("menu-toggle");

const nav =
document.querySelector("nav");

hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        hamburger.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }else{

        hamburger.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});


document
.querySelectorAll(".flip-card")
.forEach(card => {

    card.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            card.classList.toggle("flipped");

        }

    });

});

document.querySelectorAll(".collapsible h3").forEach((header) => {
    header.addEventListener("click", () => {
        const card = header.parentElement;
        card.classList.toggle("active");
    });
});

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

const counters = [

    {
        id: "projects-count",
        target: 15,
        suffix: "+"
    },

    {
        id: "value-count",
        target: 2,
        suffix: "M€+"
    },

    {
        id: "clients-count",
        target: 100,
        suffix: "%"
    },

    {
        id: "years-count",
        target: 10,
        suffix: ""
    }

];

let statsAnimated = false;

function animateCounters(){

    if(statsAnimated) return;

    statsAnimated = true;

    counters.forEach(counter => {

        const element = document.getElementById(counter.id);

        let current = 0;

        const duration = 2500;

        const increment =
            counter.target / (duration / 16);

        const timer = setInterval(() => {

            current += increment;

            if(current >= counter.target){

                current = counter.target;

                clearInterval(timer);
            }

            element.textContent =
                Math.floor(current) +
                counter.suffix;

        },16);

    });

}

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        animateCounters();

    }

});

observer.observe(statsSection);

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.15
    }

);

fadeElements.forEach(element => {

    fadeObserver.observe(element);

});


const fadeCards = document.querySelectorAll(".fade-card");

const cardObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.15
    }

);

fadeCards.forEach(card => {

    cardObserver.observe(card);

});