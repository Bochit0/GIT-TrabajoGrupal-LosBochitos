export function renderGameDetails(gameData, parentElement) {
    parentElement.innerHTML = '';

    const detailsView = document.createElement('div');
    detailsView.classList.add('game-details-view');

    const htmlTemplate = `
        <link rel="stylesheet" href="components/game-details/game-details.css">
        <a href="#" class="back-link">← Volver a ${gameData.genre}</a>
        <div class="game-details-container">
            <div class="game-cover-column">
                <img src="${gameData.coverUrl}" alt="${gameData.title}" class="game-cover-image">
            </div>
            <div class="game-info-column">
                <h1 class="game-title">${gameData.title}</h1>
                <div class="game-rating"><span class="star-icon">⭐</span> ${gameData.rating}/10</div>
                <hr class="separator">
                <div class="meta-item">
                    <span class="meta-icon">📅</span>
                    <div class="meta-text">
                        <span class="meta-label">Fecha de lanzamiento</span>
                        <span class="meta-value">${gameData.releaseDate}</span>
                    </div>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">👤</span>
                    <div class="meta-text">
                        <span class="meta-label">Desarrollador</span>
                        <span class="meta-value">${gameData.developer}</span>
                    </div>
                </div>
                <hr class="separator">
                <h2 class="section-subtitle">Descripción</h2>
                <p class="game-description">${gameData.description}</p>
                <div class="genre-tag-container">
                    <button class="genre-tag">${gameData.genre}</button>
                </div>
            </div>
        </div>
    `;

    detailsView.innerHTML = htmlTemplate;
    parentElement.appendChild(detailsView);
}