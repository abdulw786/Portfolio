let projects = require("../models/HW&Projects.js");

module.exports = function (app) {

  app.get("/portfolio", function (req, res) {
    res.render("portfolio", {projects});
  });

  // If no matching route is found default to home
  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  app.get("*", function (req, res) {
    res.render("index");
  });
};
