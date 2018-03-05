
$(function(){
    var pageW, pageH, $section;

	pageW = $(window).width();
	pageH = $(window).height();
	$section = $("header");
	wSize(pageW, pageH, $section);
	tab();
    workTab();
	$(".indicator li a, .btn01_yellow, .footerIn a, .scroll").on("click", function(e){
		 e.preventDefault();
		 var tg = $(this).attr("href");
		 var tg2 = $(tg).offset().top;
		 $("html,body").stop().animate({"scrollTop":tg2})
	});

    var $brAlram = $(".browseAlram");
    var alramCount = 5000;
    var $alramNum = $(".alramNum");
    var $alramClose = $(".alramClose");
    var setAlram;

    if (pageW > 843){
        $brAlram.show();
        browseAlram();

        function browseAlram () {
            setAlram = setTimeout(alramHide, alramCount);

        }
        $alramClose.on("click", function(){
            $brAlram.animate({marginTop: "-100px"}, 500);
            clearInterval(setAlram);
        });
        function alramHide() {
            $brAlram.animate({marginTop: "-100px"}, 500);
        }
        var count = 5;
        $alramNum.text(count);
        var countDown = function(){
            count--;
            $alramNum.text(count);

        };
        setInterval(countDown, 1000);

    } else {
        $brAlram.hide();
    }

    var $conLayout = $(".conLayout");
    var conHeight = $conLayout.outerHeight();
    $conLayout.parent("section").css("min-height", conHeight);

});

$(window).on("resize",function(){
	pageW = $(this).width();
	pageH = $(this).height();
	wSize(pageW, pageH, $("header"));


	$("section").each(function(i){
        var $conLayout = $("section").eq(i).find(".conLayout");
        var conHeight = $conLayout.outerHeight();
        $conLayout.parent("section").css("min-height", conHeight);
    });



});

$(window).on("scroll", function() {
    var pageH = $(this).height();
    var scroll = $(this).scrollTop();
    var $indiLi = $(".indicator li");
    $indiLi.find("a").removeClass("on");
    for (var i = 0; i <= 5; i++) {
        if (scroll >= pageH * i -300 && scroll < pageH * (i + 1) -300) {
            $indiLi.eq(i).children("a").addClass("on");
        }
    }
});



function wSize(pw, ph, se){
	var $ham = $(".hamBox");
	var $gnb = $(".gnb");

	if (pw > 843){
		se.height(ph);
        $ham.hide();
	} else {
		se.css({"height" : "auto"});
		$(".mainLayout").css("height" , ph);
		$ham.show();
		$ham.on("click", function(){
			$gnb.addClass("active");
		});
        $(".gnbUL li").on("click", function(){
            $gnb.removeClass("active");
        });
        $(".gnbClose").on("click", function(){
            $gnb.removeClass("active");
        });

	}
}



function tab() {
	var $tabConUl = $(".tabConUl");
	$(".tabUl > li").on("click", function(){
		var mainTD = 0;
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		var tabNum = $(this).index();
		$tabConUl.children("li").css({"margin-top":30,"opacity":0});
		$tabConUl.children("li").css({"margin-top":30,"opacity":0});
		$tabConUl.stop();
		$tabConUl.eq(tabNum).css("display", "inline-block");
		$tabConUl.eq(tabNum).siblings().hide();
		$tabConUl.eq(tabNum).children("li").each(function(){
		$(this).stop().delay(mainTD).animate({"margin":"0","opacity":1},400);
		mainTD += 200; 
		});
		$tabConUl.eq(tabNum).children("li").animate({"margin":"0","opacity":1},400);


        var $conLayout = $(".practice > .conLayout");
        var conHeight = $conLayout.outerHeight();
        $conLayout.parent("section").css("min-height", conHeight);

	});
}

function workTab() {
	var $workLi = $(".workTabUl").find("li");
    var liNum;
    $workLi.on("click", function(){
        $(this).siblings().find("a").removeClass("on");
    	$(this).find("a").addClass("on");
    	liNum = $(this).index();
        $(this).parent().next().find("article").removeClass("on");
        $(this).parent().next().find("article").eq(liNum).addClass("on");
	})
}


