function getcall(query, obj) {
  $.ajax(query, {
    type: "GET",
    data: obj
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
      query = "/authors/" + id;
      getcall(query);
      break;

    case "locations":
      //find all of the posts under a category
      var category = this.getAttribute("data-category");
      query = "/category/" + category;
      getcall(query);
      break;

    case "post":
      //find all the comments under a post
      var postid = this.getAttribute("data-post-id");
      query = "/post/" + postid;
      getcall(query);
      break;

    case "login":
      var accountInfo = {
        email: document.getElementById("logemail").value,
        password: document.getElementById("logpassword").value
      };
      query = "/login";
      getcall(query, accountInfo);
      break;
  }
}

function post() {
  var task = this.getAttribute("data-task");
  var query = "";
  var obj = {
    post: document.getElementById("text").value,
    author: document.getElementById("author").value,
    location: this.getAttribute("data-location").value
  };
  switch (task) {
    case "comment":
      query = "/api/comment";
      obj[ifComment] = true;
      obj[postId] = "";
      obj[parentId] = "";
      postcall(query, obj);
      break;
    case "post":
      query = "/api/comment";
      obj[title] = document.getElementById("title").value;
      obj[ifComment] = false;
      postcall(query, obj);
      break;
    case "user":
      query = "/api/authors";
      var author = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        profilePic: document.getElementById("pic").value,
        password: document.getElementById("password").value,
        userName: document.getElementById("userName").value
      };
      postcall(query, author);
      break;
  }
}
var getButton = document.getElementsByClassName("get");
if (getButton !== 0) {
  for (var i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener("click", get);
  }
}
var postButton = document.getElementsByClassName("post");
if (postButton.length !== 0) {
  for (var j = 0; j < postButton.length; j++) {
    postButton[j].addEventListener("click", post);
  }
}
