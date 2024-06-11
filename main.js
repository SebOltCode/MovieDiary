const apiKey = '118b52da111b99ddfc41016d95301f2d';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=de-DE&page=1`;



document.getElementById('submitbtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchMovies(query);
});

function searchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(query)}&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.results);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
        });
}

function displayResults(movies) {
    const resultsDiv = document.getElementById('movieDisplay');
    resultsDiv.innerHTML = '';

    movies.forEach(movie => {
        if (movie.poster_path) { 
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const imgElement = document.createElement('img');
            imgElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            imgElement.alt = `${movie.title} Poster`;

            const detailsElement = document.createElement('div');
            detailsElement.classList.add('movie-details');

            const titleElement = document.createElement('h2');
            titleElement.textContent = movie.title;

            const overviewElement = document.createElement('p');
            overviewElement.textContent = movie.overview;

            detailsElement.appendChild(titleElement);
            detailsElement.appendChild(overviewElement);
            movieElement.appendChild(imgElement);
            movieElement.appendChild(detailsElement);

            resultsDiv.appendChild(movieElement);
        }
    });
}


