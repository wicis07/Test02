const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
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
