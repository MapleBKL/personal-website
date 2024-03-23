const sectionAbout = document.querySelector(".section_about");

const continueText = document.querySelector(".continue--text");
const continueIcon = document.querySelector(".continue--icon");
const externalText = document.querySelector(".external");
const externalIcon = document.querySelector(".external-icon");

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
