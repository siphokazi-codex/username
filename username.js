
var username = document.querySelector('.username');
var lookUp = document.querySelector('.lookUp');
var displayArea = document.querySelector('.displayArea');

//alert($);

function checkProfile () {
  if (username.value !== "") {
  var display = username.value;
  displayArea.innerHTML = display;
}
}

lookUp.addEventListener('click', checkProfile);

var url = "https://api.github.com/users/" + username.value;

//make the Ajax call
$.get(url)
.then(function(result) {
  displayArea.innerHTML = result;
})
