$(window).load(function() {
    
    /* Scroll on buttons */
    $('.js--scroll-to-collection').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-collection').offset().top}, 1000);
    });
    
    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    
    /* Animation */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '70%',
        duration: 'slow'
    });
    
});
