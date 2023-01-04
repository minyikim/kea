//GNB
$('.navi_menu, .bg').mouseenter(function () {
  $('.sub_menu, .bg').stop().slideDown()
})

$('navi_menu, .bg').mouseleave(function () {
  $('.sub_menu, .bg').stop().slideUp()
})

// 인기검색어
$(function () {
  var count = $('#rank-list li').length;
  var height = $('#rank-list li').height();

  function step(index) {
    $('#rank-list ol').delay(2500).animate({
      top: -height * index,
    }, 500, function () {
      step((index + 1) % count);
    });
  }
  step(1);
});

// 공지사항 - 탭메뉴
$('.btn span:first-child').click(function () {
  $('.tabs-1').show()
  $('.tabs-2, .tabs-3, .tabs-4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn span:nth-child(2)').click(function () {
  $('.tabs-2').show()
  $('.tabs-1, .tabs-3, .tabs-4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn span:nth-child(3)').click(function () {
  $('.tabs-3').show()
  $('.tabs-1, .tabs-2, .tabs-4').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
$('.btn span:last-child').click(function () {
  $('.tabs-4').show()
  $('.tabs-1, .tabs-2, .tabs-3').hide()
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})

// sns
$('.sns-btn span:first-child').click(function () {
  $('.facebook').show()
  $('.youtube, .naverblog').hide()
  $(this).addClass('active2')
  $(this).siblings().removeClass('active2')
})

$('.sns-btn span:nth-child(2)').click(function () {
  $('.youtube').show()
  $('.facebook, .naverblog').hide()
  $(this).addClass('active2')
  $(this).siblings().removeClass('active2')
})

$('.sns-btn span:last-child').click(function () {
  $('.naverblog').show()
  $('.facebook, .youtube').hide()
  $(this).addClass('active2')
  $(this).siblings().removeClass('active2')
})