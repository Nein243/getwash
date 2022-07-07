"use strict"

const reviewsSwiper = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
      },
      speed: 400,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



let burgerBtn = document.querySelector('.header__menu__burger');
let burgerMenu = document.querySelector('.header__menu')
let headerLink = document.querySelector('.header__menu__link')

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  headerLink.classList.toggle('active');
})


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body')
const lockPadding = document.querySelectorAll(.'lock-padding');

let unlock = true;

const timeout = 700;

if (popup)
