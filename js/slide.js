/*
  Slidemenu
*/
(function() {
  var $body = document.body,
    $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

  if (typeof $menu_trigger !== 'undefined') {
    $menu_trigger.addEventListener('click', function() {
      $body.className = ($body.className == 'menu-active') ? '' : 'menu-active';
    });
  }

}).call(this);

$(window).scroll(function(){
  $(".title").css({"opacity": 1 - $(window).scrollTop() / 400});
	$(".sub-hdr").css({"opacity": 1.2 - $(window).scrollTop() / 400});
	$(".srvc-con").css({"opacity": 1.2 - $(window).scrollTop() / 1100});
  $(".header-overlay").css({"opacity": 1 - $(window).scrollTop() / 500});
});

AOS.init({
  duration: 900,
})

// $(document).ready(function(){       
//     var scroll_pos = 200;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos / 500) {
//             $(".header-overlay").css('background-color', '#f9ba8c');
//         } else {
//             $(".header-overlay").css('background-color', '#ede08c');
//         }
//     });
// });