let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(' .navbar');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
centerSlides:true,
autoplay:{
    delay:7500,
    disableOnInteraction:false,
},
pagination: {
    el: ".swiper-button-next",
    cliclkable: "true",
  },
  loop:true,
});