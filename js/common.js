$(document).ready(function(){
  
  //------------PC Header------------
  $('.main-menu').mouseenter(function () { 
    $('.sub-menu').stop().slideDown();
    $('.header-bg').stop().slideDown();
  });

  $('header').mouseleave(function () { 
    $('.sub-menu').stop().slideUp();
    $('.header-bg').stop().slideUp();
  });



  //------------------Mobile Header-------------
  $('.mobile-hamburger-top img').click(function () { 
    $('.mobile-hamburger-top-bg').toggleClass('on');
  });

  $('.mobile-hamburger-top img').click(function () { 
    $('.mobile-hamburger-inner').toggleClass('open');
  });

});
