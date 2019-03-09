var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Comments.findAll({
      where: {
        ifComment: false
      }
    }).then(function(dbComments) {
      res.render("index", {
        msg: "Welcome to Red@!",
        comments: dbComments
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/authors/:id", function(req, res) {
    db.Authors.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.render("author", {
        author: dbAuthor
      });
      console.log(dbAuthor.dataValues);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
