$(document).ready(function() {
  // -----------------hero Carousel----------------
  let heroWidth = 0;
  let heroIndex = 0;

  function setHeroIndicator(){
    $('.hero .hero-indicator > li').removeClass('show');
    $('.hero .hero-indicator > li').eq(heroIndex).addClass('show');
  }

  // 화면 너비에 맞춰 이미지 한 장의 너비와 이동 거리를 설정
  function setHeroPosition(){
    $('.hero .hero-img').stop(true, true);
    heroWidth = $('.hero').innerWidth();
    $('.hero .hero-img > li').css('width', heroWidth);
    $('.hero .hero-img').css('margin-left', 0);
  }


  function nextHero(){
    $('.hero .hero-img').animate({marginLeft: -heroWidth}, 600, function(){
      $('.hero .hero-img > li').first().appendTo('.hero .hero-img');
      $('.hero .hero-img').css('margin-left', 0);
      heroIndex = heroIndex + 1;
      if (heroIndex >= $('.hero .hero-img > li').length){
        heroIndex = 0;
      }
      setHeroIndicator();
    });
  }


  function prevHero(){
    $('.hero .hero-img').stop(true, true);
    $('.hero .hero-img > li').last().prependTo('.hero .hero-img');
    $('.hero .hero-img').css('margin-left', -heroWidth);
    $('.hero .hero-img').animate({marginLeft: 0}, 600, function(){
      heroIndex = heroIndex - 1;
      if (heroIndex < 0){
        heroIndex = $('.hero .hero-img > li').length - 1;
      }
      setHeroIndicator();
    });
  }


  $('.hero .hero-arrow .prev-btn').click(function(){
    $('.hero .hero-img').stop(true, true);
    prevHero();
  });

  $('.hero .hero-arrow .next-btn').click(function(){
    $('.hero .hero-img').stop(true, true);
    nextHero();
  });

  $('.hero .hero-indicator > li').click(function(){
    let i = $(this).index();
    $('.hero .hero-img').stop(true, true);
    let moveCount = i - heroIndex;
    if (moveCount < 0){
      moveCount = moveCount + $('.hero .hero-img > li').length;
    }
    if (moveCount > 0){
      $('.hero .hero-img > li').first().appendTo('.hero .hero-img');
    }
    if (moveCount > 1){
      $('.hero .hero-img > li').first().appendTo('.hero .hero-img');
    }
    $('.hero .hero-img').css('margin-left', 0);
    heroIndex = i;
    setHeroIndicator();
  });

  setHeroPosition();
  setHeroIndicator();
  $(window).resize(function(){
    setHeroPosition();
  });


  $('.hero').mouseleave(function() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHero, 2000);
  });


  let heroTimer = setInterval(nextHero, 2000);


  $('.hero').mouseenter(function() {
    clearInterval(heroTimer);
  });

  // -----------------hero Carousel End----------------

  // 하트 버튼 클릭 시 활성화 클래스(is-active) 토글
  $('.Btn-Heart').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
  });
});

// 인기 시리즈 쇼케이스 탭 전환 인터랙션
$('.series-tab_btn').on('click', function(e) {
  e.preventDefault();
  
  // 1. 하단 탭 버튼 활성화 클래스 교체
  $('.series-tab_btn').removeClass('is-active');
  $(this).addClass('is-active');
  
  // 2. data-target에 연결된 상단 패널 활성화
  let targetPanel = $(this).data('target');
  $('.series-panel').removeClass('is-active');
  $(targetPanel).addClass('is-active');
});

// 2초마다 다음 시리즈 탭으로 전환
function nextSeries() {
  let buttons = $('.series-tab_btn');
  let i = buttons.index($('.series-tab_btn.is-active'));

  i++;

  if (i >= buttons.length) {
    i = 0;
  }

  buttons.eq(i).trigger('click');
}

let seriesTimer = setInterval(nextSeries, 2000);

$('.series-tabs').on('mouseenter', function () {
  clearInterval(seriesTimer);
});

$('.series-showcase').on('mouseleave', function () {
  clearInterval(seriesTimer);
  seriesTimer = setInterval(nextSeries, 2000);
});

// 홈 스타일링 하단 썸네일 호버 인터랙션
$('.quick-thumb-btn').on('mouseenter', function() {
  if ($(window).width() <= 600) {
    return;
  }

  var targetTooltip = $(this).data('tooltip');
  
  // 1. 썸네일 버튼 붉은 테두리 활성화
  $('.quick-thumb-btn').removeClass('is-active');
  $(this).addClass('is-active');
  
  // 2. 해당 툴팁 카드 띄우기
  $('.styling-tooltip').removeClass('is-active');
  $(targetTooltip).addClass('is-active');
});

$('.quick-thumb-btn').on('mouseleave', function() {
  if ($(window).width() <= 600) {
    return;
  }

  // 마우스가 벗어나면 테두리와 툴팁 숨김
  $(this).removeClass('is-active');
  var targetTooltip = $(this).data('tooltip');
  $(targetTooltip).removeClass('is-active');
});

// 모바일에서는 클릭한 상품의 설명 표시
$('.quick-thumb-btn').click(function(){
  if ($(window).width() <= 600) {
    let i = $(this).parent().index();

    $('.quick-thumb-btn').removeClass('is-active');
    $(this).addClass('is-active');

    $('.styling-tooltip').removeClass('is-active');
    $('.styling-card.is-active .styling-tooltip')
      .eq(i).addClass('is-active');
  }
});

// 홈 스타일링 공간 필터 탭 전환 (거실, 침실, 주방, 아이방)
$('.filter-btn').on('click', function(e) {
  e.preventDefault();

  // 1. 버튼 활성화 클래스 전환
  $('.filter-btn').removeClass('is-active');
  $(this).addClass('is-active');

  // 2. data-target에 지정된 공간 패널만 활성화
  var targetCard = $(this).data('target');
  $('.styling-card').removeClass('is-active');
  $(targetCard).addClass('is-active');
});

// NEW 소식 슬라이더 좌우 스크롤 제어
var scrollAmount = 380; // 카드 너비(290px) + 간격(32px)

$('.news-btn--next').on('click', function() {
  $('.news-slider_wrapper').animate({
    scrollLeft: $('.news-slider_wrapper').scrollLeft() + scrollAmount
  }, 300);
});

$('.news-btn--prev').on('click', function() {
  $('.news-slider_wrapper').animate({
    scrollLeft: $('.news-slider_wrapper').scrollLeft() - scrollAmount
  }, 300);
});

// 특별한 선물 섹션에 도달하면 원래 위치로 이동하며 선명하게 표시
$(window).on('scroll', function () {
  let sc = $(this).scrollTop();
  let giftSc = $('.special-gift').offset().top;
  let windowHeight = $(window).height();
  let giftHeight = $('.special-gift').outerHeight();

  if (sc + windowHeight >= giftSc + giftHeight / 3) {
    $('.special-gift_gallery').css({
      transform: 'translateX(0)',
      opacity: 1
    });

    $('.special-gift_content').css({
      transform: 'translateX(0)',
      opacity: 1
    });
  }
});
