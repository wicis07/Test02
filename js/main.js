// Navbar Menu Button
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const body = document.body;

menuButton.addEventListener("click", () => {
  const visibility = navbarNav.getAttribute("data-visible");

  if (visibility === "false") {
    navbarNav.setAttribute("data-visible", true);
    menuButton.setAttribute("aria-expanded", true);
    overlay.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    navbarNav.setAttribute("data-visible", false);
    menuButton.setAttribute("aria-expanded", false);
    overlay.setAttribute("data-visible", false);
  }
});

// SET INTERVAL FOR CAROUSEL SERVIVES

const carousel = document.querySelector(".carousel");
const services = document.querySelectorAll(".service");
const serviceCount = services.length;

let currentIndex = 0;
const intervalTime = 5000; // Change slide every 5 seconds

function nextService() {
  services[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % serviceCount;
  services[currentIndex].classList.add("active");
  updateCarousel();
}

function updateCarousel() {
  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(nextService, intervalTime);

// Accordion
const labels = document.querySelectorAll(".label");

labels.forEach(function (label) {
  label.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;

    content.style.maxHeight =
      !content.style.maxHeight || content.style.maxHeight === "0px"
        ? content.scrollHeight + "px"
        : "0px";
  });
});
