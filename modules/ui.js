
export function createCards(item) {
    const cards = document.querySelector("#movieDisplay")
    const card = document.createElement('div')
    card.innerHTML = `
    <div class="card">
        <figure>
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" >
        </figure> 
        <div class="movie-info">
            <h3>${item.title}</h3>
            <p>${item.overview}</p>
            <button onclick="handleAddToFavorites(${encodeURIComponent(JSON.stringify(item))})"> ❤️</button>
        </div>
    </div>
    `;
    
    cards.appendChild(card);
}

export function handleAddToFavorites() {
    
}