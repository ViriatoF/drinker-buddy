// JSON
// local storage, stringify, spas, getitems, setitems,

/* ------------------------------------Boutton Register---------------------------------------------*/

/* faire apparaitre la fenetre register si tu appuie sur register */

const bouttonInscription = document.getElementById("show-popup");
const backgroundblur = document.getElementById("blur-background");
const fenetreinscription = document.getElementById("register-popup");

if (bouttonInscription !== null) {
  bouttonInscription.addEventListener("click", function () {
    backgroundblur.style.display = "block";
    fenetreinscription.style.display = "flex";
  });
}

/* faire dispparaitre la fenetre register si tu appuie sur X */

const bouttonX = document.querySelector(".fermer");

if (bouttonX !== null) {
  bouttonX.addEventListener("click", function () {
    backgroundblur.style.display = "none";
    fenetreinscription.style.display = "none";
  });
}

/* ------------------------------------Boutton Login---------------------------------------------*/

/* faire apparaitre la fenetre Login si tu appuie sur Login */

const bouttonConnection = document.getElementById("voir-popup");
const fondgris = document.getElementById("fond-gris");
const fenetreLogin = document.getElementById("login-popup");

if (bouttonConnection !== null) {
  bouttonConnection.addEventListener("click", function () {
    fondgris.style.display = "block";
    fenetreLogin.style.display = "flex";
  });
}

/* faire dispparaitre la fenetre register si tu appuie sur X */

const buttonX = document.querySelector(".close");

if (buttonX !== null) {
  buttonX.addEventListener("click", function () {
    fondgris.style.display = "none";
    fenetreLogin.style.display = "none";
  });
}

/* faire dispparaitre la fenetre Register et apparaître la fenêtre Login si tu appuie sur "here" */

const hereToLogin = document.querySelector(".directionLogin");

if (hereToLogin !== null) {
  hereToLogin.addEventListener("click", function (event) {
    event.preventDefault();

    backgroundblur.style.display = "none";
    fenetreinscription.style.display = "none";

    fondgris.style.display = "block";
    fenetreLogin.style.display = "flex";

    if (backgroundblur === nul && fenetreinscription === null) {
      fondgris.style.display = "block";
      fenetreLogin.style.display = "flex";
    }
  });
}

/* faire dispparaitre la fenetre Login et apparaître la fenêtre Register si tu appuie sur "here" */

const hereToRegister = document.querySelector(".directionRegister");

if (hereToRegister !== null) {
  hereToRegister.addEventListener("click", function (event) {
    event.preventDefault();

    fondgris.style.display = "none";
    fenetreLogin.style.display = "none";

    backgroundblur.style.display = "block";
    fenetreinscription.style.display = "flex";

    if (fondgris === null && fenetreLogin === null)
      backgroundblur.style.display = "block";
    fenetreinscription.style.display = "flex";
  });
}

/* faire apparaitre la fenetre Profile non connecté */

const menuDeProfile = document.getElementById("profileMenu");
const bouttonProfile = document.getElementById("bouttonProfileNC");

let bool = false;

bouttonProfile.addEventListener("click", function (event) {
  event.preventDefault();

  if (bool === false) {
    menuDeProfile.style.display = "flex";
    bool = true;
  } else {
    menuDeProfile.style.display = "none";
    bool = false;
  }
});

document.addEventListener("click", function (event) {
  if (
    !bouttonProfile.contains(event.target) &&
    !menuDeProfile.contains(event.target)
  ) {
    menuDeProfile.style.display = "none";
    bool = false;
  }
});

/* --------------------------Enregistrement des données-----------------------------------*/

/* Inscription */

const inscriptionBtn = document.getElementById("show-popup");

inscriptionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("emailInscription").value;
  const passwordInput = document.getElementById("passwordInscription").value;
  const userNameInput = document.getElementById("userNameInscription").value;

  if (emailInput && passwordInput) {
    const user = {
      username: userNameInput,
      email: emailInput,
      password: passwordInput,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Inscription réussie !");
  }
});

/* Vérification des donées quand on se connect*/

const connexionBtn = document.getElementById("voir-popup");

connexionBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("adressmail").value;
  const passwordInput = document.getElementById("motdepasse").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    emailInput === storedUser.email &&
    passwordInput === storedUser.password
  ) {
    alert("Connexion réussie !");

    bouttonProfile.src =
      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png";

    const menuDeProfile = document.getElementById("profileMenu");

    localStorage.setItem("isLoggedIn", "true");
  }
});
