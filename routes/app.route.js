const {
  renderIndex,
  renderContact,
  renderCategory,
  renderSingle,
} = require("../controller/render.controller");

const appRouter = require("express").Router();

appRouter.get("/", renderIndex);
appRouter.get("/index", renderIndex);
appRouter.get("/contact", renderContact);
appRouter.get("/category", renderCategory);
appRouter.get("/single", renderSingle);

module.exports = appRouter;
