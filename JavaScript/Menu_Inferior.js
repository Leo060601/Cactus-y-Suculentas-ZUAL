// Obtener elementos del DOM
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const numberButtons = document.querySelectorAll('.number');

// Función para navegar a la página anterior
function goToPreviousPage() {
  // Lógica para ir a la página anterior
  console.log('Ir a la página anterior');
}

// Función para navegar a la página siguiente
function goToNextPage() {
  // Lógica para ir a la página siguiente
  console.log('Ir a la página siguiente');
}

function goToPage(event) {
  event.preventDefault();
  const pageNumber = event.target.textContent.trim();
  const url = event.target.getAttribute('href'); // Obtener la URL directamente del atributo href del enlace
  window.location.href = url;
}

// Agregar listeners a los botones
previousButton.addEventListener('click', goToPreviousPage);
nextButton.addEventListener('click', goToNextPage);
numberButtons.forEach(button => {
  button.addEventListener('click', goToPage);
});
