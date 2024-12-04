const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


document.getElementById("call").addEventListener("click", () => {
    window.location.href = "tel:9808370638";
});

document.getElementById("school").addEventListener("click", () => {
    window.location.href = "https://www.collegenp.com/school/badimalika-secondary-school-kalikot";
});


document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const hasSeenPreloader = localStorage.getItem("hasSeenPreloader");

    if (!hasSeenPreloader) {
        document.body.classList.add("loading");
        setTimeout(() => {
            preloader.style.display = "none";
            document.body.classList.remove("loading");
            localStorage.setItem("hasSeenPreloader", "true");
        }, 3000);
    } else {
        preloader.style.display = "none";
    }
});
