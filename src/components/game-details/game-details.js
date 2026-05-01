export function renderGameDetails(gameData, parentElement) {
    // Limpiamos el contenedor
    parentElement.innerHTML = '';

    // Creamos el contenedor principal
    const detailsView = document.createElement('div');
    detailsView.classList.add('game-details-view');

    // TODO: Agregar el HTML dinámico aquí
    
    // Inyectamos en el DOM
    parentElement.appendChild(detailsView);
}