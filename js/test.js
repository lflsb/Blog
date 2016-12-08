$(function(){
    $("p").show(4000,function(){
        $(this).text("Animation Done...");
    });
    var pinlun_span = $(".b-blog-ll-smbottom span");
    var pinlun_i = $(".b-blog-ll-smbottom i");
    pinlun_span.click(function(){
        togglePinlun(this);
    });
    pinlun_i.click(function(){
        togglePinlun(this);
    });
    
    function togglePinlun(e){
        var i_p = $(e).parent();
        var i_parent = i_p.parent().parent();
        var sb = i_parent.children(".b-blog-ll-sb");
        var i = i_p.children("i");
        if(i.attr("class")=="icon iconfont icon-xiayibu"){
            sb.slideDown(300);
            i.removeClass("icon-xiayibu");
            i.addClass("icon-xiala");
        }else{
            sb.slideUp(300);
            i.removeClass("icon-xiala");
            i.addClass("icon-xiayibu");
        }
        
    }
    
});