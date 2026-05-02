class GameCardList extends HTMLElement {
  async connectedCallback() {
    const gameName = this.getAttribute('game');

    if (!gameName) {
      this.innerHTML = `<p>No se especificó el juego</p>`;
      return;
    }

    if (!document.getElementById('game-card-list-styles')) {
      const link = document.createElement('link');
      link.id = 'game-card-list-styles';
      link.rel = 'stylesheet';
      link.href = 'components/list-card-videogames/list-card-videogames.css';
      document.head.appendChild(link);
    }

    try {
      const res = await fetch(`./data/${gameName}/${gameName}.json`);
      const games = await res.json();

      this.innerHTML = `
        <div class="game-list">
          ${games.map(g => `
            <game-card
              title="${g.title}"
              rating="${g.rating}"
              src="${g.src}"
              alt="${g.alt || g.title}">
            </game-card>
          `).join('')}
        </div>
      `;

    } catch (err) {
      console.error(err);
      this.innerHTML = `<p>Error cargando datos</p>`;
    }
  }
}

customElements.define('game-card-list', GameCardList);