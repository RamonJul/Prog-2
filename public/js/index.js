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
      query = "";
      getcall(query);
      break;

    case "locations":
      query = "";
      getcall(query);
      break;

    case "post":
      query = "";
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
  }
}
document.getElementById("btn").addEventListener("click", get);

document.getElementById("btn_2").addEventListener("click", post);
