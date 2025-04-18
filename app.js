// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el formulario de inicio de sesión por su ID
    const loginForm = document.getElementById('loginForm');

    // Añadimos un evento de escucha para cuando se envíe el formulario
    loginForm.addEventListener('submit', function(event) {
        // Prevenimos el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();

        // Obtenemos los valores ingresados en los campos de usuario y contraseña
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Verificamos si el usuario y la contraseña son "admin"
        if (username === 'admin' && password === 'admin') {
            // Si las credenciales son correctas, redirigimos a la página de administrador
            // **Importante:** Asegúrate de tener creada una página llamada "admin.html"
            window.location.href = 'admin.html';
            // Puedes agregar aquí un mensaje de éxito si lo deseas
            console.log('Inicio de sesión exitoso como administrador.');
        } else {
            // Si las credenciales son incorrectas, mostramos un mensaje de error
            alert('Credenciales incorrectas. Intente nuevamente.');
            // O puedes mostrar el error en el mismo formulario de una manera más elegante
            console.error('Intento de inicio de sesión fallido.');
        }

        // Limpiamos los campos del formulario después del intento de inicio de sesión
        usernameInput.value = '';
        passwordInput.value = '';
    });
});

// **Nota importante:**
// Este código solo realiza una verificación básica en el lado del cliente.
// En una aplicación real, las credenciales de administrador nunca deben estar codificadas directamente en el código del cliente por razones de seguridad.
// La autenticación segura se realiza en el lado del servidor.
// Para este ejemplo y tu solicitud específica, esta implementación simple es suficiente.
// Recuerda crear un archivo llamado "admin.html" con el contenido de la página de administración.


