// Navbar Menu Button
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  const visibility = navbarNav.getAttribute("data-visible");

  if (visibility === "false") {
    navbarNav.setAttribute("data-visible", true);
    menuButton.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navbarNav.setAttribute("data-visible", false);
    menuButton.setAttribute("aria-expanded", false);
  } else {
  }
});

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
