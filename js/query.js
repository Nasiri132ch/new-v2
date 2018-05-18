$(window).scroll(function(){
    var scroll_top=$(this).scrollTop();

    if (scroll_top>200){
        $("#to_top").animate({right:"10px"},50);
		$("nav").addClass("sticky1");
    }
    else{
        $("#to_top").animate({right:"-100px"},50);
		$("nav").removeClass("sticky1");
    }
});


$(document).ready(function(){
    $("#to_top").click(function(){
        $("html").animate({scrollTop:0},1000);
    });
	

 
});