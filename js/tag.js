$(function(){
    
    var tagsingle = $(".tags_single a");
    alert(tagsingle);
    for(var i =0 ;i<tagsingle.length;i++){
        console.info($(tagsingle[i]).text());
    }
    
})