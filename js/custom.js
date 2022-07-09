


var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
	selectors: {
		control: '[toamr-iccha]'
	}
});

$(document).ready(function(){

		// wow
		new WOW().init();


	$('.owl-carousel').owlCarousel({
		autoplay: true,
		autoplayTimeout: 1000,
		loop: true,
		// smartSpeed: 300,

		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}

	});

	// Our costom code

	// var x =20;
        // var y =20;

        // if( x<y ){
        //      $('.top').html("Hi! bobi");
        // }
        // else if(x==y){
        //     $('.top').html("Hi! sheikh");
        // }
        //  else {
        //      $('.top').html("I love bobi!");
        // }


        $('.top').click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 2000);
        });

       
        $(window).scroll(function(){
            var ourWindow = $(this).scrollTop();

            if(ourWindow<500) {
                $('.top').fadeOut();
            } else {
                $('.top').fadeIn();
            }

            // Menu Fixed
            if(ourWindow>100){
               $('body').addClass('fixed');
            } else {
            	 $('body').removeClass('fixed');
            }

        });

        	$('.navbar-nav li').click(function(){
        		$(this).addClass('active').siblings().removeClass('active');
        	});

        	$('.navbar-nav a[href^="hash"]').click(function(e){
        		e.preventDefault();
        	});

        	var target = this.hash;

        	$('html, body').animate({
        		scrollTop: $(target).offset().top -75
        	}, 500);

	});