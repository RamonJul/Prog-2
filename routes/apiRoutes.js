var db = require("../models");

module.exports = function(app) {
  // Get all authors
  app.get("/api/authors", function(req, res) {
    db.Authors.findAll({}).then(function(dbAuthors) {
      res.json(dbAuthors);
    });
  });

  // Get an author page

  // Get all the subRed@'s for main page
  app.get("/", function(req, res) {
    db.categories.findAll({}).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  // Get all the posts for a subRed@
  app.get("/api/:category", function(req, res) {
    db.Comments.findAll({
      where: {
        location: req.params.category
      }
    }).then(function(dbComments) {
      res.json(dbComments);
    });
  });

  // Create a new author
  app.post("/api/authors", function(req, res) {
    var newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      userNAME: req.body.userName,
      profilepic: req.body.profilepic
    };
    db.Authors.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(res) {
      if (res.length > 0) {
        res.send({
          code: 204,
          success: "There is already an account with that email address."
        });
      } else {
        db.Authors.create(newUser).then(function(dbAuthor) {
          res.json(dbAuthor);
        });
      }
    });
  });

  // Post a comment

  // Delete a comment
  app.delete("/api/comments/:id", function(req, res) {
    db.Comments.destroy({ where: { id: req.params.id } }).then(function(
      dbComments
    ) {
      res.json(dbComments);
    });
  });

  // Login to author account
  app.get("/api/authors", function(req) {
    var email = req.body.email;
    var password = req.body.password;
    db.Authors.findOne({ where: { email: email } }).then(function(err, res) {
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          code: 400,
          failed: "error ocurred"
        });
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          if (results[0].password === password) {
            res.send({
              code: 200,
              success: "login sucessfull"
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match"
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Email does not exits"
          });
        }
      }
    });
  });
};
