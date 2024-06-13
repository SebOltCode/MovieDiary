import { addMovieToLocalStorage } from "./storage.js";
import { searchMovies } from "./fetchMovies.js";

export function createCards(data) {
  const card = document.createElement("div");
  const movieImage = document.createElement("img");
  movieImage.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  movieImage.alt = data.title;
  const movieTitle = document.createElement("h3");
  movieTitle.textContent = data.title;
  const movieVote = document.createElement("p");
  movieVote.textContent = `Vote: ${data.vote_average}`;
  const addToFavorites = document.createElement("button");
  addToFavorites.textContent = "❤️";
  addToFavorites.onclick = () => {
    let favoritesMovies = {
      ID: data.id,
      Name: data.title,
      img_url: data.poster_path,
      vote_average: data.vote_average,
      comment:""
    };
    addMovieToLocalStorage("favorites", favoritesMovies);
  };
  card.appendChild(movieImage);
  card.appendChild(movieTitle);
  card.appendChild(movieVote);
  card.appendChild(addToFavorites);
  return card;
}

export async function displayCards(movies) {
  const cards = document.querySelector("#movieDisplay");
  cards.innerHTML = ""
  if (movies.length) {
    await movies.forEach((movie) => {
      let movieCard = createCards(movie);
      cards.appendChild(movieCard);
    });
  } else {
    cards.innerHTML = "no result";
  }
}

export async function handleSearch(query) {
  console.log(query);
  if (query) {
    try {
      const searchResults = await searchMovies(query);
      await displayCards(searchResults);
    } catch (error) {
      console.error(error);
    }
  }
}
function displaySuggestions(movies, suggestions) {
  suggestions.innerHTML = movies.map(movie => `<li onclick="selectMovie('${movie.title}')">${movie.title}</li>
  `).join('');
  showDialog()
}
function hideDialog(dialog) {
  dialog.style.display = 'none';
}
function showDialog(dialog) {
  dialog.style.display = 'block';
}

export async function handleInput(event) {
  let query = event.target.value
  const suggestions = document.querySelector("#searchDialog")
  let movies = searchMovies(query)
  suggestions.innerHTML = movies.map(movie =>`
  <li onclick="selectMovie('${movie.title}')">${movie.title}</li>
`).join('')
}