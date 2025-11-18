document.addEventListener("DOMContentLoaded", () => {
const slides = Array.from(document.querySelectorAll('.slide'));
    const btnPrev = document.querySelector('.slider-arrow--left');
    const btnNext = document.querySelector('.slider-arrow--right');

    let current = 0; // активний індекс

    function updateSlides() {
      const total = slides.length;
      const prev = (current - 1 + total) % total;
      const next = (current + 1) % total;

      slides.forEach((slide, idx) => {
        slide.classList.remove('slide--active', 'slide--prev', 'slide--next', 'slide--hidden');

        if (idx === current) {
          slide.classList.add('slide--active');
        } else if (idx === prev) {
          slide.classList.add('slide--prev');
        } else if (idx === next) {
          slide.classList.add('slide--next');
        } else {
          slide.classList.add('slide--hidden');
        }

        // Керуємо програванням відео
        const video = slide.querySelector('video');
        if (idx === current) {
          if (video && video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (video && !video.paused) {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    }

    btnPrev.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlides();
    });

    btnNext.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      updateSlides();
    });

    // Ініціалізація
    updateSlides();
  });