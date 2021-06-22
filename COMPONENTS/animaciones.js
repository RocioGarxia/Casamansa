
/* $(document).ready(function(){
$("#EnviarFormulario").click (function(){
    $("#exampleModal").fadeOut(5000)
    });
});


$(document).ready(function(){
    $('.img').animate({
        "padding": "5rem",
      "margin-left": "5rem",
        }, 3000, function () {
            $('.img').animate({
                "width": "5rem"},3000);
        });  
    }); 
        */

 $(document).ready(function(){
        $("#arte").click(function(){
            $(".mainTitle").animate({
                fontSize:"15 rem",
                letterSpacing:"8px",}, 3000, function () {
                    $(".mainTitle").fadeOut (5000);
            
            });
        });
    });