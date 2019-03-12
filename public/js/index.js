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
  var query = "";
  switch (task) {
    case "authors":
      var id = "";
      query = "/api/authors/" + id;
      getcall(query);
      break;

    case "locations":
      //find all of the posts under a category
      var category = "";
      query = "/api/categories/" + category;
      getcall(query);
      break;

    case "post":
      //find all the comments under a post
      var postid = "";
      query = "/api/post/" + postid;
      getcall(query);
      break;
  }
}

function post() {
  var query = "";
  var obj = {
    post: "",
    author: "",
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
        name: "",
        email: "",
        email: "",
        profulepic: "",
        password: "",
        userName: ""
      };
      postcall(query, author);
      break;
  }
}
document.getElementById("btn").addEventListener("click", get);

document.getElementById("btn_2").addEventListener("click", post);
