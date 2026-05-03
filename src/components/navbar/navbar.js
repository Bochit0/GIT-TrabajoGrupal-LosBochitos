class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const items = [
      { name:  "GOTY",            link: "#game-of-the-year" },
      { name: "Horror",          link: "#horror-video-game" },
      { name: "Sandbox",         link: "#sandbox-video-game" },
      { name: "Deporte",         link: "#sport-video-game" },
      { name: "Carrera",         link: "#carrera-video-game" },
      { name: "Acción-Aventura", link: "#accion-aventura-video-game" },
      { name: "Shooter",         link: "#shooter-video-game" },
    ];

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/navbar/navbar.css">
      <nav class="menu">
        ${items.map(item => `
          <a href="${item.link}">${item.name}</a>
        `).join('')}
      </nav>
    `;
  }
}

customElements.define('our-navbar', Navbar);