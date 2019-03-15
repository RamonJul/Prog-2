var db = require("../models");

var express = require("express");
var router = express.Router();

// Load index page
router.get("/", function(req, res) {
  db.categories.findAll({}).then(function(dbCategories) {
    res.render("index", dbCategories);
  });
});

// Load author page by id
router.get("/authors/:id", function(req, res) {
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

// Load all the posts for a subRed@
router.get("/category/:category", function(req, res) {
  db.Comments.findAll({
    where: {
      location: req.params.category
    }
  }).then(function(dbComments) {
    res.render(dbComments[0].dataValues.location, dbComments);
  });
});

// Load a post and its comments
router.get("/post/:id", function(req, res) {
  db.Comments.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbComment) {
    var commentObj = {
      post: dbComment.dataValues.post,
      author: dbComment.dataValues.author,
      comments: []
    };
    db.Comments.findAll({
      where: {
        postId: dbComment.dataValues.id
      }
    }).then(function(results) {
      console.log(results);
      res.send(200);
      var tempArray = [];
      for (var i = 0; i < results.length; i++) {
        tempArray.push(results[i].dataValues);
        tempArray[i].children = [];
        if (tempArray[i].parentId === null) {
          tempArray[i].parentId = 0;
        }
      }
      tempArray.sort(function(a, b) {
        return a.parentId - b.parentId;
      });
      for (var i = tempArray.length - 1; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
          if (tempArray[j].id === tempArray[i].parentId) {
            tempArray[j].children.push(tempArray[i]);
            tempArray.splice(i, 1);
            break;
          }
        }
      }
      commentObj.comments = tempArray;
    });
  });
});
// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
