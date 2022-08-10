const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");

window.addEventListener("click", (e) => {
    if (e.target === hamburger) {
        header.classList.toggle("opened");
    }
});
