$(document).ready(function(){
    $("#hamburger").click(function(){
      $("#menu").css({
        "display":"flex",
        "flex-direction": "column",
        "color":"black",
        "height":"100%"
      });
      $(".menu-item").css({
        "display":"flex",
        "flex-direction": "column",
        "padding":"10px"
      });
      $("#hamburger").css({
        "width":"20px",
        "height": "20px",
        "display":"none"
        
      });
      $("#ham_click").css({
        "width":"20px",
        "height": "20px"
        
      });
    });
  });
