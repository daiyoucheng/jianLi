
$(document).ready(function () {

	/* 定位到当前类 */
	function index(num){
		$('.menu li').eq(num).addClass('active').siblings().removeClass('active');
	}
	$('.menu li').click(function(){
		$('.menu li').removeClass("active");
		$(this).addClass("active");
		$('.navbar-toggle').addClass("collapsed");
		$('.navbar-toggle').attr("aria-expanded",false)

	})

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        onSlideChangeStart: function(swiper){
      		index(swiper.activeIndex);
      	}
	});

    var aa= document.querySelectorAll('nav .nav a');
	for(var i=0;i<aa.length;i++){
		(function(i){
			aa[i].onclick = function(){
				swiper.slideTo(i, 1000, false);//切换到第一个slide，速度为1秒
				$(".navbar-header button").click();
			}
		})(i);
	}

	/* 打字效果*/

	$('.Fpage h3').backspace(10, // 回删的字符数量
  {
    t: 200, // 按键的间隔时间
  })
	$('.Fpage h3').typetype('年轻，努力。',{e: 0.02,t: 200});
})