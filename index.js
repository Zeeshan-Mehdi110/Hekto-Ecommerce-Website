require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//controllers
const userController = require("./controllers/users");
const categoryController = require("./controllers/category");
const productController = require("./controllers/products");
const reviewController = require("./controllers/reviews");
const storeController = require("./controllers/store");
const brandsController = require("./controllers/brands");

//app.use
app.use(express.json());
app.use(cors());
app.use("/api/users", userController);
app.use("/api/categories", categoryController);
app.use("/api/products", productController);
app.use("/api/reviews", reviewController);
app.use("/api/store", storeController);
app.use("/api/brands", brandsController);

// mongodb connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.all("*", (req, res) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  if (err) res.status(400).json({ error: err.message });
  else next();
});

app.listen(5000, function () {
  console.log("server is listening at 5000");
});
