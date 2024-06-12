import { getPopularMovies, searchMovies } from "./modules/fetchMovies.js"

window.addEventListener('load', async () => {
    try {
        const movies = await getPopularMovies();
        console.log(movies);
        const smovies = await searchMovies("abcdefg");
        console.log(smovies);
    } catch (error) {
        console.error(error);
    }
});