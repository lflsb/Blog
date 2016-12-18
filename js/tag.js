var i = 0;
$(function(){
    
    var tagsingle = $(".tags_single a");
    var arr = tag_gettop(tagsingle);
    
//    for(var i = 0 ;i <arr.length ;i++){
//        alert($(arr[i]).offset().top);
//        arr[i].after($(".tags_single_content")[0]);
//    }
    
        
    var close = $(".closed");
    var closespan = $(".closed span");
    
    closespan.click(function(){
        
       var tags_single = $($("[class^='tags_single']")[0]);
        var tags_single_content = $($("[class^='tags_single_content']")[0]);
        var main_content = $(".tags_content");
        main_content.fadeOut(0);
        tags_single.removeClass("tags_single_click",0,"linear" );
        tags_single_content.removeClass("tags_single_content_click",0,"linear" );
        close.removeClass("closed_click");
        main_content.fadeIn(1000);
        
        
    });
    
    
    tagsingle.click(function(){
        var tags_single = $($("[class^='tags_single']")[0]);
        var tags_single_content = $($("[class^='tags_single_content']")[0]);
        var main_content = $(".tags_content");
        main_content.fadeOut(0);
        tags_single.addClass("tags_single_click",0,"linear" );
        tags_single_content.addClass("tags_single_content_click",0,"linear" );
        close.addClass("closed_click");
        main_content.fadeIn(1000);
        
        
    });
    
    
})

function tag_gettop(tagsingle){
    var arr = new Array();
    for(var i =0 ;i<tagsingle.length;i++){
        var currenttop = $(tagsingle[i]).offset().top;
        if(i != 0 ){
            if(currenttop != $(tagsingle[i-1]).offset().top){
                arr.push(tagsingle[i-1]);
            }
        }
    }
    return arr;
}