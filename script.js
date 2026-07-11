/* ============================================= */
/* CONFIGURACIÓN RESEÑAS DE GOOGLE               */
/* Pega aquí tus dos datos y las reseñas de tu   */
/* Google Business Profile aparecerán solas.     */
/* Si los dejas vacíos, se muestran las reseñas  */
/* manuales escritas en el HTML.                 */
/* ============================================= */

const GOOGLE_REVIEWS_CONFIG = {

    apiKey: "AIzaSyB11WdR6_LHa8tyTnTSmESHGvx_dlMZcEA",

    placeId: "ChIJxxbDisKsd4MR_OpUTFQr52g"

};

/* ========================= */
/* MODAL DE CONTACTO */
/* ========================= */

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

/* ========================= */
/* MODAL DE PROYECTOS */
/* ========================= */

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

    modal.classList.add("active");

});

/* ========================= */
/* HEADER AL HACER SCROLL */
/* ========================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");
    }

});

/* ========================= */
/* MENÚ HAMBURGUESA */
/* ========================= */

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

/* Cierra el menú al pulsar un enlace (móvil) */

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        hamburger.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

/* ========================= */
/* TARJETAS FLIP (MÓVIL) */
/* ========================= */

document
.querySelectorAll(".card")
.forEach(card => {

    card.addEventListener("click", () => {

        if(window.innerWidth <= 768){

            card.classList.toggle("active");

        }

    });

});

/* ========================= */
/* ENFOQUE DESPLEGABLE */
/* ========================= */

document.querySelectorAll(".enfoque-item").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

/* ========================= */
/* ANIMACIONES DE SCROLL */
/* ========================= */

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

/* ========================= */
/* CONTADORES ESTADÍSTICAS */
/* ========================= */

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

/* ============================================= */
/* RESEÑAS DE GOOGLE BUSINESS PROFILE            */
/* Al cargar, SUSTITUYEN a las reseñas manuales  */
/* del HTML manteniendo el mismo formato. Si no  */
/* hay claves o Google falla, se quedan las      */
/* manuales: la sección nunca desaparece         */
/* ============================================= */

/* --- Utilidades --- */

function starsHTML(rating){

    const full = Math.round(rating);

    return "★".repeat(full) + "☆".repeat(5 - full);
}

function escapeHTML(text){

    const div = document.createElement("div");

    div.textContent = text || "";

    return div.innerHTML;
}

/* --- Pinta las reseñas en la cuadrícula de la web --- */

function renderGoogleReviews(place){

    const reviews = (place.reviews || []).filter(
        r => r.text && r.text.trim().length > 0
    );

    if(reviews.length === 0) return;

    const grid = document.getElementById("reviewsGrid");

    grid.innerHTML = reviews.map(review => {

        const photo = review.profile_photo_url
            ? '<img class="autor-foto" src="' + review.profile_photo_url +
              '" alt="" referrerpolicy="no-referrer" loading="lazy">'
            : '<span class="autor-foto autor-inicial">' +
              escapeHTML((review.author_name || "?").charAt(0)) + '</span>';

        return (
            '<div class="testimonio">' +

                '<div class="stars">' + starsHTML(review.rating) + '</div>' +

                '<p>' + escapeHTML(review.text) + '</p>' +

                '<div class="testimonio-autor">' +

                    photo +

                    '<div>' +
                        '<h4>' + escapeHTML(review.author_name) + '</h4>' +
                        '<span>' + escapeHTML(review.relative_time_description || "") + '</span>' +
                    '</div>' +

                '</div>' +

            '</div>'
        );

    }).join("");

    /* Resumen: nota media, estrellas, total y enlace */

    if(place.rating){

        document.getElementById("gRating").textContent =
            place.rating.toFixed(1).replace(".", ",");

        document.getElementById("gStars").textContent =
            starsHTML(place.rating);

        document.getElementById("gCount").textContent =
            place.user_ratings_total
                ? "(" + place.user_ratings_total + " reseñas)"
                : "";

        if(place.url){
            document.getElementById("gLink").href = place.url;
        }

        document.getElementById("googleSummary").hidden = false;
    }

}

/* --- Carga desde Google · Places API (New) --- */
/* Endpoint REST moderno (places.googleapis.com/v1):
   sin SDK de Maps ni PlacesService legacy */

const REVIEWS_CACHE_KEY = "taun_google_reviews_v2";
const REVIEWS_CACHE_TTL = 6 * 60 * 60 * 1000; /* 6 horas */

async function initGoogleReviews(){

    const { apiKey, placeId } = GOOGLE_REVIEWS_CONFIG;

    /* Sin claves configuradas: se muestran las
       reseñas manuales escritas en el HTML */

    if(!apiKey || !placeId) return;

    /* Caché de sesión: evita repetir la llamada a
       Google en cada navegación */

    try{

        const cached = JSON.parse(
            sessionStorage.getItem(REVIEWS_CACHE_KEY)
        );

        if(cached && Date.now() - cached.t < REVIEWS_CACHE_TTL){

            renderGoogleReviews(cached.place);

            return;
        }

    }catch(e){ /* caché corrupta: se ignora */ }

    /* Petición a Places API (New) */

    const endpoint =
        "https://places.googleapis.com/v1/places/" +
        encodeURIComponent(placeId) +
        "?languageCode=es" +
        "&fields=displayName,rating,userRatingCount,reviews,googleMapsUri" +
        "&key=" + encodeURIComponent(apiKey);

    let response, body;

    try{

        response = await fetch(endpoint);

        body = await response.json();

    }catch(err){

        console.warn(
            "Reseñas de Google: fallo de red o CORS.",
            err
        );

        return; /* se quedan las reseñas manuales */
    }

    if(!response.ok){

        console.warn(
            "Reseñas de Google no cargadas:",
            body && body.error
                ? body.error.status + " — " + body.error.message
                : "HTTP " + response.status
        );

        return; /* se quedan las reseñas manuales */
    }

    /* Normaliza la respuesta de la API nueva al
       formato que pinta renderGoogleReviews */

    const data = {

        reviews: (body.reviews || []).map(r => ({

            author_name: r.authorAttribution
                ? r.authorAttribution.displayName
                : "",

            profile_photo_url: r.authorAttribution
                ? r.authorAttribution.photoUri
                : "",

            rating: r.rating,

            text: r.text
                ? r.text.text
                : (r.originalText ? r.originalText.text : ""),

            relative_time_description:
                r.relativePublishTimeDescription || ""
        })),

        rating: body.rating,

        user_ratings_total: body.userRatingCount,

        url: body.googleMapsUri
    };

    try{

        sessionStorage.setItem(
            REVIEWS_CACHE_KEY,
            JSON.stringify({ t: Date.now(), place: data })
        );

    }catch(e){ /* almacenamiento lleno: sin caché */ }

    renderGoogleReviews(data);
}

initGoogleReviews();
