const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");

window.addEventListener("click", (e) => {
    if (e.target === hamburger) {
        header.classList.toggle("opened");
        if (header.classList.contains("opened")) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    }
});
