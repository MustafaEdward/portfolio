new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.3,
    image1: '../img/one.png',
    image2: '../img/two.png',
    displacementImage: '../img/heightMap.png'
})



//onload 

// const body = document.querySelector('body');
const cover = document.querySelector('.start')

// const fade = () => {
//     setTimeout(()=> {
//         body.classList.toggle('fade-out');
//     }, 4000);
  
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

