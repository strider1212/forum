var button = document.getElementsByTagName('button')[0];

var clickFunction = function () {
  var posts = document.getElementsByClassName('posts')[0];
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  posts.innerHTML = `Posted by ${name} - ${message}`;
};

button.addEventListener('click', clickFunction);