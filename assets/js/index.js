const mainArrow = document.getElementById("scroll_button");
const arrow = document.querySelector("i");
const buttonMain = document.querySelector("button");
const arrowUp = document.getElementById("circle");
const descText = document.querySelector(".description");
const titleDarkMode = document.querySelector("second_title");

arrow.addEventListener("mouseover", () => {
  arrow.classList.add("arrow_color");
});

arrow.addEventListener("mouseleave", () => {
  arrow.classList.remove("arrow_color");
});

//  Fonction pour défilement en cliquant sur la flèche du header

function scrollToNav() {
  return window.scrollTo({
    top: 700,
    behavior: "smooth",
  });
}

function scrollToHeader() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

mainArrow.addEventListener("click", scrollToNav);

const bouttonMode = document.getElementById("nightDayMode");
const body = document.querySelector("body");
const pLogin = document.getElementById("pDeLogin");
const pRegister = document.getElementById("pDeRegister");

let darkMode = false;

function toggleMode() {
  darkMode = !darkMode;

  if (darkMode) {
    body.classList.add("night-mode");
    body.classList.remove("day-mode");
    bouttonMode.textContent = "Night";
    bouttonMode.style.backgroundColor = "black";
    bouttonMode.style.color = "white";
  } else {
    body.classList.add("day-mode");
    body.classList.remove("night-mode");
    bouttonMode.textContent = "Day";
    bouttonMode.style.backgroundColor = "white";
    bouttonMode.style.color = "black";
    pLogin.style.color = "black";
    pRegister.style.color = "black";
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
  return window.scrollToHeader();
}

arrowUp.addEventListener("click", returnToTheTop);

/* code pour inscription et login */

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = event.target.username.value; // Récupère le nom d'utilisateur
    const email = event.target.email.value; // Récupère l'email
    const password = event.target.password.value; // Récupère le mot de passe

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }), // Envoie les données au serveur
    });

    const result = await response.json();
    alert(result.message); // Affiche le message de réponse

    const backgroundblur = document.getElementById("blur-background");
    const fenetreinscription = document.getElementById("register-popup");
    const bouttonConnection = document.getElementById("voir-popup");
    const bouttonInscription = document.getElementById("show-popup");
    const monPseudo = document.getElementById("pseudo");
    const Description = document.getElementById("Description");
    const seDéconecter = document.getElementById("sedéconecter");
    const profilemenu = document.getElementById("profileMenu");

    if (result.message) {
      backgroundblur.style.display = "none";
      fenetreinscription.style.display = "none";
      bouttonConnection.style.display = "none";
      bouttonInscription.style.display = "none";
      monPseudo.textContent = username;
      monPseudo.style.color = "blue";
      Description.style.display = "flex";
      seDéconecter.style.display = "flex";
      document.getElementById("bouttonProfileNC").src =
        "https://th.bing.com/th/id/R.0b3f98890380a50cd3a3f44f486f74eb?rik=b49YY9mW%2buDHwQ&pid=ImgRaw&r=0";
      document.getElementById("bouttonProfileNC").style.width = "60px";
      profilemenu.style.backgroundColor = "#a021cd";
      profilemenu.style.height = "370px";
    }
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const fondgris = document.getElementById("fond-gris");
    const fenetreLogin = document.getElementById("login-popup");
    const bouttonConnection = document.getElementById("voir-popup");
    const bouttonInscription = document.getElementById("show-popup");
    const monPseudo = document.getElementById("pseudo");
    const Description = document.getElementById("Description");
    const seDéconecter = document.getElementById("sedéconecter");
    const profilemenu = document.getElementById("profileMenu");
    const result = await response.json();

    if (result.success) {
      alert("Connexion réussie");
      fondgris.style.display = "none";
      fenetreLogin.style.display = "none";
      bouttonConnection.style.display = "none";
      bouttonInscription.style.display = "none";
      monPseudo.textContent = "Mon Profile";
      monPseudo.style.color = "blue";
      Description.style.display = "flex";
      seDéconecter.style.display = "flex";
      document.getElementById("bouttonProfileNC").src =
        "https://th.bing.com/th/id/R.0b3f98890380a50cd3a3f44f486f74eb?rik=b49YY9mW%2buDHwQ&pid=ImgRaw&r=0";
      document.getElementById("bouttonProfileNC").style.width = "60px";
      profilemenu.style.backgroundColor = "#a021cd";
      profilemenu.style.height = "370px";
    } else {
      alert(result.message);
    }
  });

const logoutBtn = document.getElementById("sedéconecter");

logoutBtn.addEventListener("click", () => {
  window.location.reload();
});
