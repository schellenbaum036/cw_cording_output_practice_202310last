$(function () {

    $('.btn-trigger').on('click', function () {     
        $(this).toggleClass('active');    
        if($(this).hasClass('active')){        
        $('nav').css({            
        'visibility': 'visible',           
         'opacity': 1        
        });    
        } else {
                $('nav').css({          
          'visibility': 'hidden',           
         'opacity': 0        
        });   
         }   
         return false;
        });

        $('.slick01').slick({
            dots: true,
            speed: 1000,
            autoplay: true,
            centerMode: true,
            centerPadding: '15%',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '0',
                    },
                },
            ],
        });
             


});
