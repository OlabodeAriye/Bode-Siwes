let navOpen = document.querySelector(".nav-mobile-img");
let navClose = document.querySelector(".mobile-close-img");
let navLinks = document.querySelector(".nav-links");

navOpen.addEventListener("click", function (e) {
  navLinks.classList.add("open");
});

navClose.addEventListener("click", function (e) {
  navLinks.classList.remove("open");
});
