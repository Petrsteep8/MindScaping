const slider = document.querySelector(".reviews-slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

if(slider && nextBtn && prevBtn){

    nextBtn.addEventListener("click", () => {

        slider.scrollBy({
            left: 500,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        slider.scrollBy({
            left: -500,
            behavior: "smooth"
        });

    });

}