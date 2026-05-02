import '/layout/layout.js';
import '../components/list-card-videogames/list-card-videogames.js';

class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <our-layout>
        <game-card-list></game-card-list>
      </our-layout>
    `;

    this._loadGenre();
    window.addEventListener('hashchange', () => this._loadGenre());
  }

  _loadGenre() {
    const hash  = window.location.hash || '#game-of-the-year';
    const genre = hash.replace('#', ''); 

    const gameList = this.querySelector('game-card-list');
    if (gameList) {
      gameList.setAttribute('game', genre);
    }
  }
}

customElements.define('page-home', HomePage);