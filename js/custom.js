lucide.createIcons();

const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})