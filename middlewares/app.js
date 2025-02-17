const express = require("express");
const { appRouter } = require("../routes/app.route");
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

app.use("/", appRouter);

app.use((req, res, next) => {
  res.status(404).render("notFound", { title: "Page Not Found" });
});

module.exports = app;
