require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.categories = [
    "Politics",
    "Business",
    "Corporate",
    "Business",
    "Health",
    "Education",
    "Science",
    "Business",
    "Foods",
    "Entertainment",
    "Travel",
    "Lifestyle",
    "Politics",
    "Business",
    "Corporate",
    "Business",
    "Health",
    "Education",
    "Science",
    "Business",
    "Foods",
  ];

  res.locals.newsInFooter = [
    "img/news-110x110-1.jpg",
    "img/news-110x110-2.jpg",
    "img/news-110x110-3.jpg",
    "img/news-110x110-4.jpg",
    "img/news-110x110-5.jpg",
    "img/news-110x110-1.jpg",
  ];

  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "BizNews - News Portal" });
});

app.get("/index", (req, res) => {
  res.render("index", { title: "BizNews - News Portal" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "BizNews - News Portal || Contact" });
});

app.get("/category", (req, res) => {
  res.render("category", { title: "BizNews - News Portal || Category" });
});

app.get("/single", (req, res) => {
  res.render("single", { title: "BizNews - News Portal || Single" });
});

app.use((req, res, next) => {
  res.status(404).render("notFound", { title: "Page Not Found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
