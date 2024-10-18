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

/* -------------------------------- fenetre d'abonnement -----------------------------------------*/

const fonabonnement = document.getElementById("fond");
const fondpopup = document.getElementById("Abonnement-popup");
const un = document.getElementById("un");
const cinque = document.getElementById("cinque");
const vcinque = document.getElementById("vcinque");
const cent = document.getElementById("cent");
const close3 = document.getElementById("close3");
const bouttonAbonnement = document.getElementById("Abonnement");

un.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Un peut radin comme même");
});
cinque.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Merci, cela nous touche beaucoup !");
});
vcinque.addEventListener("click", function (event) {
  event.preventDefault();
  alert("On à un nouveau sauveur de Koala ! !");
});
cent.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Tu veux la mort de Nicolas 100% ! ! !");
});
close3.addEventListener("click", function (event) {
  event.preventDefault();
  fonabonnement.style.display = "none";
  fondpopup.style.display = "none";
});
bouttonAbonnement.addEventListener("click", function () {
  fonabonnement.style.display = "block";
  fondpopup.style.display = "flex";
});

const fonAide = document.getElementById("fond2");
const fondpopup2 = document.getElementById("Aide-popup");
const bouttonAide = document.getElementById("Aide");
const close4 = document.getElementById("close4");

close4.addEventListener("click", function (event) {
  event.preventDefault();
  fonAide.style.display = "none";
  fondpopup2.style.display = "none";
});
bouttonAide.addEventListener("click", function () {
  fonAide.style.display = "block";
  fondpopup2.style.display = "flex";
});
