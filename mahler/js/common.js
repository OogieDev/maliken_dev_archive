$(document).ready(function(){
    new WOW().init();
    $('#menu-toggle').click(function(){
        $(this).toggleClass('open');
    });

    $('input[name=phone]').mask("+7 (999) 999 - 99 - 99");
    $('input[name=phone]').click(function (e) {
        var phone_input = $(this);
      phone_input.focus();
    });

    $('input[name=clientphone]').mask("+7 (999) 999 - 99 - 99");
    $('input[name=clientphone]').click(function (e) {
        var phone_input = $(this);
      phone_input.focus();
    });


    $('#services, #mservices').click(function () {
        var top = $('#section4').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#condition, #mcondition').click(function () {
        var top = $('#section6').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#about, #msabout').click(function () {
        var top = $('#section8').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#contacts, #mcontacts').click(function () {
        var top = $('#section11').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});
