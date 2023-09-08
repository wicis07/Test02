// Navbar Menu Button
var navbarNav = document.getElementById("dropdown"),
  menuButton = document.getElementById("menu");

menuButton.onclick = function () {
  navbarNav.classList.toggle("open");
};

// Accordion
var acc = document.getElementsByClassName("label");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}