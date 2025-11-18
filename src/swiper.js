const swiper = new Swiper('.built-swiper', {
    speed: 500,
    spaceBetween: 24,
    slidesPerView: 1.1,  // трохи видно сусідній слайд на мобілці
    loop: true,
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 24 },
      1024:{ slidesPerView: 3, spaceBetween: 28 }
    },
    navigation: {
      nextEl: '.built-slider-arrow.next',
      prevEl: '.built-slider-arrow.prev'
    },
    allowTouchMove: true
  });