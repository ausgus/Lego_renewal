

// ----------------JQuery----------------

$(document).ready(function(){


  // --------------------best carousel-----------------
  
    $('.prev-btn')


  
  // --------------------best carousel End-----------------








  // -------------------myself block scale UP--------------------


  $('.myself-left > li').mouseenter(function(){
    let i = $(this).index();
    $('.block-num > li').eq(i - 1).toggleClass('big');
  });
  $('.myself-left > li').mouseleave(function(){
    let i = $(this).index();
    $('.block-num > li').eq(i - 1).toggleClass('big');
  });


  // -------------------myself block scale UP END--------------------



  

});

// ----------------JQuery End----------------




