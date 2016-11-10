$(document).ready(function(){

    $('#li1').fadeIn(100);
    $('#li1').animate({marginLeft: '+4%'},300, function(){
      $('#li2').fadeIn(100);
      $('#li2').animate({marginLeft: '+4%'},300, function(){
        $('#li4').fadeIn(100);
        $('#li4').animate({marginLeft: '+4%'},300, function(){
          $('#li5').fadeIn(100);
          $('#li5').animate({marginLeft: '+4%'},300);
        });
      });
    });
  })




/////////////////////*************////////// index horizontal rules ////////////*********//////////////////////
$('#li1').mouseenter(function(){
  var that = this;
    timer = setTimeout(function(){
        $('#hr1').animate({width: '270%'}, 800);
    }, 150);
}).mouseleave(function(){
  clearTimeout(timer);
	$('#hr1').animate({width: '0%'}, 800);
});
$('#li2').mouseenter(function(){
  var that = this;
    timer = setTimeout(function(){
        $('#hr2').animate({width: '270%'}, 800);
    }, 150);
}).mouseleave(function(){
  clearTimeout(timer);
	$('#hr2').animate({width: '0%'}, 800);
});
$('#li4').mouseenter(function(){
  var that = this;
    timer = setTimeout(function(){
        $('#hr4').animate({width: '270%'}, 800);
    }, 150);
}).mouseleave(function(){
  clearTimeout(timer);
	$('#hr4').animate({width: '0%'}, 800);
});
$('#li5').mouseenter(function(){
  var that = this;
    timer = setTimeout(function(){
        $('#hr5').animate({width: '270%'}, 800);
    }, 150);
}).mouseleave(function(){
  clearTimeout(timer);
	$('#hr5').animate({width: '0%'}, 800);
});


//////////// contents & header animation ///////////
$('#li1, #li2, #li4, #li3').on('click', function(){
  $('#list').animate({top:'1%'}, 1000);
  $('.downarrow').delay(2000).fadeIn(500);
})
$('#li1').on('click', function(){
    $('#background, #background2').animate({top: '-100%'},1000);
    $('h1').animate({marginTop:'-3.5%'}, {duration: 1000, queue: false});
    $('h1').delay(500).animate({fontSize:'20px'}, {duration: 1000, queue: false});
    $('#li2, #li4,#li5, hr').hide();
    $('#about').delay(800).fadeIn();
})
$('#li2').on('click', function(){
  $('#background, #background2').animate({top: '-100%'},1000);
  $('h1').animate({marginTop:'-3.5%'}, {duration: 1000, queue: false});
  $('h1').delay(500).animate({fontSize:'20px'}, {duration: 1000, queue: false});
  $('#li1, #li4, #li5, #li6,hr').hide();
  $('#me4u').delay(500).fadeIn();
  $('#list2').show();
  $('#section2').animate({top: '0%'}, 800);

})
$('#li4').on('click', function(){
  $('#background, #background2').animate({top: '-100%'},1000);
  $('h1').animate({marginTop:'-3.5%'}, {duration: 1000, queue: false});
  $('h1').delay(500).animate({fontSize:'20px'}, {duration: 1000, queue: false});
  $('#li5,hr').fadeOut(200);
  $('#li1').delay(300).hide();
  $('#li2').delay(150).hide();
})
$('#li5').on('click', function(){
  $('#li6,hr').fadeOut(200);
  $('#li1').delay(600).fadeOut();
  $('#li2').delay(300).fadeOut();
  $('#li4').fadeOut(300);
})


//down arrow//
$('.downarrow').hover(function(){
  $('.downarrow').animate({'left':'-0.005%'},800);
  $('.downarrow').animate({'left':'4%'},800);
})

/////about page ////////////
$('#li1').on('click', function(){
  $('#background3').animate({top:'+0%'}, 800);
    $('#about2').fadeIn(300, function(){
      $('#now').delay(3000).addClass('highlight');


  })
})

///////back arrow//////////
$('.downarrow, h1').on('click', function(){

  if ($('#li9').is(":visible")){
//hit me up back actions
    $('.downarrow').hide();
    $('#li9').delay(200).fadeOut();
    $('#li8').delay(500).fadeOut();
    $('#li7').delay(800).fadeOut();
    $('#li6').delay(1100).fadeOut(function(){
      $('#background').animate({top: '10%'},1000);
      $('#background2').animate({top: '0%'},1000);
      $('#g, .c').delay(50).animate({marginLeft:'0%'},500);
      $('#g, .c').delay(50).animate({marginLeft:'0%'},500);
      $('#u4me2').delay(450).animate({'width':'0%'}, 500);
      $('#u4me2').delay(350).animate({'height':'0%'}, 500);
      $('#u4me1').delay(350).animate({'width':'0%'}, 500, function(){
        $('#list').animate({top:'34%'}, 1000);
        $('#li5').css({'color':'#000'});
        $('#about, #me4u').hide();
        $('#li4, hr').delay(300).fadeIn();
        $('#li2').delay(600).fadeIn();
        $('#li1').delay(900).fadeIn();
        $('h1').delay(500).animate({fontSize:'4em'}, {duration: 1000, queue: false});

      });
    });
  } else{
//all other back actions
  $('.downarrow').hide();
  $('#background3').animate({top:'-100%'}, 800);
  $('.list1').hide().css({
    'margin-left':'0%'
  })
  $('#g, .c').delay(50).animate({marginLeft:'0%'},500);
  $('#g, .c').delay(50).animate({marginLeft:'0%'},500);
  $('#u4me2').delay(450).animate({'width':'0%'}, 500);
  $('#u4me2').delay(350).animate({'height':'0%'}, 500);
  $('#about, #me4u').fadeOut();
  $('#background').animate({top: '10%'},1000);
  $('#background2').animate({top: '0%'},1000);
  $('#u4me1').delay(350).animate({'width':'0%'}, 500, function(){
          $('#list').animate({top:'34%'}, 1000);
          $('#contents').animate({marginTop:'16.5%'}, 1000, function(){
            $('#li1, hr').fadeIn(100);
            $('#li1').animate({marginLeft: '+4%'},300, function(){
              $('#li2').fadeIn(100);
              $('#li2').animate({marginLeft: '+4%'},300, function(){
                $('#li4').fadeIn(100);
                $('#li4').animate({marginLeft: '+4%'},300, function(){
                  $('#li5').fadeIn(100);
                  $('#li5').animate({marginLeft: '+4%'},300);
                });
              });
            });
          });
          $('h1').animate({marginTop:'2.6%'}, {duration: 1000, queue: false});
          $('h1').delay(500).animate({fontSize:'4em'}, {duration: 1000, queue: false});

  });
};
});

