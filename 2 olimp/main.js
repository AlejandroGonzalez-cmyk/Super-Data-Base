// main.js
// main.js
fetch('encabeza.html')
    .then(response => response.text())
    .then(data => {
        // 1. Inserta el menú en el contenedor
        document.getElementById('header-placeholder').innerHTML = data;

        // 2. Detecta el archivo HTML actual en el que se encuentra el usuario
        const rutaActual = window.location.pathname;
        const paginaActual = rutaActual.substring(rutaActual.lastIndexOf('/') + 1);

        // 3. Busca todos los enlaces del menú
        const enlaces = document.querySelectorAll('.nav-link');
        enlaces.forEach(enlace => {
            // Lee el destino del enlace (ej: "frontnotagrup.html")
            const hrefEnlace = enlace.getAttribute('href');
            
            // Si coincide con la página actual, le aplica los estilos de destacado
            if (paginaActual === hrefEnlace) {
                enlace.style.backgroundColor = '#04295a'; // Fondo azul suave
                enlace.style.color = '#a8bce7';           // Texto azul fuerte
                enlace.style.fontWeight = '600';          // Negrita
            }
        });
    });