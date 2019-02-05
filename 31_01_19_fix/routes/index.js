const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const estudianteController = require("../controllers/estudianteController");
const { catchErrors } = require("../handlers/errorHandlers");

router.get("/", (req, res) => {
  res.render("home", { title: "Prepa 31/01/19" });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "create" });
});
router.post("/create", catchErrors(estudianteController.create));
router.get("/read", catchErrors(estudianteController.getEstudiantes));
router.get("/read/:carnet", catchErrors(estudianteController.getEstudiante));
router.get("/update", catchErrors(estudianteController.getEstudiantes));
router.get("/update/:carnet", catchErrors(estudianteController.getEstudiante));
router.post("/update/:carnet", catchErrors(estudianteController.update));
router.get("/delete", catchErrors(estudianteController.getEstudiantes));
router.get("/delete/:carnet", catchErrors(estudianteController.getEstudiante));
router.post("/delete/:carnet", catchErrors(estudianteController.delete));

router.get("signin", (req, res) => {
  res.render("auth/signin", { title: "Iniciar Sesion" });
});
router.post("signin", authController.signin);
router.get("signup", (req, res) => {
  res.render("auth/signup", { title: "Registrarse" });
});
router.post("signup", userController.signup, authController.signin);

module.exports = router;
