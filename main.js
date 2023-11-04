/* <---- It is for toggle ----> */
// jquery for toggle dropdown menus
$(document).ready(function() {
  // toggle sub-menus
  $('.sub-btn').click(function() {
    $(this).next('.sub-menu').slideToggle();
  });

  // toggle more-menus
  $('.more-btn').click(function() {
    $(this).next('.more-menu').slideToggle();
  });
});

// JavaScript for the responsive navigation menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// JavaScript for the navigation bar effects on scroll
window.addEventListener("scroll", function() {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* <---- It is for facilities sliders ----> */
$('.slider').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});


/* <---- It is for login ----> */
const container = document.getElementById('login-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* <---- It is for about-us-gallery ----> */
