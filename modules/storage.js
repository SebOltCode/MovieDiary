export function addMovieToLocalStorage(key, value) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  const existingMovie = data.find(movie => movie.ID === value.ID)
  if (!existingMovie) {
    data.push(value);
      localStorage.setItem(key, JSON.stringify(data));
  } 
}
