$(document).ready(function(){
  
  //------------PC Header------------
  $('.main-menu').mouseenter(function () { 
    $('.sub-menu').stop().slideDown(300);
    $('.header-bg').stop().slideDown(300);
  });


  $('header').mouseleave(function () { 
    $('.gnb .sub-menu').stop().slideUp(300);
    $('.header-bg').stop().slideUp(300);
  });


  $('.pc-hamburger').click(function() {
    $('.pc-hamburger-inner').toggleClass('open');
  });


  // $('.pc-hamburger-inner').mouseleave(function() {
  //   $(this).removeClass('open');
  // })


  //------------------Mobile Header-------------

  $('.mobile-hamburger-top img').click(function () { 
    $('.mobile-hamburger-inner').toggleClass('open');
  });


  $('.mobile-main-menu h2 a').click(function(e){
    e.preventDefault();
    $('.mobile-main-menu h2 a').parent().next().stop().slideUp();
    $(this).parent().next().stop().slideToggle();
  });


});
