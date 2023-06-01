const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

//get all products
router.get("/", getProducts);

//post a new product
router.post("/", createProduct);

//get a single product
router.get("/:id", getProduct);

//delete a single product
router.delete("/:id", deleteProduct);

//update a single product
router.patch("/:id", updateProduct);

module.exports = router;
