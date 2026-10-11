$(document).ready(function(){
  $('.main-menu').mouseenter(function () { 
    $('.sub-menu').stop().slideDown();
    $('.header-bg').stop().slideDown();
  });

  $('header').mouseleave(function () { 
    $('.sub-menu').stop().slideUp();
    $('.header-bg').stop().slideUp();
  });


  $('.mobile-hamburger').click(function () { 
    $('.mobile-hamburger-inner').stop().animate({left: 0})
  });
});
