const apiKey = '118b52da111b99ddfc41016d95301f2d';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=de-DE&page=1`;

document.getElementById('submitbtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});
function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=de-DE&query=${encodeURIComponent(query)}&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
        });
}
console.log(searchMovies);