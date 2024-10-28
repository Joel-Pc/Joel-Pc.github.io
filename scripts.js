document.addEventListener("DOMContentLoaded", () => {
    // Aplica el efecto de fade-in a los elementos al hacer scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    // Activa el efecto en carga inicial y al hacer scroll
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);
});

// Validar y enviar el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío real

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Simulación de envío del formulario
    if (name && email && message) {
        alert("Gracias, " + name + ". Tu mensaje ha sido enviado correctamente.");
        document.getElementById("contactForm").reset(); // Limpiar el formulario
    } else {
        alert("Por favor, completa todos los campos requeridos.");
    }
});

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".icon-box, .timeline-item");

    function revealElements() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    revealElements();
    window.addEventListener("scroll", revealElements);
});
