export function addMovieToLocalStorage(key, value) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
}
