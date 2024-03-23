console.log(`██╗   ██╗██╗███╗   ██╗███████╗███████╗███╗   ██╗ ██████╗     ██╗     ██╗   ██╗
╚██╗ ██╔╝██║████╗  ██║██╔════╝██╔════╝████╗  ██║██╔════╝     ██║     ██║   ██║
 ╚████╔╝ ██║██╔██╗ ██║█████╗  █████╗  ██╔██╗ ██║██║  ███╗    ██║     ██║   ██║
  ╚██╔╝  ██║██║╚██╗██║██╔══╝  ██╔══╝  ██║╚██╗██║██║   ██║    ██║     ██║   ██║
   ██║   ██║██║ ╚████║██║     ███████╗██║ ╚████║╚██████╔╝    ███████╗╚██████╔╝
   ╚═╝   ╚═╝╚═╝  ╚═══╝╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝     ╚══════╝ ╚═════╝ \nHey there! Thank you for checking out my website!`);

const sectionAbout = document.querySelector(".section_about");

const continueText = document.querySelector(".continue--text");
const continueIcon = document.querySelector(".continue--icon");
const externalText = document.querySelector(".external");
const externalIcon = document.querySelector(".external-icon");

const projectContainer = document.querySelector(".project-container");
const projectOtherContainer = document.querySelector(
    ".projects--other-container"
);
const projectsFeatured = document.querySelectorAll(".project-item");
const projectsOther = document.querySelectorAll(".project--other-item");

// Animation
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
    sectionAbout.scrollIntoView({ behavior: "smooth" });
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
// 1. image enlarges
// 2. project name turns blue
projectContainer.addEventListener("mouseover", function (e) {
    const target = e.target.closest(".project-item");
    if (!target) return;
    target.querySelector(".project-name").style.color = "#4361ee";
    target.querySelector(".project-img").style.transform = "scale(1.1)";
});
projectsFeatured.forEach((p) =>
    p.addEventListener("mouseleave", function (e) {
        e.target.querySelector(".project-name").style.color = "#333";
        e.target.querySelector(".project-img").style.transform = "scale(1)";
    })
);

// In the PROJECT section, when hovering cursor over an other project
// 1. image enlarges
// 2. project name turns blue
projectOtherContainer.addEventListener("mouseover", function (e) {
    const target = e.target.closest(".project--other-item");
    if (!target) return;
    target.querySelector(".project-name--other").style.color = "#4361ee";
    target.querySelector(".project-img--other").style.transform = "scale(1.15)";
});
projectsOther.forEach((p) =>
    p.addEventListener("mouseleave", function (e) {
        e.target.querySelector(".project-name--other").style.color = "#333";
        e.target.querySelector(".project-img--other").style.transform =
            "scale(1)";
    })
);
