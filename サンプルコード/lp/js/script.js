$(function () {

    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
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


    $(window).on('load resize', function () {
        var winW = $(window).width();
        var devW = 767;
        if (winW <= devW) {
            //767px以下の時の処理
            $('nav').css({
                'visibility': 'hidden',
                'opacity': 0
            });
        } else {
            //768pxより大きい時の処理
            $('nav').css({
                'visibility': 'visible',
                'opacity': 1
            });
        }
    });



    $('.slick01').slick({
        fade: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
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