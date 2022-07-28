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
  anchor.addEventListener("click", function (event) {
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
let headerLink = document.querySelectorAll('.header__menu__link')

burgerBtn.addEventListener('click', function () {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
})

headerLink.forEach(function(item){
  item.addEventListener('click', function(){
    burgerMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
  })
})


const modalBtn = document.querySelectorAll('[data-modal-btn]');
const modalCloseBtn = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalBtn;
    const modal = document.querySelector('#' + modalId);

    modal.classList.remove('hidden');

    modal.querySelector('.partner-popup__content').addEventListener('click', function(e){
      e.stopPropagation();
    })

  })
});

modalCloseBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = this.closest('[data-modal]');
    modal.classList.add('hidden');
  })
});

allModals.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
  })
});

