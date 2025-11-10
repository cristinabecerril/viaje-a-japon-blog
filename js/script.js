// Contenidos de los artículos
const articles = {
  1: {
    title: "Templos de Kioto",
    img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=60",
    content: `
      <p>Kioto es el corazón espiritual de Japón. Sus templos, rodeados de cerezos y jardines zen, 
      invitan a la calma y la contemplación. Pasear por el Camino de la Filosofía o visitar el Kinkaku-ji 
      (Pabellón Dorado) son experiencias que conectan con la esencia más tradicional del país.</p>
      <p>Además, la ciudad conserva barrios como Gion, donde todavía es posible ver geishas y casas de té auténticas.</p>
    `
  },
  2: {
    title: "Tokio de noche",
    img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=60",
    content: `
      <p>Tokio, la ciudad que nunca duerme, ofrece un espectáculo de luces y sonidos que deja sin aliento. 
      Desde Shibuya hasta Akihabara, cada barrio tiene su propio universo. La modernidad tecnológica se mezcla 
      con templos ancestrales escondidos entre rascacielos.</p>
      <p>No te pierdas la vista desde la Tokyo Skytree o una cena en Omoide Yokocho, donde el pasado y el presente conviven.</p>
    `
  },
  3: {
    title: "Monte Fuji",
    img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60",
    content: `
      <p>El Monte Fuji, símbolo de Japón, es un lugar sagrado y una maravilla natural. 
      Su silueta perfecta domina el horizonte y atrae tanto a peregrinos como a fotógrafos. 
      En los alrededores se encuentran los Lagos Fuji, ideales para practicar senderismo y disfrutar de los onsen (baños termales).</p>
      <p>Ver el amanecer desde su cima es una de las experiencias más memorables que puedes vivir en Japón.</p>
    `
  }
};

// Selección de elementos
const cards = document.querySelectorAll(".blog-grid article");
const detail = document.getElementById("article-detail");

// Función para mostrar un artículo
function showArticle(id) {
  const art = articles[id];
  if (!art) return;

  detail.innerHTML = `
    <h2>${art.title}</h2>
    <img src="${art.img}" alt="${art.title}">
    ${art.content}
  `;

  // Marcar activo
  cards.forEach(card => card.classList.remove("active"));
  const activeCard = document.querySelector(`article[data-id="${id}"]`);
  if (activeCard) activeCard.classList.add("active");
}

// Evento al hacer clic en las tarjetas
cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    showArticle(id);
    window.scrollTo({
      top: detail.offsetTop - 80,
      behavior: "smooth"
    });
  });
});

// Mostrar el primer artículo al cargar
showArticle(1);
