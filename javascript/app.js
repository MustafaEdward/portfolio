new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.3,
    image1: '../img/one.png',
    image2: '../img/two.png',
    displacementImage: '../img/heightMap.png'
})



//onload 

// const body = document.querySelector('body');

// const fade = () => {
//     setTimeout(()=> {
//         body.classList.remove('fade-out');
//     }, 7000);
  
// }

// body.addEventListener('load', fade());





//Smoothscroll vanila JS
// const body = document.body,
// scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//                 height = scrollWrap.getBoundingClientRect().height - 1,
//                 speed = 0.04;

//             var offset = 0;

//             body.style.height = Math.floor(height) + "px";

//             function smoothScroll() {
//                 offset += (window.pageYOffset - offset) * speed;

//                 var scroll = "translateY(-" + offset + "px) translateZ(0)";
//                 scrollWrap.style.transform = scroll;

//                 callScroll = requestAnimationFrame(smoothScroll);
//             }

//             smoothScroll();

// $(document).ready(function() {
//     $('.body').removeClass('fade-out').addClass('fade-in');
//   });



//change text 

$(document).ready(function() {
    $(document).on('mouseover', '#message', function(event) {
      event.preventDefault();
      $("#message").text("mustafaa.design@gmail.com");
  }).on('mouseleave', '#message', function(event) {
      event.preventDefault();
      $("#message").text("Mustafa");
  });
});





//logo scroll

const circletype = new CircleType(
    document.getElementById("rotated")
).radius(0);
$(window).scroll(function() {
    var offset= $(window).scrollTop();
    offset = offset * 1

    $(".circular-text").css({
       "moz-transform" : "rotate(" + offset / 20 + "deg)",
       "-webkit-transform" : "rotate(" + offset / 20 + "deg)",
       "-o-transform" : "rotate(" + offset / 20 + "deg)",
       "-ms-transform" : "rotate(" + offset / 20 + "deg)",
       "transform" : "rotate(" + offset / 20 + "deg)",
    });
});



//smoothscroll
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} ,
    2600,
    'linear');
});

//scroll to top force 
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });




  $(document).ready(function () {
    setTimeout(function(){
        $('body').removeClass("hidding");
    }, 3400);
});





$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navigation__item").addClass("delete");
    } else {
        $(".navigation__item").removeClass("delete");
    }
});








// color on scroll 

$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });

