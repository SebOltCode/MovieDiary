import { createCards } from "./modules/ui.js";
import { getPopularMovies, searchMovies } from "./modules/fetchMovies.js";
window.addEventListener("load", async () => {
  try {
    const movies = await getPopularMovies();
    await movies.forEach((movie) => {
      createCards(movie);
    });
  } catch (error) {
    console.error(error);
  }
});

const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
searchBtn.addEventListener("click", async () => {
  const results = await searchMovies(searchInput.value);
  if (results.length !== 0) {
    results.forEach((movie) => {
      createCards(movie);
    });
    console.log(results);
  }
});
