require("dotenv").config();
const express = require("express");
const productsRoutes = require("./routes/products");

const app = express();

app.use((req, res, next) => {
  console.log("path ", req.path, "method ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ mssg: "stock management system" });
});

app.use("/api/products", productsRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log("listening on port", process.env.PORT);
});
