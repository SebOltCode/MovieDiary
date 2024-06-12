import { addMovieToLocalStorage } from "./storage.js";

export function createCards(data) {
  const card = document.createElement("div");
  const movieImage = document.createElement("img");
  movieImage.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
  movieImage.alt = data.title
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
  };
    addMovieToLocalStorage("favorites", favoritesMovies);
  };
  card.appendChild(movieImage);
  card.appendChild(movieTitle);
  card.appendChild(movieVote);
  card.appendChild(addToFavorites);
  return card;
}
