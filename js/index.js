    $(document).ready(function(){
  $('.show-menu').on('click', function(){
    $('.main-menu').toggleClass('expand');
    return false;
  });
});



    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });