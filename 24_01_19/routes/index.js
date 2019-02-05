const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require('../models/user');
const { ROUNDS } = process.env;

router.get("/", (req, res) => {
  res.redirect('/login');
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login"
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register"
  });
});

router.get("/logged-in", (req, res) => {
  res.render("logged-in", {
    title: ""
  });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

const register = async (req, res, next) => {
  try {
    let { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(parseInt(ROUNDS));
    const hash = await bcrypt.hash(password, salt);
    let response = await User.create({
      name,
      email,
      password: hash
    });
    next();
  } catch (error) {
    next(error);
  }
};

router.post("/register", register, passport.authenticate('local', {failureRedirect: '/login', successRedirect: '/logged-in'}), (req, res) => {
  res.redirect('/logged-in');
});

router.post("/login", passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/logged-in' }), (req, res) => {
  res.redirect('/logged-in');
});

module.exports = router;