//text movement on scroll
$(document).on('scroll', function(){
    $('.more-text').css("left", Math.max(900 - 0.35*window.scrollY) + "px")
})

$(document).on('scroll', function(){
    $('.more-text-projects').css("left", Math.max(3000 - 0.35*window.scrollY) + "px")
})

