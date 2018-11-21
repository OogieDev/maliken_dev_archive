

$(document).ready(function(){

    var cards = document.getElementsByClassName('section3_card');


    var max = 0;
    for(var i = 0; i < cards.length; i++){
        if($(cards[i]).height() > max){
            max = $(cards[i]).height();
        }
    }
    for(var i = 0; i < cards.length; i++){
        cards[i].style.height = max + 'px';
    }


    $('.section4_card_slider1').slick({
        'centerPadding': '15px',
        'dots': true,
        'prevArrow': $('.slider_prev1'),
        'nextArrow': $('.slider_next1'),
        'dotsClass': 'slider1_dots',
    });

    $('.section4_card_slider2').slick({
        'centerPadding': '15px',
        'dots': true,
        'prevArrow': $('.slider_prev2'),
        'nextArrow': $('.slider_next2'),
        'dotsClass': 'slider2_dots',
    });

    $('.section4_card_slider3').slick({
        'centerPadding': '15px',
        'dots': true,
        'prevArrow': $('.slider_prev3'),
        'nextArrow': $('.slider_next3'),
        'dotsClass': 'slider3_dots',
    });

    $('.section4_card_slider4').slick({
        'centerPadding': '15px',
        'dots': true,
        'prevArrow': $('.slider_prev4'),
        'nextArrow': $('.slider_next4'),
        'dotsClass': 'slider4_dots',
    });


    //patents slider

    $('.slider_patents').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        'prevArrow' : $('.slider_patents_prev'),
        'nextArrow' : $('.slider_patents_next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.slider_videos').slick({
        infinite: true,
        slidesToShow: 1,
        centerPadding: '60px',
        centerMode: true,
        slidesToScroll: 1,
        'prevArrow' : $('.slider_videos_prev'),
        'nextArrow' : $('.slider_videos_next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: false,
                }
            },
        ]
    });


    $('.phone_input').mask("+7 (999) 999 - 99 - 99");
    $('.phone_input').click(function (e) {
        var phone_input = $(this);
        phone_input.focus();
    });

    $('#to_s_4').click(function () {
        var top = $('#section4').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
    $('#to_s_8').click(function () {
        var top = $('#section8').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
    $('#to_s_11').click(function () {
        var top = $('#section11').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });
    $('#to_s_13').click(function () {
        var top = $('#section13').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

});