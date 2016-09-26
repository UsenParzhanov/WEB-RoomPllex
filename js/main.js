jQuery(function($) {
  
    

    $(".oneMark").click(function(){ 
        $(".popup").fadeIn(500);
        
        $(document).mouseup(function (e){ 
		var div = $(".popupCenter"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			$(".popup").fadeOut(500); 
		}
	});
    })
    
    $(".fullScreen").click(function(){
       $(".map").toggleClass("mapFs");
       $(".FSmark").fadeIn(300);    
       $(this).css("left","320px");    
    });
    
    $(".catImg").each(function(){
       var path = $(this).data("path");
       $(this).css({backgroundImage: "url(../images/"+path+".jpg)"});
    });
    
})