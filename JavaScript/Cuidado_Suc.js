let dias = 0;
let salud = 100;
let agua = 100;
let luz = 100;
let prune = 100;

const aguaPlant = () => {
    agua += 10;
    salud += 5;
    updatePlant();
    updateStatusText("Has regado la planta.");
}

const luzPlant = () => {
    luz += 10;
    salud += 10;
    updatePlant();
    updateStatusText("Has dado mas luz a la planta.");
}

const prunePlant = () => {
    prune += 10;
    salud += 5;
    updatePlant();
    updateStatusText("Has podado la planta.");
}

const updatePlant = () => {
    let plantImage = document.getElementById("plant");
    let plantStatus = "";

    if (salud < 70) {
        plantImage.src = "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.14 PM (2).jpeg";
        plantStatus = "La planta se ve enferma.";
    } else if (agua < 70) {
        plantImage.src = "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.09 PM.jpeg";
        plantStatus = "La planta necesita agua.";
    } else if (luz < 70) {
        plantImage.src = "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.10 PM (1).jpeg";
        plantStatus = "La planta necesita Luz.";
    } else if (prune < 70) {
        plantImage.src = "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.10 PM.jpeg";
        plantStatus = "La planta necesita poda.";
    } else {
        plantImage.src = "..//Imagenes/WhatsApp Image 2021-09-23 at 2.18.11 PM.jpeg";
        plantStatus = "La planta se ve saludable.";
    }

    document.getElementById("agua-button").disabled = agua <= 0;
    document.getElementById("luz-button").disabled = luz <= 0;
    document.getElementById("prune-button").disabled = prune <= 0;

    document.getElementById("status-text").textContent = plantStatus;
    document.getElementById("dias").textContent = dias;
}

const updateStatusText = (message) => {
    dias += 1;
    agua -= 10;
    luz -= 10;
    prune -= 10;
    salud -= 5;

    if (salud <= 0) {
        salud = 0;
        document.getElementById("agua-button").disabled = true;
        document.getElementById("luz-button").disabled = true;
        document.getElementById("prune-button").disabled = true;
        document.getElementById("status-text").textContent = "Tu planta ha muerto.";
    } else {
        document.getElementById("status-text").textContent = message;
    }

    updatePlant();
}

document.getElementById("agua-button").addEventListener("click", aguaPlant);
document.getElementById("luz-button").addEventListener("click", luzPlant);
document.getElementById("prune-button").addEventListener("click", prunePlant);

updatePlant();
