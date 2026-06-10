document.addEventListener("DOMContentLoaded", () => {

    const burger = document.getElementById("burger");
    const nav = document.querySelector(".navbar");

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

});