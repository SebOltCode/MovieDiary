import { createCards } from "./modules/ui.js"
import { getPopularMovies, searchMovies } from "./modules/fetchMovies.js"

window.addEventListener('load', async () => {
    try {
        const movies = await getPopularMovies();
        // const smovies = await searchMovies("abcdefg");
        movies.forEach((movie)=>{
            createCards(movie)
        })
    } catch (error) {
        console.error(error);
    }
});

