$.fn.extend({
    animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    	$(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
      	});
    	}
	});


$(window).load(function () {
    //Section1 Animations
    var in_view = new Waypoint.Inview({element: $('.section1'),
        enter: function() {
            $('.section1').find('h1').animateCss('flipInX');
            $('.section1').find('button').animateCss('zoomInUp');
        },
    });
    //Section2 Animations
    var in_view = new Waypoint.Inview({element: $('.section2'),
        enter: function() {
            $('.section2').find('h1').animateCss('fadeInDown');
            $('.section2').find('.lines').animateCss('fadeInDown');
            $('.section2').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section2').find('.block1').animateCss('fadeInUp');
            $('.section2').find('.block2').animateCss('fadeInUp');
            $('.section2').find('.block3').animateCss('fadeInUp');
            $('.section2').find('.block4').animateCss('fadeInUp');
        },
    });
    //Section3 Animations
    var in_view = new Waypoint.Inview({element: $('.section3'),
        enter: function() {
            $('.section3').find('h1').animateCss('fadeInDown');
            $('.section3').find('.lines').animateCss('fadeInDown');
            $('.section3').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section3').find('.block1').animateCss('fadeInLeft');
            $('.section3').find('.block2').animateCss('fadeInLeft');
            $('.section3').find('.block3').animateCss('fadeInLeft');
            $('.section3').find('.block4').animateCss('fadeInLeft');
        },
    });
    //Section4 Animations
    var in_view = new Waypoint.Inview({element: $('.section4'),
        enter: function() {
            $('.section4').find('h1').animateCss('fadeInDown');
            $('.section4').find('.lines').animateCss('fadeInDown');
            $('.section4').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section4').find('.block1').animateCss('zoomInRight');
            $('.section4').find('.block2').animateCss('zoomInRight');
            $('.section4').find('.block3').animateCss('zoomInRight');
            $('.section4').find('.block4').animateCss('zoomInRight');
        },
    });
    //Section5 Animations
    var in_view = new Waypoint.Inview({element: $('.section5'),
        enter: function() {
            $('.section5').find('h1').animateCss('fadeInDown');
            $('.section5').find('.lines').animateCss('fadeInDown');
            $('.section5').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section5').find('.block1').animateCss('fadeIn');
            $('.section5').find('.block2').animateCss('fadeIn');
            $('.section5').find('.block3').animateCss('fadeIn');
            $('.section5').find('.block4').animateCss('fadeIn');
            $('.section5').find('button').animateCss('fadeInUp');
        },
    });
    //Section6 Animations
    var in_view = new Waypoint.Inview({element: $('.section6'),
        enter: function() {
            $('.section6').find('h1').animateCss('flipInX');
            $('.section6').find('.lines').animateCss('fadeInDown');
            $('.section6').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section6').find('.block1').animateCss('slideInLeft');
            $('.section6').find('.block2').animateCss('slideInLeft');
            $('.section6').find('.block3').animateCss('slideInLeft');
            $('.section6').find('.block4').animateCss('slideInLeft');
        },
    });
    //Section7 Animations
    var in_view = new Waypoint.Inview({element: $('.section7'),
        enter: function() {
            $('.section7').find('h1').animateCss('flipInX');
            $('.section7').find('.lines').animateCss('fadeInDown');
            $('.section7').find('.col-md-12').find('p').animateCss('fadeInDown');
            $('.section7').find('.form').animateCss('fadeIn');
            $('.section7').find('button').animateCss('bounceInRight');
        },
    });
});

$('.section7').find('button').click(function() {
  $('.section7').find('button').animateCss('wobble');
});

$('.section1').find('button').click(function() {
  $('.section1').find('button').animateCss('jello');
});
