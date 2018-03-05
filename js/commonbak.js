
var pageW;
var backWid;
var pageH;
var list;
var listIn;

$(function(){
	list = $(".mainUl > li");
	listIn = $(".mainUl > li > div");
	pageW = $(window).width();
	backWid = pageW*0.4	
	pageH = $(window).height();
	$("section").height(pageH);
	mouseEvent(list, listIn, pageW, backWid);
});


$(window).on('resize',function(){
	pageW = $(this).width();
	pageH = $(window).height();
	backWid = pageW*0.4
	$("section").height(pageH);
	mouseEvent(list, listIn, pageW, backWid);
});


function mouseEvent(list1, list2, pw, bw) {
	if (pw > 685) // WEB
	{		
		list2.css("width", bw);
		list1.on("mouseenter", function(){
			list2.css("width" ,bw);			
			$(this).stop().animate({"width":"40%"}, 800).siblings().stop().animate({"width":"12%"}, 800);
			$(".txtOn_yellow").css({"color":"#fff", "color":"rgba(255,255,255,0.7)"});
			$(this).find(".txtOn_yellow").css("color","#e69412");
			$(this).find(".mCon").fadeIn("slow").css("padding-top", 20);
			$(this).find(".mTit").css("margin-top", 0);
		}).on("mouseleave", function(){
			list1.stop().animate({"width":"16.6667%"});
			$(this).find(".txtOn_yellow").css({"color":"#fff", "color":"rgba(255,255,255,0.7)"});
			$(this).find(".mCon").fadeOut("slow").css("padding-top", 50);
			$(this).find(".mTit").css("margin-top", 30);
		});
	} else { // MOBILE	
		list1.css("width","100%").off("mouseenter").off("mouseleave");
		list2.css("width", "100%");
	}
}