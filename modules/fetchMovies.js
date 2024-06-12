const apiKey = "118b52da111b99ddfc41016d95301f2d";
const baseUrl = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  let url = `${baseUrl}/movie/popular?language=en-US&page=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed:`);
    const data = await res.json();
    const popularMovies = await data.results;
    return popularMovies;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}&page=1`;

  try {
    const res = await fetch(searchUrl);
    if (!res.ok) throw new Error(`Request failed:`);
    const data = await res.json();
    const movies = await data.results;
    let result = movies.length? movies : "No result"
    return result;
  } catch (error) {
    console.log(error);
  }
}
