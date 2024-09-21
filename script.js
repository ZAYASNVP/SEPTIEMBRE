function mostrarGerberas() {
    const petalColor = document.getElementById('colorPicker').value;
    createGerberas(petalColor); // Pasa el color a createGerberas
    document.getElementById('gerberas').classList.remove('hidden'); // Muestra las gerberas
}

function createGerberas(petalColor) {
    const gerberaContainer = document.getElementById('gerberas');
    const flowers = gerberaContainer.querySelector('.flowers');
    flowers.innerHTML = ''; // Limpia las flores anteriores

    for (let i = 0; i < 5; i++) {
        const flowerContainer = document.createElement('div');
        flowerContainer.classList.add('flower-container');

        const gerbera = document.createElement('div');
        gerbera.classList.add('gerbera');

        // Crear pétalos
        for (let j = 0; j < 12; j++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            petal.style.backgroundColor = petalColor; // Usa el color proporcionado
            gerbera.appendChild(petal);
        }

        // Crear el centro de la flor (corazón)
        const heart = document.createElement('div');
        heart.classList.add('heart-shape'); // Usa la clase heart-shape para el corazón
        gerbera.appendChild(heart); // Añadir el corazón a la gerbera

        flowerContainer.appendChild(gerbera);
        flowers.appendChild(flowerContainer);
    }
}
