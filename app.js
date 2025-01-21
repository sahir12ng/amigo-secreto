let amigos = []; // Array para almacenar los nombres

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, escribe un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo); // Añade el nombre al array
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = ''; // Limpia el campo de texto
}
// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados previos

    let asignaciones;
    let intentos = 0;
    const maxIntentos = 100; // Evitar bucles infinitos

    do {
        asignaciones = [...amigos].sort(() => Math.random() - 0.5);
        intentos++;
    } while (!esAsignacionValida(asignaciones) && intentos < maxIntentos);

    if (intentos >= maxIntentos) {
        alert('No fue posible realizar un sorteo válido. Inténtalo de nuevo.');
        return;
    }

    // Mostrar resultados
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} le regala a ${asignaciones[index]}`;
        resultado.appendChild(li);
    });
}

// Verifica que la asignación sea válida (nadie se regale a sí mismo)
function esAsignacionValida(asignaciones) {
    return amigos.every((amigo, index) => amigo !== asignaciones[index]);
}
