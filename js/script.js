const tabsBtn = document.querySelectorAll(".testimonials__tab");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-mobile");
const closeElem = document.querySelector(".menu-mobile__close");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let cuurentBtn = item;

        tabsBtn.forEach(function(item) {
            item.classList.remove("testimonials__tab_active");
        });

        cuurentBtn.classList.add("testimonials__tab_active");
    });
});

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});