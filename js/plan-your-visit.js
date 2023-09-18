// Navbar Menu Button
var navbarNav = document.getElementById("dropdown"),
  menuButton = document.getElementById("menu");

menuButton.onclick = function () {
  navbarNav.classList.toggle("open");
};

// Accordion
let labels = document.querySelectorAll(".label");

labels.forEach(function (label) {
  label.addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    content.style.maxHeight =
      !content.style.maxHeight || content.style.maxHeight === "0px"
        ? content.scrollHeight + "px"
        : "0px";
  });
});
