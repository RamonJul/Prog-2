window.onload = function() {
  function getcall(query) {
    window.location.replace(query);
  }

  function postcall(query, obj) {
    $.ajax(query, {
      type: "POST",
      data: obj
    });
  }

  var get = function() {
    var task = this.getAttribute("data-task");
    var query = "";
    console.log("Clicked!");
    switch (task) {
      case "authors":
        var id = this.getAttribute("data-id");
        query = "/authors/" + id;
        console.log(query);
        getcall(query);
        break;

      case "locations":
        //find all of the posts under a category
        var category = this.getAttribute("data-category");
        query = "/category/" + category;
        console.log(query);
        getcall(query);
        break;

      case "post":
        //find all the comments under a post
        var postid = this.getAttribute("data-post-id");
        query = "/post/" + postid;
        console.log(query);
        getcall(query);
        break;

      case "login":
        var accountInfo = {
          email: document.getElementById("logemail").value,
          password: document.getElementById("logpassword").value
        };
        query = "/login";
        getcall(query, accountInfo);
        console.log(query);
        break;
    }
  };

  var post = function() {
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
  };
  function buttons() {
    var getButton = document.getElementsByClassName("get");
    // console.log(getButton[1]);
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
  }
  buttons();
};
