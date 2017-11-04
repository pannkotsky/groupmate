import Vue from 'vue'
import App from './App.vue'
import SmoothScroll from '../dist/libs/vue-smoothscroll'


new Vue({
  el: '#app',
  render: h => h(App)
})

$(document).ready(function(){
	$('.parallax-window').parallax({imageSrc: 'static/img/mtmfb.jpg'});
});

$(document).ready(function(){
	$('.parallax-window_au').parallax({imageSrc: 'static/img/kpi-future.jpg'});
});

$(document).ready(function(){
	$('.parallax-window_ab').parallax({imageSrc: 'static/img/ping_img.jpg'});
});

$(document).ready(function(){
	$('.parallax-window_f').parallax({imageSrc: 'static/img/mtmfb.jpg'});
});

$(document).ready(function(){
	$('.parallax-window_donate').parallax({imageSrc: 'static/img/ws_Cubes_1920x1080.jpg'});
});

$('.contacts').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300);
        }
	    return false;
    });
$('.to_down_contacts').click( function() {
    $('h2').addClass('animated bounceInRight');
    $('h1').addClass('animated bounceInLeft');
});

$('.parallax-window_au').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300);
        }
	    return false;
    });
$('.to_down_university').click( function() {
    $('.fake_kpi').addClass('animated bounceInLeft');
    $('p').addClass('animated bounceInLeft');
    $('button').addClass('animated bounceInRight');
});
$('.donate').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300);
        }
	    return false;
    });



$(".to_down").click(function(){
  $('p').addClass("animated bounceInRight");
  $("html,body").animate({scrollTop: $(".parallax-window").height()}, "slow");
  return false;
});



// $('.to_down_contacts').click( function(){
// 	var scroll_el = $(this).attr('href');
//         if ($(scroll_el).length != 0) {
// 	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1300);
//         }
// 	    return false;
//     });


$('.nav_btn').click(function() {
  $('.hide_nav_bar ').css('display','block').show('slow');
});


$(function(){
  $("#Go_Top").hide().removeAttr("href");
  if ($(window).scrollTop()>="250") $("#Go_Top").fadeIn("slow")
  $(window).scroll(function(){
   if ($(window).scrollTop()<="250") $("#Go_Top").fadeOut("slow")
   else $("#Go_Top").fadeIn("slow")
  });


  $("#Go_Top").click(function(){
   $("html, body").animate({scrollTop:0},"slow")
  })
  $("#Go_Bottom").click(function(){
   $("html, body").animate({scrollTop:$(document).height()},"slow")
  })
 });

$('button#send-info').click(function() {
    console.log("sending");
    var subject = $('#subject').val();
    var teacher = $('#teacher').val();
    var info = $('#info').val();
    console.log(subject, teacher, info);
    var data = {
        topic: 3,
        author: 3,
        text: subject + '\n\n' + teacher + '\n\n' + info
    };
    $.ajax({
        url: '/api/teacherposts/',
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            console.log('Message sent');
        }
    });
});