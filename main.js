import { displayCards, handleSearch } from "./modules/ui.js";
import { getPopularMovies} from "./modules/fetchMovies.js";
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const movies = await getPopularMovies();
    displayCards(movies);
    const searchBtn = document.querySelector("#searchBtn");
    const searchInput = document.querySelector("#searchInput");

    searchBtn.addEventListener("click",()=>{
      handleSearch(searchInput.value        )
    })
  } catch (error) {
    console.error(error);
  }
});
