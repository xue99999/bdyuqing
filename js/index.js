$(function(){
	$('.chuan').toggleClass("active");
	$('.floor').fullpage({
		navigation:true,
		loopBottom:true,
		navigationTooltips: ['登录百度舆情', '登录百度舆情','登录百度舆情', '登录百度舆情'],
		afterLoad:function(){
			$('.chuan').toggleClass("active");
			$(".section").eq(1).toggleClass("act");
			$(".section").eq(2).toggleClass("act");
			$(".section").eq(3).toggleClass("act");
		}

	});


	var yzm=$('.yzmBtn');
	yzm.click(function(){
		// var src=$('.yzm-img').attr("src");
		var shu=Math.ceil(Math.random()*10);
		$('.yzm-img').attr("src","imgs/yzm-"+shu+".jpg");
	})

	$('.anniu').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
})