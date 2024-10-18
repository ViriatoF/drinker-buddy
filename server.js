const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const users = [];

// Route pour l'inscription

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  console.log("Données reçues :", req.body);

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Données manquantes." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashedPassword });
  console.log("Utilisateur ajouté :", {
    username,
    email,
    password: hashedPassword,
  });

  res.json({ success: true, message: "Utilisateur inscrit avec succès." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Route pour la connexion

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Données manquantes" });
  }

  try {
    const user = users.find((u) => u.email === email);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Utilisateur non trouvé" });
    }

    // Comparer le mot de passe haché
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Mot de passe incorrect" });
    }

    console.log("Connexion réussie pour l'utilisateur : ", email);
    res.json({
      success: true,
      message: "Connexion réussie",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion : ", error);
    res
      .status(500)
      .json({ success: false, message: "Erreur lors de la connexion" });
  }
});
