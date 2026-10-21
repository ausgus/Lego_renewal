// --------------------JQuery--------------------
$(document).ready(function(){

  // -----------------hero Carousel----------------
  let heroWidth = 0;
  let heroIndex = 0;

  function setHeroIndicator(){
    $('.hero-indicator > li').removeClass('show');
    $('.hero-indicator > li').eq(heroIndex).addClass('show');
  }

  // 화면 너비에 맞춰 이미지 한 장의 너비와 이동 거리를 설정
  function setHeroPosition(){
    $('.hero-img').stop(true, true);
    heroWidth = $('.mainhero').width();
    $('.hero-img > li').css('width', heroWidth);
    $('.hero-img').css('margin-left', 0);
  }


  function nextHero(){
    $('.hero-img').animate({marginLeft: -heroWidth}, 600, function(){
      $('.hero-img > li').first().appendTo('.hero-img');
      $('.hero-img').css('margin-left', 0);
      heroIndex = heroIndex + 1;
      if (heroIndex >= $('.hero-img > li').length){
        heroIndex = 0;
      }
      setHeroIndicator();
    });
  }


  function prevHero(){
    $('.hero-img').stop(true, true);
    $('.hero-img > li').last().prependTo('.hero-img');
    $('.hero-img').css('margin-left', -heroWidth);
    $('.hero-img').animate({marginLeft: 0}, 600, function(){
      heroIndex = heroIndex - 1;
      if (heroIndex < 0){
        heroIndex = $('.hero-img > li').length - 1;
      }
      setHeroIndicator();
    });
  }


  $('.hero-arrow .prev-btn').click(function(){
    prevHero();
  });

  $('.hero-arrow .next-btn').click(function(){
    $('.hero-img').stop(true, true);
    nextHero();
  });

  $('.hero-indicator > li').click(function(){
    let i = $(this).index();
    $('.hero-img').stop(true, true);
    let moveCount = i - heroIndex;
    if (moveCount < 0){
      moveCount = moveCount + $('.hero-img > li').length;
    }
    if (moveCount > 0){
      $('.hero-img > li').first().appendTo('.hero-img');
    }
    if (moveCount > 1){
      $('.hero-img > li').first().appendTo('.hero-img');
    }
    $('.hero-img').css('margin-left', 0);
    heroIndex = i;
    setHeroIndicator();
  });

  setHeroPosition();
  setHeroIndicator();
  $(window).resize(function(){
    setHeroPosition();
  });


  $('.mainhero-wrap').mouseleave(function() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHero, 4000);
  });


  let heroTimer = setInterval(nextHero, 4000);


  $('.mainhero-wrap').mouseenter(function() {
    clearInterval(heroTimer);
  });

  // -----------------hero Carousel End----------------











  // --------------------Best Carousel--------------------
  $('.best-main > .best-img').last().prependTo('.best-main');

  let distance = 0; 

  // 카드 너비와 간격을 더해서, 한 번에 이동할 거리
  function setBestPosition(){
    let cardWidth = $('.best-img').outerWidth();
    let cardGap = parseFloat($('.best-main').css('gap'));
    distance = cardWidth + cardGap;
//parseFloat()는 숫자와 문자가 합쳐진 문자열에서 숫자를 가져옴
//ex) parseFloat(12.5px ) => 12.5


    $('.best-main').stop(true, true).css({
      'transform': `translateX(-${distance + cardWidth / 2}px)` ,
      'margin-left': -distance
    });

  }


  setBestPosition();

  // 화면 크기가 바뀌면 카드의 이동 거리도 다시 계산
  $(window).resize(function(){
    setBestPosition();
  });


  $('.best-wrap .next-btn').click(function(){
    $('.best-main').stop(true, true).animate({marginLeft: -distance * 2}, 300, function(){
      $('.best-main > .best-img').first().appendTo('.best-main');
      $('.best-main').css('margin-left', -distance);
    });


  });


  $('.best-wrap .prev-btn').click(function(){
    $('.best-main').stop(true, true).animate({marginLeft: 0}, 300, function(){
      $('.best-main > .best-img').last().prependTo('.best-main');
      $('.best-main').css('margin-left', -distance);
    });


  });


  // --------------------Myself 번호 확대--------------------
  $('.myself-left > li').mouseenter(function(){
    let i = $(this).index();
    if (i > 0){
      $('.block-num > li').eq(i - 1).addClass('big');
    }


  });


  $('.myself-left > li').mouseleave(function(){
    let i = $(this).index();
    if (i > 0){
      $('.block-num > li').eq(i - 1).removeClass('big');
    }


  });


});


// --------------------찜하기 버튼--------------------
const heartBtns = document.querySelectorAll('.heart-button');

heartBtns.forEach(function(btn){
  const heart = btn.querySelector('.heart');
  let isLiked = false;

  btn.addEventListener('click', function(){
    isLiked = !isLiked;

    if (isLiked){
      heart.src = 'images/icon-red-heart.png';
      heart.alt = '찜하기 취소';
    } else {
      heart.src = 'images/icon-heart.png';
      heart.alt = '찜하기';
    }


  });


});
