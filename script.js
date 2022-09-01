$(function() {
  $("section").find("h1").on("click", function(){
    if ($(this).next().css("display") === "none") {
      //$(this).next().show();
      $(this).next().stop().slideDown();
    } else {
      //$(this).next().hide();
      $(this).next().stop().slideUp();
    }
  });
});