// Función para manejar el formulario de registro
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`¡Gracias por registrarte, ${name}! Te hemos enviado un correo de confirmación a ${email}.`);
            form.reset(); // Limpiar el formulario después del registro
        } else {
            alert("Por favor, completa todos los campos antes de registrarte.");
        }
    });
});

// Función para alternar la visibilidad de los temarios
document.addEventListener('DOMContentLoaded', function() {
    const courseTitles = document.querySelectorAll('.course ul li strong');
    
    courseTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            const temario = this.nextElementSibling;
            if (temario.style.display === 'block') {
                temario.style.display = 'none';
            } else {
                temario.style.display = 'block';
            }
        });
    });
});
