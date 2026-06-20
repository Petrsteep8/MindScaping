document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");
    const successBlock = document.querySelector(".form-success");

    if(!form || !successBlock) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        form.style.opacity = "0";
        form.style.transform = "translateY(-20px)";

        setTimeout(() => {

            form.style.display = "none";

            successBlock.style.display = "block";

            requestAnimationFrame(() => {
                successBlock.classList.add("show");
            });

        }, 400);

    });

});