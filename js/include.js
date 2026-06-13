async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
    
    if(id === "header"){

        const burger = document.getElementById("burger");
        const nav = document.querySelector(".navbar");

        burger.addEventListener("click", () => {

            burger.classList.toggle("active");
            nav.classList.toggle("active");

        });

        let currentPage = window.location.pathname.split("/").pop();

        if(currentPage === ""){
            currentPage = "index.html";
        }

        document.querySelectorAll(".navbar a").forEach(link => {

            if(link.getAttribute("href") === currentPage){
                link.classList.add("active");
            }

        });
    }
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");