//me 4 u//
$('#1li').on('click mouseover', function(){
  $('#section2').addClass('repleatbackground');
  $('#section21').show();
  $('#section22').hide();
  $('#section23').hide();
  $('#section24').hide();
  $('#1li').css({
    'background':'#f9f9f9'
  });
  $('#2li, #3li, #4li').css({
    'background':'#fff'
  });
  $('#section2').removeClass('origamibackground');
  $('#section2').removeClass('gridbackground');
});
$('#2li').on('click mouseover', function(){
  $('#2li').css({
    'background':'#f9f9f9'
  });
  $('#1li, #3li, #4li').css({
    'background':'#fff'
  });
  $('#section2').removeClass('repleatbackground');
  $('#section22').show();
  $('#section2').removeClass('origamibackground');
  $('#section2').removeClass('gridbackground');
  $('#section21').hide();
  $('#section23').hide();
  $('#section24').hide();
});
$('#3li').on('click mouseover', function(){
  $('#section2').addClass('gridbackground');
  $('#3li').css({
    'background':'#f9f9f9'
  });
  $('#2li, #1li, #4li').css({
    'background':'#fff'
  });
  $('#section2').removeClass('repleatbackground');
  $('#section2').removeClass('origamibackground');
  $('#section23').show();
  $('#section21').hide();
  $('#section22').hide();
  $('#section24').hide();
});
$('#4li').on('click mouseover', function(){
  $('#section2').removeClass('gridbackground');
  $('#4li').css({
    'background':'#f9f9f9'
  });
  $('#2li, #3li, #1li').css({
    'background':'#fff'
  });
  $('#section2').removeClass('repleatbackground');
  $('#section2').addClass('origamibackground');
  $('#section24').show();
  $('#section21').hide();
  $('#section22').hide();
  $('#section23').hide();
});


////why i'm good for you page, hover ////
/*$('#one1').mouseenter(function(){
  $('#one12').show();
  $('#one11').hide();
}).mouseleave(function(){
  $('#one12').hide();
  $('#one11').show();
});
$('#one2').mouseenter(function(){
  $('#one14').show();
  $('#one13').hide();
}).mouseleave(function(){
  $('#one14').hide();
  $('#one13').show();
});
$('#one3').mouseenter(function(){
  $('#one16').show();
  $('#one15').hide();
}).mouseleave(function(){
  $('#one16').hide();
  $('#one15').show();
});
$('#one4').mouseenter(function(){
  $('#one18').show();
  $('#one17').hide();
}).mouseleave(function(){
  $('#one18').hide();
  $('#one17').show();
});
*/
//why i'm interested in u ////
$('#li4').on('click', function(){
  $('#u4me1').delay(500).animate({'width':'100%'}, 1000, function(){
    $('#u4me2').animate({'height':'100%'}, 1000, function(){
      $('#u4me2').delay(100).animate({'width':'94%'}, 1500);
      $('#g, .c').delay(100).animate({marginLeft:'32%'},500);
    });
  });
});

$('.back').on('click', function(){
  $('#u4me2').animate({'width':'0%'}, 700, function(){
    $('#g, .c').show();
    $('#culture, #challenge, #growth').hide();
  });
  $('#u4me2').delay(600).animate({'width':'94%'}, 800);
})

$('#g').on('click', function(){
  $('#u4me2').animate({'width':'0%'}, 700, function(){
    $('#g, .c').hide();
    $('#growth').show();
  });
  $('#u4me2').delay(600).animate({'width':'94%'}, 1100);
})
$('#c1').on('click', function(){
  $('#u4me2').animate({'width':'0%'}, 700, function(){
    $('#g, .c').hide();
    $('#culture').show();
  });
  $('#u4me2').delay(600).animate({'width':'94%'}, 1100);
})
$('#c2').on('click', function(){
  $('#u4me2').animate({'width':'0%'}, 700, function(){
    $('#g, .c').hide();
    $('#challenge').show();
  });
  $('#u4me2').delay(600).animate({'width':'94%'},1100);
})
//////hit me up ///////
$('#li5').on('click', function(){
  $('#li5').css({'color':'#000'});
  $('.downarrow').delay(2500).fadeIn(500);
  $('#li6').delay(1200).fadeIn();
  $('#li6').animate({marginLeft: '+4%'},300);
  $('#li7').delay(1500).fadeIn();
  $('#li7').animate({marginLeft: '+4%'},300);
  $('#li8').delay(1800).fadeIn();
  $('#li8').animate({marginLeft: '+4%'},300);
  $('#li9').delay(2100).fadeIn();
  $('#li9').animate({marginLeft: '+4%'},300);
})
