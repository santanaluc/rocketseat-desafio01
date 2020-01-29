const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

const checkParams = (req, res, next) => {
  const { age } = req.query;

  if (!age) {
    return res.redirect("/");
  }

  return next();
};

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("form");
});

app.post("/check", checkParams, (req, res) => {
  const { age } = req.body;

  if (age >= 18) {
    return res.render("./major", { age });
  } else {
    return res.render("./minor", { age });
  }
});

app.listen(3333);
