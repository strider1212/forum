var button = document.getElementsByTagName('button')[0];

var clickFunction = function () {
  var posts = document.getElementsByClassName('posts')[0];
  var name = document.getElementById('name').value;

  posts.innerHTML = `Posted by ${name}`;
};

button.addEventListener('click', clickFunction);