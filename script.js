var overlay = document.getElementById("overlay");
var signUpButtons = document.querySelectorAll(".sign-up");
var signupForm = document.querySelector("#sign-up-form");
var exit = document.querySelectorAll(".exit");

// for all of the sign up buttons
signUpButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    overlay.style.display = "block";
    signupForm.style.display = "block";
    
  });
});

// exit out from the sign up form
exit.forEach(function(exit) {
  exit.addEventListener("click", function() {
    overlay.style.display = "none";
    signupForm.style.display = "none";
    
  });
});