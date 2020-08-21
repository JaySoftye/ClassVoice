$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  $("a.navbar-item").click(function() {
    var id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(id).offset().top
    }, 500);
  });

  $("button.action").click(function() {
    var nextSection = $(this).attr("action");
    $("html, body").animate({
      scrollTop: $(nextSection).offset().top
    }, 500);
  });

  $(".howToBuy").click(function() {
    $(".modal.how-to-buy").toggleClass("is-active is-clipped");
  });

  $(".contactUs").click(function() {
    $(".modal.how-to-buy").removeClass("is-active is-clipped");
    $(".modal.contact-us").addClass("is-active is-clipped");
  });

  $("button.modal-close").click(function() {
    $(".modal").removeClass("is-active is-clipped");
  });

});

// OFFCANVAS MENU FUNCTION - <ASIDE> ELEMENT of 360px
function openTeacherApp() {
  document.getElementById("teacherApp").style.width = "360px";
  document.getElementById("studentApp").style.width = "0";
  document.getElementById("main").style.marginLeft = "360px";
}
function openStudentApp() {
  document.getElementById("teacherApp").style.width = "0";
  document.getElementById("studentApp").style.width = "360px";
  document.getElementById("main").style.marginLeft = "360px";
}
function closeApp() {
  document.getElementById("teacherApp").style.width = "0";
  document.getElementById("studentApp").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
