// loadHeaderFooter.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo header.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error cargando el header:", error));

    // Cargar el footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo footer.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error cargando el footer:", error));
});
