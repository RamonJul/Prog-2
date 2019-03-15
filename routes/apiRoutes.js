var db = require("../models");

var express = require("express");
var router = express.Router();

// Get all authors
router.get("/authors", function(req, res) {
  db.Authors.findAll({}).then(function(dbAuthors) {
    res.json(dbAuthors);
  });
});
// Create a new author
router.post("/api/authors", function(req) {
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
router.post("/api/comment", function(req) {
  var newPost = {
    post: req.body.text,
    author: req.body.author,
    location: req.body.location
  };

  if (req.body.ifComment) {
    newPost.ifComment = req.body.ifComment;
  }

  if (req.body.postId) {
    newPost.postId = req.body.postId;
  }

  if (req.body.parentId) {
    newPost.parentId = req.body.parentId;
  }

  db.Comments.create(newPost).then(function() {
    location.reload();
  });
});

// Delete a comment
router.delete("/api/comments/:id", function(req, res) {
  db.Comments.destroy({ where: { id: req.params.id } }).then(function(
    dbComments
  ) {
    res.json(dbComments);
  });
});

// Login to author account
router.get("/login", function(req) {
  var email = req.body.email;
  var password = req.body.password;
  db.Authors.findOne({ where: { email: email } }).then(function(err, res) {
    if (err) {
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

module.exports = router;
