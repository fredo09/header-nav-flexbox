/**
 * Funcinalidad de menu
 */

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__links");

// evento del boton menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__links--visible");

  if (navMenu.classList.contains("nav__links--visible")) {
    navMenu.setAttribute("arial-label", "Cerrar menu");
  } else {
    navMenu.setAttribute("arial-label", "Abrir menu");
  }
});
