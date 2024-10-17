function hello() {
  alert("allez vers trouver un Drinking Buddy");
}
let choix = true;
function hello() {
  let button = document.getElementById("button");
  if (choix == true) {
    button.style.backgroundColor = "red";
    choix = false;
  } else {
    button.style.backgroundColor = "aqua";
    choix = true;
  }
}
