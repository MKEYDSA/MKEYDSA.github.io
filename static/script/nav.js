document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize", function (event) {
        toggleNav()
    });

    toggleNav();
});

function toggleNav() {
    const hamburger = document.querySelector("nav #menu");

    if (window.innerWidth < 768) {
        hamburger.checked = false;
    } else {
        hamburger.checked = true;
    }
}
