$('.carousel').flickity({
  // options
  contain: false,
  // disable previous & next buttons and dots
  prevNextButtons: false,
  pageDots: false,
});


$(document).ready(function(){
  TweenMax.set(".project-preview", {width:0});

  var t1= new TimeLineLite();

  $(document).on("mouseover", ".number__container", function(evt) {
    t1 = new TimeLineLite();
    t1.to($(".project-preview"), 1, {
      width: "600px",
      ease: Exp.easeInOut 

    }).on("mouseout", ".navigation-item", function(evt) {
      t1= new TimeLineLite();
      t1.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Exp.easeInOut 
  
      });
    })

  });
})
