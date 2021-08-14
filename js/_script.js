'use strict';

// moment.js
// Чтобы вывести дату, в нужном месте вставить:
// <script>document.write(moment().subtract(1, 'days').format('DD.MM.YYYY'));</script>

window.addEventListener('DOMContentLoaded', () => {

    // Hamburger
    const iconMenu = document.querySelector(".header__hamburger"),
        body = document.querySelector("body");

    if (iconMenu) {
        iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("active");
            body.classList.toggle("lock");
        });
    }
    // END Hamburger
});

