// Smooth scrolling for internal links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".slider-container img");

    image.addEventListener("animationend", () => {
        // Keep the image at its final position
        image.style.animation = "none";
        image.style.left = "calc(100% - 200px)"; // Match final position in CSS
    });
});
