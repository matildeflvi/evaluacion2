const trabajos = [
    { titulo: "DONGUI", categoria: "Branding", imagen: "primerdongui.jpg", alt: "Proyecto 1" },
    { titulo: "KIMESAI", categoria: "Textil", imagen: "kimesai.jpg", alt: "Proyecto 2" },
    { titulo: "PICNIC", categoria: "Industrial", video: "picnic.mp4", alt: "Proyecto 3" },
    { titulo: "CRICK-CRACK", categoria: "Juegos y Editorial", imagen: "dragon.jpeg", alt: "Proyecto 4" }
];

const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach(trabajo => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const mediaHTML = trabajo.video 
        ? `<video src="${trabajo.video}" alt="${trabajo.alt}" loop muted autoplay playsinline></video>` 
        : `<img src="${trabajo.imagen}" alt="${trabajo.alt}">`;

    item.innerHTML = `
        ${mediaHTML}
        <div class="gallery-overlay">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});
