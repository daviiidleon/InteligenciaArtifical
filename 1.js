document.getElementById('greetButton').addEventListener('click', function() {
    // Toma el valor ingresado en el input
    const name = document.getElementById('nameInput').value;

    // Muestra un mensaje personalizado si hay un nombre, o un mensaje genérico si no lo hay
    const greetingMessage = name ? `¡Hola, ${name}! Bienvenido a mi página.` : 'Por favor, ingresa tu nombre.';

    // Inserta el saludo en el HTML
    document.getElementById('greetingMessage').innerText = greetingMessage;
});