const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {

    faq.querySelector(".faq-question").addEventListener("click", () => {

        faqs.forEach((item) => {
            if(item !== faq){
                item.classList.remove("active");
            }
            
        });

        faq.classList.toggle("active");

    });

});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector("nav");

menu.onclick = () => {
    navbar.classList.toggle("active");

    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-xmark");
};