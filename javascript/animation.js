//text movement on scroll
$(document).on('scroll', function(){
    $('.more-text').css("left", Math.max(800 - 0.35*window.scrollY) + "px")
})

$(document).on('scroll', function(){
    $('.more-text-projects').css("left", Math.max(3100 - 0.35*window.scrollY) + "px")
})





// var resize = function() {
//     var screenWidth = parseInt($('body').width());
    
//     if (screenWidth < 1000) {
//       $('.header').removeAttr("data-background")
//     }
//   }
  
//   $( window ).resize(function() {
//     resize();
//   });
  
//   $( document ).ready(function() {
//     resize();
//   });



//remove attribute
//  $(window).resize(function() {
//     if ($(window).width() < 960) {
//         console.log("worked")
//         $("#fieldId").attr("data-background","#FF0000");
//     }
//    else {
//     console.log("Didnt worked")
//    }
//   });
