const swiperHeader = new Swiper('.header__swiper', {
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,  
});

const swiperNew = new Swiper('.new__swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const openBtn = document.getElementById('popup-btn');
const closeBtn = document.getElementById('closePupup');
const pupup = document.getElementById('pupup');

openBtn.addEventListener('click', () => {
    pupup.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    pupup.classList.remove('open');
});