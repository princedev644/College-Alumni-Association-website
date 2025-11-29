$(document).ready(function($) {
	var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
});

  $(document).ready(function(){
       $(window).scroll(function () {
           if ($(window).scrollTop() > 300) {
               $(".navbar-area").addClass("navbaraddcolor");

           } else {
              $(".navbar-area").removeClass("navbaraddcolor");
           }
       });
    });
   var owl = $('.owl-carouselkdjfhksdfhkj');
 $('.owl-carouselkdjfhksdfhkj').owlCarousel({
    items:3,
    loop:false,
    margin:10,
     responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            items:1,
            nav:true,
            loop:false
        },      
        768:{
            items:2,
            nav:true,
            loop:false
        },
        1024:{
            items:3,
            nav:true,
            loop:false
        }

    }
});

