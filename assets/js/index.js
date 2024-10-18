const mainArrow = document.getElementById("scroll_button");
const arrow = document.querySelector("i");
const buttonMain = document.querySelector("button");
const arrowUp = document.getElementById("circle");
const descText = document.querySelector(".description");
const titleDarkMode = document.querySelector(".title");

arrow.addEventListener("mouseover", () => {
  arrow.classList.add("arrow_color");
});

arrow.addEventListener("mouseleave", () => {
  arrow.classList.remove("arrow_color");
});

//  Fonction pour défilement en cliquant sur la flèche du header

function scrollToNav() {
  return window.scrollTo({
    top:700,
    behavior: "smooth",
  });
}

mainArrow.addEventListener("click", scrollToNav);

const bouttonMode = document.getElementById("nightDayMode");
const body = document.querySelector("body");

let darkMode = false;

function toggleMode() {
  darkMode = !darkMode;

  if (darkMode) {
    body.classList.add("night-mode");
    body.classList.remove("day-mode");
    bouttonMode.textContent = "Night";
    bouttonMode.style.backgroundColor = "black";
    bouttonMode.style.color = "white";
    titleDarkMode.style.color = "white";
  } else {
    body.classList.add("day-mode");
    body.classList.remove("night-mode");
    bouttonMode.textContent = "Day";
    bouttonMode.style.backgroundColor = "white";
    bouttonMode.style.color = "black";
    titleDarkMode.style.color = "#a021cd";
  }
}

bouttonMode.addEventListener("click", toggleMode);


/*Change color of circle arrow up on top of the website*/

arrowUp.addEventListener("mouseover", () => {
  arrowUp.classList.add("circle_arrow");
});
arrowUp.addEventListener("mouseleave", () => {
  arrowUp.classList.remove("circle_arrow");
});

/** Event for return of the top of the page */

function returnToTheTop() {
  return window.scrollToNav();
}

arrowUp.addEventListener("click", returnToTheTop);
