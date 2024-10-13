const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to the button
    document.getElementById("call").addEventListener("click", () => {
        // Initiate a phone call with the specified number
        window.location.href = "tel:9808370638";
    });
});
