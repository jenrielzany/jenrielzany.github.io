$(function() {
  AOS.init({
	  duration: 1200,
	})
});

$(window).scroll(function(){
	$(".content-wrapper").css("opacity", 1 - $(window).scrollTop() / 500);
});

$(document).ready(function (){
    $(".burger").click(function (){
    	$(".burger").toggleClass('active');
    	$(".intro, .main-menu, .section-wrapper").toggleClass('open-menu');
    });

    $(".main-menu ul li").click(function (){
        $(this).siblings().removeClass('open-section');
        $(this).addClass('open-section');
        var index = $(this).data("section");

        var flag = false;
        $(".section-wrapper").each(function() {
            $(this).removeClass('show');

            if (flag) {
                $(this).toggleClass('hide');
            } else {
                $(this).addClass('hide');
            }

            if ($(this).data("index") == index) {
                $(this).toggleClass('hide');
                $(this).addClass('show');
                flag = true;
            }
        });
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        center: true,
        dots: false,
        autoWidth:true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            }
        }
    })

});