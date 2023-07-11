const suculentaImg = document.querySelector(".suculenta");
const cactus = document.querySelectorAll(".grid img");
const suculentas = [
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.09 PM.jpeg",
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.10 PM (1).jpeg",
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.10 PM.jpeg",
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.11 PM.jpeg",
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.12 PM (1).jpeg",
  "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.12 PM.jpeg"
];

function shuffleElements(parent) {
  const elements = Array.from(parent.children);
  const selectedElements = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    selectedElements.push(elements[randomIndex]);
    elements.splice(randomIndex, 1);
  }
  parent.innerHTML = '';
  selectedElements.forEach((element) => {
    parent.appendChild(element);
  });
}

function randomSuculenta() {
  const randomNumber = Math.floor(Math.random() * suculentas.length);
  return suculentas[randomNumber];
}

function displaySuculenta() {
  const randomSuculentaImg = randomSuculenta();
  suculentaImg.src = randomSuculentaImg;
  suculentaImg.classList.add("suculenta");
}

shuffleElements(document.querySelector(".grid"));
displaySuculenta();

cactus.forEach((c) => {
  c.addEventListener("click", () => {
    if (c.classList.contains("suculenta")) {
      alert("¡Felicidades! Encontraste la suculenta.");
      location.reload();
    } else {
      alert("Lo siento, este no es la suculenta. Sigue buscando.");
    }
  });
});
