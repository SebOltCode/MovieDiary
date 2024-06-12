const apiKey = "118b52da111b99ddfc41016d95301f2d";
const baseUrl = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  let url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=de-DE&page=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed:`);
    const data = await res.json();
    return await data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovies(query) {
  const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
    query
  )}&page=1`;

  try {
    const res = await fetch(searchUrl);
    if (!res.ok) throw new Error(`Request failed:`);
    const data = await res.json();
    const movies = await data.results;
    return movies;
  } catch (error) {
    console.log(error);
  }
}
