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


  //is() 는 조건에 맞는지 확인해서 true/false 값을 돌려줌  
  // :visible 은 화면에 보이는 지를 확인하는 선택자
  
  $('.mobile-main-menu h2 a').click(function(e){
    if ($(this).parent().next().is(':visible')) { 
      return;
    }

    e.preventDefault();
    $('.mobile-main-menu h2 a').parent().next().stop().slideUp();
    $(this).parent().next().stop().slideToggle();
  });



});
