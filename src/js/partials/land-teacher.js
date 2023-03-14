$(document).ready(function(){
  $('.js-owl-privilege').owlCarousel({
    loop: false,
    rewind: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    autoHeight: true
  });

  let owl = $('.js-owl-privilege2');

  function owlInitP(){
    if($(window).width()<1200){
      owl.addClass('owl-carousel owl-theme');
      owl.owlCarousel({
        loop: false,
        rewind: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        autoHeight: true
      });
    }else{
      owl.trigger('destroy.owl.carousel');
      owl.removeClass('owl-carousel owl-theme');
    }
  }

  $(window).resize(function(){
    owlInitP();
  }).resize();

  $('#cl-parent .collapse').on('show.bs.collapse',function(){
    $('#land-teacher-img-change').attr('src',$(this).data('img'));
  });

});
