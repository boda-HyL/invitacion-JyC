$(document).ready(function() {
   
   //Only animate elements when using non-mobile devices    
    if (isMobile.any === false) { 
        
        /* Animate elements in #hero */
        $('#hero .statement').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp4');}
        });
        
        /* Animate elements in #wedding */
        $('#wedding .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        
        $('#reloj .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        $('#historia .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp3');}
        });
        /* Animate elements in #story */
        $('#fecha .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp3');}
        });
        
        $('#registro .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        
        $('#nosotros .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        /* Animate */
        $('#ubicacion .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        $('#contactos .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp3');}
        });
        
        /* Animate elements in #gallery */
        $('#gift .title-text').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });
        
        /* Animate elements in #gallery */
        $('#gift .couple-profile').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp3');}
        });
        
    }  

});