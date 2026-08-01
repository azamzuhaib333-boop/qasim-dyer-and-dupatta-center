// Smooth scrolling for website navigation

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// Website loaded message

document.addEventListener("DOMContentLoaded", function () {

    console.log("Qasim Dyer and Dupatta Center website loaded successfully.");

});
