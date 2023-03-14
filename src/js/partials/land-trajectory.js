$(document).ready(function(){
  $('.js-owl-mob2').owlCarousel({
    loop:false,
    margin: 16,
    nav: false,
    dots: true,
    responsive:{
      0:{items:2},
      600:{items:3},
      992:{items:4},
      1200:{
        items: 6
      },
      1500: {
        items: 6,
        margin: 24
      }
    }
  });

  $('.js-owl-you').owlCarousel({
    loop:false,
    margin: 16,
    nav: false,
    dots: true,
    responsive:{
      0:{items:1},
      768:{items:2},
      992:{items:3},
      1200:{
        items: 3,
        margin: 24
      }
    }
  });

});