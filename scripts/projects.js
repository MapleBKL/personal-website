const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const pageTop = document.querySelector(".layout");

const logo = document.querySelector(".logo-refresh");

logo.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.reload();
});

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
