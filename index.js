const express = require("express");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Dragon is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const getNews = news.find((newsId) => newsId._id === id);
  res.send(getNews);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/categories", (req, res) => {});
