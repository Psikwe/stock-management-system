const express = require("express");

const router = express.Router();

router.get("/products", (req, res) => {
  res.json({ mssg: "get all products" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "get all products" });
});

router.get("/products/:id", (req, res) => {
  res.json({ mssg: "get all products" });
});
router.get("/", (req, res) => {
  res.json({ mssg: "get all products" });
});

module.exports = router;
