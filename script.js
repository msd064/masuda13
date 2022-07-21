$(function() {
  $("Section").find("h1").on("click",function(){
      if($(this).next().css("display")=== "none"){
          //$(this).next().show();
          $(this).next().showDown(500);
      }else{
          //$(this).next().hide();
          $(this).next().stop().slideUp();
    }
  });
});