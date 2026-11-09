
/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* CLOSE MENU AFTER CLICKING A LINK */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* ANIMATED DEVELOPER TITLE */

const typingElement = document.getElementById("typing");

const titles = [
    "Junior Software Developer",
    "IT Student",
    "Java Developer",
    "Future Software Engineer"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentTitle.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentTitle.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentTitle.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            titleIndex = (titleIndex + 1) % titles.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
