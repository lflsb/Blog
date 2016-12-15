var i = 0;
$(function(){
    
    var tagsingle = $(".tags_single a");
    var arr = tag_gettop(tagsingle);
    
//    for(var i = 0 ;i <arr.length ;i++){
//        alert($(arr[i]).offset().top);
//        arr[i].after($(".tags_single_content")[0]);
//    }
    
    
    
    tagsingle.click(function(){
        $(this).next().slideToggle(600);
        
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