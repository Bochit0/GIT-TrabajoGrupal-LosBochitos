const navItems = [
  { name: "Horror", link: "#horror" },
  { name: "Sandbox", link: "#sandbox" },
  { name: "Deporte", link: "#deporte" },
  { name: "Carrera", link: "#carrera" },
  { name: "Acción-Aventura", link: "#accion-aventura" },
  { name: "Shooter", link: "#shooter" },
];

const navbarContainer = document.getElementById("navbar");

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./components/navbar/navbar.css";
document.head.appendChild(cssLink);

navbarContainer.classList.add("header");

navbarContainer.innerHTML = `
  <nav class="navbar">
    <h1 class="logo">🎮 GameReviews</h1>

    <ul class="menu">
      ${navItems
        .map(item => `
          <li>
            <a href="${item.link}">${item.name}</a>
          </li>
        `)
        .join("")}
    </ul>
  </nav>
`;