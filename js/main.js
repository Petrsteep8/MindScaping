document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.getElementsByClassName("faq-item");
    for (let i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener("click", function() {
            const answer = this.querySelector(".answer");
            if (answer.hidden) {
                answer.hidden = false;
                this.querySelector(".faq-toggle").style.transform = "rotate(180deg)";
            } else {
                answer.hidden = true;
                this.querySelector(".faq-toggle").style.transform = "rotate(0deg)";
            }
        });
    }
    // console.log(faqItems.length);


});