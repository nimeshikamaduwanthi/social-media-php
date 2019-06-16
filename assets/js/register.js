$(document).ready(function () {

  //on click signup, hide login and registration form
  $("#signup").click(function () {
    $("#login").slideUp("slow", function () {
      $("#register").slideDown("slow");
    });
  });

  //on click signin, hide registration and login form
  $("#signin").click(function () {
    $("#register").slideUp("slow", function () {
      $("#login").slideDown("slow");
    });
  });


});