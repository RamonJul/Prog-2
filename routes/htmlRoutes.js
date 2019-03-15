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
    db.Comments.findAll({
      where: {
        postId: dbComment.dataValues.id
      }
    }).then(function(results) {
      var filteredArray = results.map(function(result) {
        return result.dataValues;
      });
      filteredArray.sort(function(a, b) {
        return (a.parentId || 0) - (b.parentId || 0);
      });
      filteredArray.forEach(function(comment) {
        comment.children = [];
      });
      for (var i = filteredArray.length - 1; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
          if (filteredArray[j].id === filteredArray[i].parentId) {
            filteredArray[j].children.push(filteredArray[i]);
            filteredArray.splice(i, 1);
            break;
          }
        }
      }
      // console.log(commentObj);
      res.render("post", { post: filteredArray });
    });
  });
});
// Render 404 page for any unmatched routes
router.get("*", function(req, res) {
  res.render("404");
});

module.exports = router;
