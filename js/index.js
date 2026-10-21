$(document).ready(function() {
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

// 홈 스타일링 하단 썸네일 호버 인터랙션
$('.quick-thumb-btn').on('mouseenter', function() {
  var targetTooltip = $(this).data('tooltip');
  
  // 1. 썸네일 버튼 붉은 테두리 활성화
  $('.quick-thumb-btn').removeClass('is-active');
  $(this).addClass('is-active');
  
  // 2. 해당 툴팁 카드 띄우기
  $('.styling-tooltip').removeClass('is-active');
  $(targetTooltip).addClass('is-active');
});

$('.quick-thumb-btn').on('mouseleave', function() {
  // 마우스가 벗어나면 테두리와 툴팁 숨김
  $(this).removeClass('is-active');
  var targetTooltip = $(this).data('tooltip');
  $(targetTooltip).removeClass('is-active');
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