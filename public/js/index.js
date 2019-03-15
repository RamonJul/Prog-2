function getcall(query) {
  $.ajax(query, {
    type: "GET"
  }).then(function() {
    //do something
  });
}

function postcall(query, obj) {
  $.ajax(query, {
    type: "POST",
    data: obj
  }).then(function() {
    //do someting
  });
}

function get() {
  var task = this.getAttribute("data-task");
  var query = "";
  switch (task) {
    case "authors":
      var id = this.getAttribute("data-id");
      query = "/api/authors/" + id;
      getcall(query);
      break;

    case "locations":
      //find all of the posts under a category
      var category = this.getAttribute("data-category");
      query = "/api/categories/" + category;
      getcall(query);
      break;

    case "post":
      //find all the comments under a post
      var postid = this.getAttribute("data-post-id");
      query = "/api/post/" + postid;
      getcall(query);
      break;
  }
}

function post() {
  var task = this.getAttribute("data-task");
  var query = "";
  var obj = {
    post: document.getElementById("text").value,
    author: document.getElementById("author").value,
    location: ""
  };
  switch (task) {
    case "comment":
      query = "";
      obj[ifComment] = true;
      obj[postId] = "";
      obj[parentId] = "";
      postcall(query, obj);
      break;
    case "post":
      query = "";
      obj[ifComment] = false;
      postcall(query, obj);
      break;
    case "user":
      query = "";
      var author = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        profilePic: document.getElementById("Pic").value,
        password: document.getElementById("password").value,
        userName: document.getElementById("userName").value
      };
      postcall(query, author);
      break;
  }
}
var getButton = document.getElementsByClassName("btn");
for (var i = 0; i < getButton.length; i++) {
  getButton[i].addEventListener("click", get);
}

var postButton = document.getElementsByClassName("btn_2");

for (var j = 0; j < posttButton.length; j++) {
  postButton[j].addEventListener("click", post);
}
