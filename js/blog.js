$(function(){
    
    var buttonposition = $( ".icon-xitongcaidan1" ).position();
    var buttonleft = buttonposition.left-255;
    var buttontop = buttonposition.top - 5;
    $( ".blog_right" ).css("top" , buttontop+"px").css("left", buttonleft + "px");
    
    $( ".menu" ).click(function() {
    //    if($(this).hasClass("opened")){
    //        $( ".blog_right" ).hide( "drop", { direction: "right" }, "slow" );
    //        $(this).removeClass("opened");
    //    }else{
    //        $( ".blog_right" ).show( "drop", "slow" );
    //        $(this).addClass("opened");
    //    }
        if($(this).hasClass("icon-xitongcaidan1")){
            $(this).toggleClass("icon-xitongcaidan1","1000");
            $(this).toggleClass("icon-guanbi","1000");
            
        }else if($(this).hasClass("icon-guanbi")){
            $(this).toggleClass("icon-guanbi","1000");
            $(this).toggleClass("icon-xitongcaidan1","1000");
        }
        var buttonposition = $(this).position();
        var buttonleft = buttonposition.left-255;
        var buttontop = buttonposition.top - 5;
        $( ".blog_right" ).css("top" , buttontop+"px").css("left", buttonleft + "px");
        $( ".blog_right" ).toggle("fade");
        
    });
    
});