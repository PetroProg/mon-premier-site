// Fonctionnalité du carrousel
    document.addEventListener('DOMContentLoaded', function () {
      const carousel = document.querySelector('.carousel-container');
      const slides = document.querySelectorAll('.carousel-slide');
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
      let currentSlide = 0;

      function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
      });

      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      });
    });