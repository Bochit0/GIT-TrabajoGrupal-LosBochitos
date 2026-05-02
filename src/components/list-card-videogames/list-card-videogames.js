function createListCardVideogames(items) {
  return `
    <section class="list-card-videogames">
      <div class="list-card-videogames__header">
        <div class="list-card-videogames__title">
          <span class="list-card-videogames__icon"></span>
          <h2>Reseñas de Videojuegos</h2>
        </div>

        <p>
          Descubre las mejores reseñas de videojuegos organizadas por género.
          Explora nuestras categorías y encuentra tu próximo juego favorito.
        </p>
      </div>

      <div class="list-card-videogames__grid">
        ${items.map(item => `
          <a class="list-card-videogames__card" href="${item.link}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </a>
        `).join("")}
      </div>
    </section>

    <footer class="footer">
      <p>Los bochitos</p>
    </footer>
  `;
}

const videogameCategories = [
  {
    name: "Horror",
    link: "#horror",
    description: "Terror, suspenso y supervivencia en ambientes oscuros."
  },
  {
    name: "Sandbox",
    link: "#sandbox",
    description: "Mundos abiertos con libertad para explorar y crear."
  },
  {
    name: "Deporte",
    link: "#deporte",
    description: "Competencias, torneos y simulación deportiva."
  },
  {
    name: "Carrera",
    link: "#carrera",
    description: "Velocidad, autos y desafíos en distintas pistas."
  },
  {
    name: "Accion-Aventura",
    link: "#accion-aventura",
    description: "Combate, exploración e historias llenas de retos."
  },
  {
    name: "Shooter",
    link: "#shooter",
    description: "Disparos, precisión y acción intensa en combate."
  },
];

const container = document.getElementById("list-card-videogames");

if (container) {
  container.innerHTML = createListCardVideogames(videogameCategories);
}

if (!document.querySelector('link[href="./components/list-card-videogames/list-card-videogames.css"]')) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./components/list-card-videogames/list-card-videogames.css";
  document.head.appendChild(link);
}