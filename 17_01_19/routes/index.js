const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/:id");

module.exports = router;
