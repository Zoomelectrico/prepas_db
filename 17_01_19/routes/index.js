const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
  productController.getProducts((products, err) => {
    if (err)
      res.json({
        success: false,
        msg: 'Failed to show products'
      });
    else {
      res.render("index", {products});
    }
  });
});

router.post("/delete/:id", (req, res) => {
  if (!!req.body) {
    productController.deleteProduct((err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else {
        res.redirect('/');
      }
    });
  }
});

router.get("/:id");

module.exports = router;
