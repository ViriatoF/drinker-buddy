const mainArrow = document.getElementById("scroll_button");
const arrow = document.querySelector("i");
const buttonMain = document.querySelector("button");
const nightDayButton = document.querySelector("#nightDayMode");
const body = document.querySelector("body");
const arrowUp = document.getElementById("circle");
const descText = document.querySelector(".description");
const titleDarkMode = document.querySelector("second_title");

arrow.addEventListener("mouseover", ()=>{
  arrow.classList.add("arrow_color");
})

arrow.addEventListener("mouseleave", ()=>{
  // console.log("couleur");
  arrow.classList.remove("arrow_color");
})

//  Fonction pour défilement en cliquant sur la flèche du header

function scrollToNav() {
  return window.scrollTo(
    {
      top : 700,
      behavior :"smooth" 
  });
};

mainArrow.addEventListener("click", scrollToNav);


/* Function who tranform the body in dark mode when you click on the toggle button*/
function switchDark(){

  body.classList.toggle("night_mode_body");
  // descText.classList.remove("text_darknight");
  // titleDarkMode.classList.remove("home_main_darkmode");
  nightDayButton.textContent = "Dark";
  
  if(body.classList.contains("night_mode_body")){

    // titleDarkMode.classList.add("home_main_darkmode");
    nightDayButton.textContent = "Light";
    // descText.classList.add("text_darknight");
    // arrowUp.classList.add("circle_arrow");
  }
  
}

/* Event for activate toggle dark/light mode*/
nightDayButton.addEventListener("click",switchDark);

/*Change color of circle arrow up on top of the website*/ 

arrowUp.addEventListener("mouseover", ()=>{
  arrowUp.classList.add("circle_arrow");
})
arrowUp.addEventListener("mouseleave", ()=>{
  arrowUp.classList.remove("circle_arrow");
})

/** Event for return of the top of the page */

function returnToTheTop(){
  return window.scrollToNav();
}

arrowUp.addEventListener("click", returnToTheTop);

