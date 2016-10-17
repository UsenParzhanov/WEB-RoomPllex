jQuery(function($) {
  
    
    
    function centerin(){
        var zWidth = $(document).innerWidth();
//        var hey = zWidth - 310;
        var xer = zWidth/310;
        var xer = Math.floor(xer);
        var hui = zWidth - (xer*310);
        

        $(".savedCatalogs").css({paddingLeft: hui/2});
    }
    setInterval(centerin,500);
    
    $(".savedCatalogs").on("click", function(){
        $('body').animate({scrollTop: 550}, 500);
        $(".savedCatalogsOpen").slideDown(300);
		$(this).slideUp(500);
    })
    
    $(".countOfMarks").on("click",function(){
		$(this).css({color:"red"});
		$(".countOfSuggestMarks").css({color:"white"});
        $(".inside").slideUp(200);
        $(".suggest").slideDown(200);

    })
    $(".countOfSuggestMarks").on("click",function(){
		$(this).css({color:"red"});
		$(".countOfMarks").css({color:"white"});
        $(".suggest").slideUp(200);
        $(".inside").slideDown(200);

    })
	
	
	$(".countOfCreatedCatalogs").on("click",function(){
		$(".savedCatalogsOpen").slideUp(200);
		$(".savedCatalogs").slideDown(200);
		$(this).css({color:"red"});
		$(".countOfCreatedMarks").css({color:"white"});
        $(".marks").slideUp(500);
        $(".catalogs").slideDown(500);
    })
	
	$(".countOfCreatedMarks").on("click",function(){
		$(this).css({color:"red"});
		$(".countOfCreatedCatalogs").css({color:"white"});
        $(".catalogs").slideUp(500);
        $(".marks").slideDown(500);
    })
})

countOfCreatedCatalogs