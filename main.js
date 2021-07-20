var button = document.getElementsByTagName('button')[0];

var clickFunction = function () {
  console.log('click, click, boom!');
};

button.addEventListener('click', clickFunction);