// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })

$(document).ready(function(){
    $('.js--profile').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky');
            $('nav').removeClass('nav-none');

        } else {
            $('nav').removeClass('sticky');
            $('nav').addClass('nav-none');
        }
    }, {
        offset: '100px'
      })

})