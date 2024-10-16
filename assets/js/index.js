// Carousel code opening
console.log("coucou")
// Carousel code ending

const mainArrow = document.getElementById("scroll_button");
const arrow = document.querySelector("i");
const buttonMain = document.querySelector("button");

arrow.addEventListener("mouseover", ()=>{
  arrow.classList.add("arrow_color");
})

arrow.addEventListener("mouseleave", ()=>{
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
