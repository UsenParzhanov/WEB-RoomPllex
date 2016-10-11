jQuery(function($) {
  
    
    
    

    
    $(".catImg").each(function(){
       var path = $(this).data("path");
       $(this).css({backgroundImage: "url(../images/"+path+".jpg)"});
    });
    
    
    $(".underMapsButton a").on("click", function(e){
        e.preventDefault();
        $(".underFunction").slideUp(200);
        var etot = $(this).data("function");
        $("."+etot).slideDown(200);
    })
    
    $(".cancelButton").on("click",function(e){
        e.preventDefault();
        $(".underFunction").slideUp(200);
    })
    
    $(".oneCategory,.usen").on("click",function(){
        $(".underFunction").slideUp(0);
       
        $('body').animate({scrollTop: 550}, 500);
        $(".marks,.catalogOpen,.oneMark").slideDown(100);   
    })
    
    $(".xlose").on("click",function(){
        $(".marks, .catalogFolden").slideUp(200);
    })
    
    $(".hide").on("click",function(){
        $(".catalogOpen, .oneMark, .catalogFolden").slideToggle(500);
    })
    
    
    $(".oneMark").on("click",function(){
        
        
        $(".popup, .popupMark").fadeIn(500);
        $("body").css({overflowY:"hidden"})
        $(document).mouseup(function (e){ 
		var div = $(".popupCenter"); 
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			$(".popup,.popupMark").fadeOut(500); 
            $("body").css({overflowY:"scroll"})
		}
	    });
        
        
    })
    
    
    function centering(){
        var zWidth = $(document).innerWidth();
        var hey = zWidth - 612.5;
        var xer = hey/305;
        var xer = Math.floor(xer);
        var hui = hey - (xer*305);
        $(".categories").css({paddingLeft: hui/2});
    }
    setInterval(centering);
    
    
    function centerin(){
        var zWidth = $(document).innerWidth();
        var hey = zWidth - 690 + 10;
        var xer = hey/230;
        var xer = Math.floor(xer);
        var hui = hey - (xer*230);
        

        $(".marks").css({paddingLeft: hui/2});
    }
    setInterval(centerin,500);

})