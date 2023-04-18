const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/categories", (req, res) => {});
