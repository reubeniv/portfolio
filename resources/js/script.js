/*written by Shaun Munsey... kinda, I'm sure there'll be more*/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-60
        }, 1000);
    }
});