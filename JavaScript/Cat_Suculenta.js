document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los conjuntos de carruseles
  const carouselContainers = document.querySelectorAll('.carousel-container');

  // Iterar sobre cada conjunto de carrusel
  carouselContainers.forEach(carouselContainer => {
    const carousel = carouselContainer.querySelector('.carousel');
    const prevButton = carouselContainer.querySelector('.prev-button');
    const nextButton = carouselContainer.querySelector('.next-button');
    const images = carousel.querySelectorAll('.catalogo-imagenS');

    let currentIndex = 0;

    // Configurar eventos de clic para los botones de navegación
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  });
});
