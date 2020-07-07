


//onload animi.js
// document.addEventListener('DOMContentLoaded', () => {
//     //initial
//     anime.timeline({
//         easing: 'easeOutExpo',
//         // duration: 750
//       })
//     .add({
//         targets: '.welcome',
//         easing: 'easeInOutQuad',
//         delay: 1000,
//         height:['100vh', '0'],
//         direction: "alternate-reverse",
//         duration: 1000,
//       })
   
   
// })


//onscroll
// $(window).scroll(function() {
//     var hT = $('#scroll-to').offset().top,
//         hH = $('#scroll-to').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//      console.log((hT-wH) , wS);
//     if (wS > (hT+hH-wH)){
        
//     console.log("red")
//     anime.timeline({
//                 easing: 'easeOutExpo',
//                 // duration: 750
//               })
//             .add({
//                 targets: '.more-text',
//                 easing: 'easeInOutQuad',
//                 translatex: [0, 2000],
//                 duration: 4000,
//                 delay: 500                
//               })
//     }
//  });




//text movement on scroll

$(document).on('scroll', function(){
    $('.more-text').css("left", Math.max(900 - 0.35*window.scrollY) + "px")
})

$(document).on('scroll', function(){
    $('.more-text-projects').css("left", Math.max(2150 - 0.35*window.scrollY) + "px")
})

$(document).on('scroll', function(){
    $('.more-text-interactions').css("left", Math.max(3000 - 0.35*window.scrollY) + "px")
})

$(document).on('scroll', function(){
    $('.more-text-contact').css("left", Math.max(4500 - 0.35*window.scrollY) + "px")
})


