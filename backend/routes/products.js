const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const requireAuth = require("../middleware/requireAuth");

router.use(cors());

// router.use(requireAuth);

//get all products
router.get("/all", getProducts);

//post a new product
router.post("/", createProduct);

//get a single product
router.get("/:id", getProduct);

//delete a single product
router.delete("/:id", deleteProduct);

//update a single product
router.patch("/:id", updateProduct);

module.exports = router;
