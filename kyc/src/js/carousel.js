export const initializeSwiper = () => {
  // Boarding Swiper
  const boardingSwiperElement = document.querySelector(".boarding-swiper");
  if (boardingSwiperElement) {
    new Swiper(".boarding-swiper", {
      speed: 1000,
      parallax: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      loop: false,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // TF Swiper
  const tfSwiperElement = document.querySelector(".tf-swiper");
  if (tfSwiperElement) {
    const spacing = tfSwiperElement.dataset.spaceBetween;
    const preview = tfSwiperElement.dataset.preview;
    const tablet = tfSwiperElement.dataset.tablet;
    const desktop = tfSwiperElement.dataset.desktop;

    new Swiper(".tf-swiper", {
      speed: 1500,
      slidesPerView: preview,
      loop: false,
      spaceBetween: parseInt(spacing),
      observer: true,
      observeParents: true,
      breakpoints: {
        1024: {
          slidesPerView: desktop,
        },
        768: {
          slidesPerView: tablet,
        },
      },
    });
  }

};
