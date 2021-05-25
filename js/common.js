"use strict"
$(document).ready(function() {
  imageSlide()
  function imageSlide() {
    var numSlide = $('div.image-slide .slide li').length;
    var slideNow = 1;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = 1;
    var timerId = '';
    var isTimerOn = true;
    var timerSpeed = 3000;
    let numChange = 1;

    $('.image-slide .slide li').each(function(i) {
      $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    });
    showSlide(slideFirst);
    
    $('.control a.prev').on('click', function() {
      showSlide(slidePrev);
    });

    $('.control a.next').on('click', function() {
      showSlide(slideNext);
    });

    function showSlide(n) {
      if (slideNow === 0) {
        $('div.image-slide .slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
      } else {
        $('div.image-slide .slide').css({'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%'});
      }
      slideNow = n;
      slidePrev = (n === 1) ? numSlide : (n - 1);
      slideNext = (n === numSlide) ? 1 : (n + 1);
      console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
      if (isTimerOn === true) {
        clearTimeout(timerId);
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      }
    }
  }

  $('li.notice-3 ul > li > a').on('click',function() {
    $(this).parent().toggleClass('on');
    $(this).parent().toggleClass('off');
  })
  $('.sub.profile .option2 ul > li > a').on('click',function() {
    $(this).parent().toggleClass('on');
    $(this).parent().toggleClass('off');
  })

  $('li.notice-4 ul > li > a').on('click',function() {
    $(this).parent().toggleClass('on')
  })

  $('.graph-circle').each(function() {
    var value = parseFloat($(this).attr('data-value'));
    var degree = 360 * (value / 100);
    if (value > 50) {
      $(this).addClass('over50');
    }
    $(this).find('.indicator').css({'transform': 'rotate(' + degree + 'deg)'});
    $(this).find('.text em').text(value + '%');
  });
  $('div.loginStatus a:eq(0)').on('click', function() {
    $(this).toggleClass('on')
  })
  $('#profile-text').on('keyup', function() {
    $('#out').text($('#profile-text').val());
  })

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#img-preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

  $("#profile-img").change(function() {
    readURL(this);
  });
})