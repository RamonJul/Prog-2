var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/authors", function(req, res) {
    db.Authors.findAll({}).then(function(dbAuthors) {
      res.json(dbAuthors);
    });
  });

  app.get("/api/categories", function(req, res) {
    db.categories.findAll({}).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  app.get("/api/comments", function(req, res) {
    db.Comments.findAll({}).then(function(dbComments) {
      res.json(dbComments);
    });
  });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
