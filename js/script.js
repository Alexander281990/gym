const tabsBtn = document.querySelectorAll(".testimonials__tab");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let cuurentBtn = item;

        tabsBtn.forEach(function(item) {
            item.classList.remove("testimonials__tab_active");
        });

        cuurentBtn.classList.add("testimonials__tab_active");
    });
});