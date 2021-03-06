const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
  productController.getProducts((products, err) => {
    if (err)
      res.json({
        success: false,
        msg: "Failed to show products"
      });
    else res.render("index", { products });
  });
});

router.post("/delete/:id", (req, res) => {
<<<<<<< HEAD
  console.log("Hello from the server!");
=======
>>>>>>> 0673d86a63dffafb6a75bb49be1319a67d976b49
  if (!!req.params.id) {
    productController.deleteProduct(req.params.id, err => {
      if (!!err)
        res.json({
          success: false,
          msg: "Failed to delete product"
        });
      else res.redirect("/");
    });
  }
});

router.post("/create", (req, res) => {
  console.log("Hello from routes!");
  console.log(req.body);
  if (!!req.body) {
    productController.createProduct(req.body, err => {
      if (err) {
        throw err;
      } else res.redirect("/");
    });
  }
});

router.post("/create", (req, res) => {
  console.log('Hello from routes!');
  console.log(req.body);
  if (!!req.body) {
    productController.createProduct(req.body, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/');
    });
  }
});

router.get("/:id");

module.exports = router;
