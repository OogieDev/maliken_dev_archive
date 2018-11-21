
$(document).ready(function(){

  $('#menu-toggle').click(function(){
    $(this).toggleClass('open');
  });





  $(".slider").slick({
    prevArrow: $('.slider_prev'),
    nextArrow: $('.slider_next'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $(".slider2").slick({
    prevArrow: $('.slider_prev2'),
    nextArrow: $('.slider_next2'),
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });


});