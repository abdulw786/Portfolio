let projects = require("../models/HW&Projects.js");

module.exports = function (app) {
    // app.get("/", function (req, res) {
    //     res.render("index");
    //   });

  app.get("/portfolio", function (req, res) {
    res.render("portfolio", {projects});
  });
  app.get("/about", function (req, res) {
    res.render("about");
  });

  app.get("/contact", function (req, res) {
      res.render("contact");
    });
    
    // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.render("index");
  });
};
