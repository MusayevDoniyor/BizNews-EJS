const express = require("express");
const appRouter = require("../routes/app.route");
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
  res.locals.popularNewsInFooter = [
    {
      title: "Tech Conference 2025",
      date: "March 15, 2025",
      description:
        "The annual tech conference will bring together industry leaders to discuss the latest trends in AI, web development, and cybersecurity.",
    },
    {
      title: "Startup Pitch Event",
      date: "April 10, 2025",
      description:
        "Innovative startups will have the opportunity to present their ideas to investors and mentors in this exclusive pitch event.",
    },
    {
      title: "Development Bootcamp",
      date: "May 5, 2025",
      description:
        "A hands-on bootcamp covering modern web development technologies like React, Next.js, and Node.js for aspiring developers.",
    },
  ];
  res.locals.footerSocialIconscClass = [
    "fa-twitter",
    "fa-facebook-f",
    "fa-linkedin-in",
    "fa-instagram",
    "fa-youtube",
  ];
  res.locals.navBarIcons = [
    ...res.locals.footerSocialIconscClass,
    "fa-google-plus-g",
  ];
  res.locals.socialFollows = [
    {
      icon: "fa-facebook-f",
      color: "#39569e",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Fans",
    },
    {
      icon: "fa-twitter",
      color: "#52aaf4",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Followers",
    },
    {
      icon: "fa-linkedin-in",
      color: "#0185ae",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Connects",
    },
    {
      icon: "fa-instagram",
      color: "#c8359d",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Followers",
    },
    {
      icon: "fa-youtube",
      color: "#dc472e",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Subscribers",
    },
    {
      icon: "fa-vimeo-v",
      color: "#055570",
      darkColor: "rgba(0, 0, 0, 0.2)",
      info: "12,345 Followers",
    },
  ];

  res.locals.trendingNews = [
    {
      img: "img/news-110x110-1.jpg",
      title: "Business",
      date: "Jan 01, 2045",
      description: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-110x110-2.jpg",
      title: "Business",
      date: "Jan 01, 2045",
      description: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-110x110-3.jpg",
      title: "Business",
      date: "Jan 01, 2045",
      description: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-110x110-4.jpg",
      title: "Business",
      date: "Jan 01, 2045",
      description: "Lorem ipsum dolor sit amet elit...",
    },
    {
      img: "img/news-110x110-5.jpg",
      title: "Business",
      date: "Jan 01, 2045",
      description: "Lorem ipsum dolor sit amet elit...",
    },
  ];

  next();
});

app.use("/", appRouter);

app.use((req, res) => {
  res.status(404).render("layout", {
    title: "Page Not Found",
    body: "not-found",
  });
});

// const renderIndex = (req, res) => {
//   res.render("layout", {
//     title: "BizNews - News Portal",
//     body: "index",
//   });
// };

// const renderContact = (req, res) => {
//   res.render("layout", {
//     title: "BizNews - News Portal || Contact",
//     body: "contact",
//   });
// };

// const renderCategory = (req, res) => {
//   res.render("layout", {
//     title: "BizNews - News Portal || Category",
//     body: "category",
//   });
// };

// const renderSingle = (req, res) => {
//   res.render("layout", {
//     title: "BizNews - News Portal || Single",
//     body: "single",
//   });
// };

module.exports = app;
// module.exports.renderIndex = renderIndex;
// module.exports.renderContact = renderContact;
// module.exports.renderCategory = renderCategory;
// module.exports.renderSingle = renderSingle;
