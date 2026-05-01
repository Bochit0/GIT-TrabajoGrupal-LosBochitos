class GameCard extends HTMLElement {
  connectedCallback() {
    const titulo  = this.getAttribute('title');
    const rating = this.getAttribute('rating');
    const src    = this.getAttribute('src');
    const alt    = this.getAttribute('alt') || titulo;

    this.innerHTML = `
      <div class="card">
        <div>
          <img class="card_image" src="${src}" alt="${alt}" />
        </div>
        <div class="card_info">
          <h3 class="card_title">${titulo}</h3>
          <div class="card_rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill card_star" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <span>${rating}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('game-card', GameCard);