"use strict";

console.log(`
 ██████╗ ██████╗ ███████╗███████╗████████╗██╗███╗   ██╗ ██████╗ ███████╗██╗
██╔════╝ ██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝ ██╔════╝██║
██║  ███╗██████╔╝█████╗  █████╗     ██║   ██║██╔██╗ ██║██║  ███╗███████╗██║
██║   ██║██╔══██╗██╔══╝  ██╔══╝     ██║   ██║██║╚██╗██║██║   ██║╚════██║╚═╝
╚██████╔╝██║  ██║███████╗███████╗   ██║   ██║██║ ╚████║╚██████╔╝███████║██╗
 ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝
                                                                           
 \nThank you for checking out my website!`);

const header = document.querySelector(".header");
const headerPlaceholder = document.querySelector(".header-placeholder");
const availableTags = document.querySelectorAll(".available");

const sections = document.querySelectorAll(".section");
const sectionHero = document.querySelector(".section_hero");
const sectionAbout = document.querySelector(".section_about");
const sectionExperience = document.querySelector(".section_experience");
const sectionSkills = document.querySelector(".section_skills");
const sectionProjects = document.querySelector(".section_projects");
const sectionCta = document.querySelector(".section_cta");

const btnAbout = document.querySelector(".main_nav-link--about");
const btnExperience = document.querySelector(".main_nav-link--experience");
const btnSkills = document.querySelector(".main_nav-link--skills");
const btnProjects = document.querySelector(".main_nav-link--projects");
const btnCta = document.querySelector(".main_nav--cta");
const btnBackToTop = document.querySelector(".link-icon--top");
const btnLinkedIn = document.querySelector(".logo-linkedin");

const continueText = document.querySelector(".continue--text");
const continueIcon = document.querySelector(".continue--icon");
const externalText = document.querySelector(".external");
const externalIcon = document.querySelector(".external-icon");

const headerContainer = document.querySelector(".header_container");
const projectContainer = document.querySelector(".project-container");
const projectOtherContainer = document.querySelector(
    ".projects--other-container"
);
const projectsFeatured = document.querySelectorAll(".project-item");
const projectsOther = document.querySelectorAll(".project-link--other");
const projectImgs = document.querySelectorAll(".project-img");
const projectImgsOther = document.querySelectorAll(".project-img--other");

const logo = document.querySelector(".logo-refresh");

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navPanel = document.querySelector(".main_nav");

function hasTouch() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
}

//////////

logo.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
});

// Animation
// sticky nav bar + back-to-top button
const navHeight = header.getBoundingClientRect().height;

const showNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
        btnBackToTop.classList.remove("element--hidden");
    } else {
        document.body.classList.remove("sticky");
        btnBackToTop.classList.add("element--hidden");
    }
};

