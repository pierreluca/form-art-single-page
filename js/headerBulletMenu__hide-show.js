$( document ).ready(function() {
	
	var sensPos = 0;

    $( window ).on("scroll", function() {

        var distanceY = window.pageYOffset || document.documentElement.scrollTop;

        if($(window).width() < 960) {

            if (sensPos > distanceY && distanceY > 40) {
                sensPos = distanceY--;
                $('.nav-bullet').css('margin-top','-124px');
                $('.nav-main').css('margin-top','0');
            } else {
                sensPos = distanceY++;
                $('.nav-bullet').css('margin-top','0');
                $('.nav-main').css('margin-top','-124px');
            }

        } else {
            $('.nav-bullet').css('margin-top','-124px');
            $('.nav-main').css('margin-top','0');
        }

	});

});

