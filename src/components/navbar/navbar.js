class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const items = [
      { name: "Horror",          link: "#horror" },
      { name: "Sandbox",         link: "#sandbox" },
      { name: "Deporte",         link: "#deporte" },
      { name: "Carrera",         link: "#carrera" },
      { name: "Acción-Aventura", link: "#accion-aventura" },
      { name: "Shooter",         link: "#shooter" },
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