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

const counters = [

    {
        id: "integral-count",
        target: 360,
        suffix: "º"
    },

    {
        id: "areas-count",
        target: 4,
        suffix: ""
    },

    {
        id: "attention-count",
        target: 100,
        suffix: "%"
    },

    {
        id: "availability-count",
        target: 24,
        suffix: "/7"
    }

];

let statsAnimated = false;

function animateCounters() {

    if (statsAnimated) return;

    statsAnimated = true;

    const duration = 2500;
    const fps = 60;
    const totalFrames = duration / (1000 / fps);

    counters.forEach(counter => {

        const element = document.getElementById(counter.id);

        let frame = 0;

        const interval = setInterval(() => {

            frame++;

            const progress = frame / totalFrames;

            const current = Math.round(
                counter.target * progress
            );

            element.textContent =
                current + counter.suffix;

            if (frame >= totalFrames) {

                element.textContent =
                    counter.target + counter.suffix;

                clearInterval(interval);
            }

        }, 1000 / fps);

    });

}

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        animateCounters();

    }

});

observer.observe(statsSection);
