import { addMovieToLocalStorage } from "./storage.js";
import { searchMovies } from "./fetchMovies.js";

export function createCards(data) {
  const card = document.createElement("div");
  card.classList = "relative border p-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/6";
  const movieImage = document.createElement("img");

  if (data.poster_path === null) {
    movieImage.src = "./assets/No-Image-Placeholder.png";
  } else {
    movieImage.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  }
  movieImage.alt = data.title;
  const movieTitle = document.createElement("h3");
  movieTitle.classList = "my-2 font-bold";
  movieTitle.textContent = data.title;
  const movieVote = document.createElement("div");
  movieVote.innerHTML = `<div class="flex items-center"><img class="mr-2 bg-black p-1" src="https://img.icons8.com/?size=20&id=37974&format=png&color=ffffff"><p>${data.vote_average}</p></div>`;
  const addToFavorites = document.createElement("button");

  //checks if the movie is already in the favorites list
  let favoritesMovies = JSON.parse(localStorage.getItem("favorites")) || [];
  let isFavorite = favoritesMovies.some(movie => movie.ID === data.id);

  addToFavorites.innerHTML = `<img class="absolute ${isFavorite ? 'bg-red-800' : 'bg-black'} p-2 top-6 right-6 w-1/6 md:w-auto"  src="https://img.icons8.com/?size=30&id=16076&format=png&color=ffffff">`;
  addToFavorites.onclick = () => {
    let favoritesMovies = {
      ID: data.id,
      Name: data.title,
      img_url: data.poster_path,
      vote_average: data.vote_average,
      comment: "",
    };
    addToFavorites.innerHTML = `<img class="absolute bg-red-800 p-2 top-6 right-6 w-1/6 md:w-auto"  src="https://img.icons8.com/?size=30&id=16076&format=png&color=ffffff">`;
    addMovieToLocalStorage("favorites", favoritesMovies);
    showFavoriteDialog()
    setTimeout(()=>hiddenFavoriteDialog(), 1000);
  };
  card.appendChild(movieImage);
  card.appendChild(movieTitle);
  card.appendChild(movieVote);
  card.appendChild(addToFavorites);
  return card;
}

export async function displayCards(movies) {
  const cards = document.querySelector("#movieDisplay");
  cards.innerHTML = "";
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
let dialog = document.querySelector("#dialog");
function showFavoriteDialog() {
  dialog.classList = `fixed z-[999] top-0 right-0 w-full h-full bg-black bg-opacity-70 flex justify-center flex-col text-4xl text-white`;
}
function hiddenFavoriteDialog() {
  dialog.classList = "hidden"
}
