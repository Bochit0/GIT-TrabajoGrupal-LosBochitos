function createNavbar(items) {
  return `
    <nav class="navbar">
      <h1 class="logo">🎮Games Reviews</h1>
      <ul class="menu">
        ${items.map(item => `
          <li><a href="${item.link}">${item.name}</a></li>
        `).join("")}
      </ul>
    </nav>
  `;
}

const navItems = [
  { name: "Horror", link: "#horror" },
  { name: "Sandbox", link: "#sandbox" },
  { name: "Deporte", link: "#deporte" },
  { name: "Carrera", link: "#carrera" },
  { name: "Acción-Aventura", link: "#accion-aventura" },
  { name: "Shooter", link: "#shooter" },
];

const navbarContainer = document.getElementById("navbar");

if (navbarContainer) {
  navbarContainer.innerHTML = createNavbar(navItems);
  navbarContainer.classList.add("header");
}

if (!document.querySelector('link[href="./components/navbar/navbar.css"]')) {
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "./components/navbar/navbar.css";
  document.head.appendChild(cssLink);
}