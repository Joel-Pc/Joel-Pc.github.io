// Datos de ejemplo para las propiedades
const properties = [
    { id: 1, name: "Casa en Playa", price: 300000, location: "playa", img: "inmo1.jpg" },
    { id: 2, name: "Departamento en Ciudad", price: 500000, location: "ciudad", img: "inmo2.jpg" },
    { id: 3, name: "Villa en Montaña", price: 700000, location: "montaña", img: "inmo3.jpg" },
    { id: 4, name: "Casa de Campo", price: 200000, location: "campo", img: "modelo2.jpg" },
    { id: 4, name: "Casa de Campo", price: 200000, location: "campo", img: "modelo2.jpg" },
    { id: 4, name: "Casa de Campo", price: 200000, location: "campo", img: "modelo2.jpg" }
];

// Función para renderizar propiedades en la página
function renderProperties(propertiesList) {
    const propertiesListContainer = document.getElementById("propertiesList");
    propertiesListContainer.innerHTML = ""; // Limpiar propiedades actuales

    propertiesList.forEach(property => {
        propertiesListContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="property-card">
                    <img src="${property.img}" alt="${property.name}" class="property-card-img">
                    <div class="property-card-body">
                        <h5 class="property-card-title">${property.name}</h5>
                        <p class="property-card-price">$${property.price.toLocaleString()}</p>
                        <button class="btn btn-primary btn-view-details">Ver Detalles</button>
                        <button class="btn btn-outline-primary btn-add-favorite">Agregar a Favoritos</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filtrar propiedades
function filterProperties() {
    const selectedPrice = parseInt(document.getElementById("filterPrice").value);
    const selectedLocation = document.getElementById("filterLocation").value;

    const filteredProperties = properties.filter(property => {
        return (
            (!selectedPrice || property.price <= selectedPrice) &&
            (!selectedLocation || property.location === selectedLocation)
        );
    });

    renderProperties(filteredProperties);
}

// Limpiar filtros
document.getElementById("clearFilters").addEventListener("click", () => {
    document.getElementById("filterPrice").value = "";
    document.getElementById("filterLocation").value = "";
    renderProperties(properties);
});

// Inicializar la lista de propiedades y agregar eventos de filtrado
document.addEventListener("DOMContentLoaded", () => {
    renderProperties(properties); // Renderiza todas las propiedades al cargar la página

    document.getElementById("filterPrice").addEventListener("change", filterProperties);
    document.getElementById("filterLocation").addEventListener("change", filterProperties);
});
