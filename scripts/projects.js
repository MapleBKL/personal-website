"use strict";

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const pageTop = document.querySelector(".layout");
const demoLink = document.querySelector(".demo-link");
const sectionFeatures = document.querySelector("#features");

const logo = document.querySelector(".logo-refresh");
const btnMobileNav = document.querySelector(".btn-mobile");

const btnRequest = document.querySelector(".btn-request");
const btnCloseRequest = document.querySelector(".close-request");
const requestMsg = document.querySelector(".request-source");
const overlay = document.querySelector(".overlay");

function highlightNav() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            navLinks.forEach((link) => (link.style.color = ""));
            navLinks[index].style.color = "#4361ee";
        }
    });
}

window.addEventListener("scroll", highlightNav);

nav.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".nav-link");
    if (!target) return;
    document
        .querySelector(`.${target.getAttribute("href").slice(1)}`)
        .scrollIntoView({
            behavior: "smooth",
        });
});

backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    pageTop.scrollIntoView({ behavior: "smooth" });
});

demoLink?.addEventListener("click", function (e) {
    e.preventDefault();
    sectionFeatures.scrollIntoView({ behavior: "smooth" });
});

btnMobileNav.addEventListener("click", function () {
    pageTop.classList.toggle("nav-open");
});

// clicking outside of the mobile nav closes it
document.addEventListener("click", function (e) {
    if (
        !e.target.closest(".navigation") &&
        !e.target.closest(".btn-mobile") &&
        pageTop.classList.contains("nav-open")
    ) {
        e.preventDefault();
        pageTop.classList.toggle("nav-open");
    }
});

// request source
const closeModal = () => {
    requestMsg.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnRequest?.addEventListener("click", function () {
    requestMsg.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

btnCloseRequest?.addEventListener("click", closeModal);

overlay?.addEventListener("click", function () {
    if (overlay.classList.contains("hidden")) return;
    closeModal();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
        closeModal();
    }
});
