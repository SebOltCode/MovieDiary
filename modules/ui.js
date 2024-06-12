import {addMovieToLocalStorage} from "./storage.js"

const cards = document.querySelector("#movieDisplay")
export function createCards(item) {
    
    const card = document.createElement('div')
    card.innerHTML = `
    <div class="card">
        <figure>
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" >
        </figure> 
        <div class="movie-info">
            <h3>${item.title}</h3>
            <p>Vote: ${item.vote_average}</p>
            <button onclick="handleAddToFavorites()"> ❤️</button>
        </div>
    </div>
    `;
    // handleAddToFavorites(item)
    cards.appendChild(card);
}

function handleAddToFavorites(item) {
    let favoritesMovies = {
        ID: item.id,
        Name: item.title,
        img_url: item.poster_path,
        vote_average: item.vote_average,
    }
    addMovieToLocalStorage("favorites", favoritesMovies)
}