const navObserver = new IntersectionObserver(showNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
navObserver.observe(headerContainer);

// back to top button implementation
btnBackToTop.addEventListener("click", function (e) {
    e.preventDefault();
    headerContainer.scrollIntoView({ behavior: "smooth" });
});

// main nav links smooth scroll
btnAbout.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionAbout.getBoundingClientRect();
    if (sectionAbout.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

btnExperience.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionExperience.getBoundingClientRect();
    if (sectionExperience.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

btnSkills.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionSkills.getBoundingClientRect();
    if (sectionSkills.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

btnProjects.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionProjects.getBoundingClientRect();
    if (sectionProjects.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

btnCta.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionCta.getBoundingClientRect();
    if (sectionCta.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

// In the hero section, when hovering cursor over the CONTINUE text, the icon
// below it should move down
continueText.addEventListener("mouseenter", function () {
    continueIcon.style.transform = "translateY(1.2rem)";
});
continueText.addEventListener("mouseleave", function () {
    continueIcon.style.transform = "translateY(0)";
});

// click CONTINUE -> go to the ABOUT section
continueText.addEventListener("click", function (e) {
    e.preventDefault();
    const coords = sectionAbout.getBoundingClientRect();
    if (sectionAbout.classList.contains("section--hidden")) {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset - 40,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            left: coords.left + window.pageXOffset,
            top: coords.top + window.pageYOffset,
            behavior: "smooth",
        });
    }
});

// In the EXPERIENCE section, when hovering cursor over the View My Thesis text,
// the icon should move to the top-right corner
externalText.addEventListener("mouseenter", function () {
    externalIcon.style.transform = "translateX(0.6rem)";
});
externalText.addEventListener("mouseleave", function () {
    externalIcon.style.transform = "translateX(0)";
});

// In the PROJECTS section, when hovering cursor over a featured project,
// 1. other featured project images turn grey
// 2. project name turns blue
// 3. external link icon reveals next to project name
if (!hasTouch()) {
    projectContainer.addEventListener("mouseover", function (e) {
        const target = e.target.closest(".project-item");
        if (!target) return;
        target.querySelector(".project-name").style.color = "#4361ee";
        target.querySelector(".project-img").style.transform = "scale(1.03)";
        // projectImgs.forEach((img) => (img.style.filter = "brightness(0.4)"));
        // target.querySelector(".project-img").style.filter = "";
        const icon = target.querySelector(".bx");
        icon.classList.remove("element--hidden");
        icon.style.color = "#4361ee";
    });
    projectsFeatured.forEach((p) =>
        p.addEventListener("mouseleave", function (e) {
            e.target.querySelector(".project-name").style.color = "#333";
            e.target.querySelector(".project-img").style.transform = "scale(1)";
            // projectImgs.forEach((img) => (img.style.filter = ""));
            const icon = e.target.querySelector(".bx");
            icon.classList.add("element--hidden");
            icon.style.color = "#333";
        })
    );
}

// In the PROJECT section, when hovering cursor over an other project
// 1. other project images turn grey
// 2. project name turns blue
if (!hasTouch()) {
    projectOtherContainer.addEventListener("mouseover", function (e) {
        const target = e.target.closest(".project-link--other");
        if (!target) return;
        target.querySelector(".project-name--other").style.color = "#4361ee";
        target.querySelector(".project-img--other").style.transform =
            "scale(1.03)";
        // projectImgsOther.forEach((img) => (img.style.filter = "brightness(0.4)"));
        // target.querySelector(".project-img--other").style.filter = "";
        const icon = target.querySelector(".bx");
        icon.classList.remove("element--hidden");
        icon.style.color = "#4361ee";
    });
    projectsOther.forEach((p) =>
        p.addEventListener("mouseleave", function (e) {
            e.target.querySelector(".project-name--other").style.color = "#333";
            e.target.querySelector(".project-img--other").style.transform =
                "scale(1)";
            // projectImgsOther.forEach((img) => (img.style.filter = ""));
            const icon = e.target.querySelector(".bx");
            icon.classList.add("element--hidden");
            icon.style.color = "#333";
        })
    );
}

// reveal sections
const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove("section--hidden");
        if (
            entry.target.classList.contains("section_about") ||
            entry.target.classList.contains("section_cta")
        ) {
            setTimeout(
                () =>
                    entry.target
                        .querySelectorAll(".about--text-highlight")
                        .forEach((hl) =>
                            hl.classList.add("about--text-highlighted")
                        ),
                1200
            );
        }
        observer.unobserve(entry.target);
    }
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
});

sections.forEach((s) => sectionObserver.observe(s));

// when visitor reaches the CTA section, shake the available notification (only once)
// added effect: blink the linkedin icon three times
const shakeAvailable = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        availableTags.forEach(
            (tag) => (tag.style.animation = "shake 230ms ease-in-out 4000ms")
        );
        btnLinkedIn.style.animation = "blink-linkedin 1500ms linear 1800ms";
        observer.unobserve(entry.target);
    }
};

const availableObserver = new IntersectionObserver(shakeAvailable, {
    root: null,
    threshold: 0.95,
});

availableObserver.observe(sectionCta);

// mobile nav menu button
btnMobileNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

// clicking outside of the mobile nav closes it
document.addEventListener("click", function (e) {
    if (!e.target.closest(".header") && header.classList.contains("nav-open")) {
        e.preventDefault();
        header.classList.toggle("nav-open");
    }
});
