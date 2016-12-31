$(function () {
    //
    //    var outer = $(".index_main_displaypanelouter");
    //    var o_left = outer.offset().left;
    //    var o_top = outer.offset().top + 18;
    //    var o_height = outer.height();
    //    var o_width = outer.width();




    $('.index_main_displaypanelouter').on('mousemove', function (e) {

        var offset = $('.index_main_displaypanelouter').offset();

        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;


        var centerX = $('.index_main_displaypanelouter').outerWidth() / 2;
        var centerY = $('.index_main_displaypanelouter').outerHeight() / 2;

        var deltaX = x - centerX;
        var deltaY = y - centerY;

        var percentX = deltaX / centerX;
        var percentY = deltaY / centerY;

        var deg = 6;



        $('.index_main_displaypanel').css({
                transform: 'rotateX(' + deg * -percentY + 'deg)' +
                    ' rotateY(' + deg * percentX + 'deg)'
            })
            //      $('.index_main_displaypanel').css({
            //        -webkit-transform: 'rotateX('+deg*-percentY + 'deg)'+
            //        ' rotateY('+deg*percentX+'deg)'
            //      })
        $('.index_main_displaypanelouter').css("cursor", "pointer");

    })


    $('.index_main_displaypanelouter').on('mouseleave', function () {
        $('.index_main_displaypanel').css({
            transform: ''
        });
    })

    $(".i_active").css("text-shadow", "0px 0px 3px #fff");
    //$(".index_main_displaypanel_a").css("background-image","url(../images/index_display/1.jpg");
    //$(".index_main_displaypanel_a img").attr("src","../images/index_display/1.jpg");
    for (var i = 1; i <= $(".index_main_panelbottom i").length; i++) {

        $("#i_" + i).click(function () {
            if (!$(this).hasClass("i_active")) {
                $(".i_active").css("text-shadow", "0px 0px 0px rgba(255,255,255,0)");
                $(".i_active").removeClass("i_active");
                $(this).css("text-shadow", "0px 0px 3px #fff");
                $(this).addClass("i_active");
                $(".img_show").delay(600).toggleClass("img_hide");
                $(".img_show").delay(600).toggleClass("img_show");
                $("#img_" + $(this).attr("id").charAt(2)).delay(600).toggleClass("img_hide");
                $("#img_" + $(this).attr("id").charAt(2)).delay(600).toggleClass("img_show");

            }

        });

    }
    var val = 0;
    var len = $(".index_main_panelbottom i").length;
    setInterval(function () {
        val = $(".i_active").attr("id").charAt(2);
        if (val == len) {
            
            $(".i_active").css("text-shadow", "0px 0px 0px rgba(255,255,255,0)");
            $(".i_active").removeClass("i_active");
            $("#i_1").css("text-shadow", "0px 0px 3px #fff");
            $("#i_1").addClass("i_active");
            $(".img_show").toggleClass("img_hide");
            $(".img_show").toggleClass("img_show");
            $("#img_1").toggleClass("img_hide");
            $("#img_1").toggleClass("img_show");
            //val = 0;
            
        } else {
            
            var next = $(".img_show").next();
            var next2 = $(".i_active").next();

            $(".i_active").css("text-shadow", "0px 0px 0px rgba(255,255,255,0)");
            $(".i_active").removeClass("i_active");
            next2.css("text-shadow", "0px 0px 3px #fff");
            next2.addClass("i_active");
            $(".img_show").toggleClass("img_hide");
            $(".img_show").toggleClass("img_show");
            next.toggleClass("img_hide");
            next.toggleClass("img_show");
            
            val = $(".i_active").attr("id").charAt(2);
            
        }

    }, 5000);



    //    
    //    $(document).mousemove(function (e) {
    //
    //        var x = e.pageX;
    //        var y = e.pageY;
    //        
    // 
    //        if (x >= o_left && x <= o_left + o_width && y >= o_top && y <= o_top + o_height) {
    //            
    //            var x____ = x - o_left;
    //            var x___ = x____ / o_width;
    //            var x__ = x___.toFixed(2) * 8;
    //            
    //            var x_ = -4 + x__;
    //            
    //            var y____ = y - o_top;
    //            var y___ = y____ / o_height;
    //            var y__ = y___.toFixed(2) * 6;
    //            
    //            
    //            var y_ = 3 - ((y - o_top) / o_height).toFixed(2) * 6;
    //            $(".index_main_displaypanel").css("transform", "rotateY(" + x_ + "deg) rotatex(" + y_ + "deg)");
    //            $(".index_main_displaypanel").css("-webkit-transform", "rotateY(" + x_ + "deg) rotatex(" + y_ + "deg)");
    //            $(".index_main_displaypanelouter").css("cursor", "pointer");
    //        } else {
    //            $(".index_main_displaypanel").css("transform", " rotateY(0deg) rotatex(0deg)");
    //            $(".index_main_displaypanel").css("-webkit-transform", " rotateY(0deg) rotatex(0deg)");
    //
    //        }
    //
    //    });

});
