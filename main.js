import { createCards } from "./modules/ui.js";
import { getPopularMovies, searchMovies } from "./modules/fetchMovies.js";
window.addEventListener("load", async () => {
  try {
    const cards = document.querySelector("#movieDisplay")
    const movies = await getPopularMovies();
    await movies.forEach((movie) => {
      let movieCard = createCards(movie);
      cards.appendChild(movieCard);
    });
  } catch (error) {
    console.error(error);
  }
});


