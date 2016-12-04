$( document ).ready(function() {
	
	var sensPos2 = 0;

    $( window ).on("scroll", function() {
    
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var el = $(".four");
        var offset = el.offset();
        var sensPos2 = distanceY+500;
        var heightEl, widthEl;
        
        if(sensPos2 >= offset.top){
            //$('.c').text('ON');
            heightEl = $('.become__content').height() + 50;
            widthEl = $('.become__content').width() + 80;
            //$('.a').text(+heightEl);
            $(".become__content--back").css('height',heightEl).css('width',widthEl);
        }

	});

});