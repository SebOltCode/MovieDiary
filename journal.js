// Get all the movie cards
const movieCards = document.querySelectorAll('.movie-card');

// Loop through each movie card
movieCards.forEach(card => {
const addNotesBtn = card.querySelector('.add-notes-btn');
const notesContainer = card.querySelector('.notes-container');
const notesInput = card.querySelector('.notes-input');
const saveNotesBtn = card.querySelector('.save-notes-btn');

  // Add an event listener to the "Save Notes" button
saveNotesBtn.addEventListener('click', () => {
    // Get the movie data from the card
    const movieData = getMovieDataFromCard(card);

    // Get the notes from the textarea
    const notes = notesInput.value.trim();

    // Save the notes to the movie data in localStorage
    saveNotesToLocalStorage(movieData, notes);

    // Clear the textarea and hide the notes container
    notesInput.value = '';
    notesContainer.classList.add('hidden');
});
});

// Function to get the movie data from the card
function getMovieDataFromCard(card) {
  // Extract the movie data from the card elements
const title = card.querySelector('.movie-title').textContent;
const info = card.querySelector('.movie-info').textContent;
  // Extract other relevant data as needed

  // Return the movie data object
  return { title, info /* , other data */ };
}

// Function to save the notes to the movie data in localStorage
function saveNotesToLocalStorage(movieData, notes) {
  // Get the list of favorite movies from localStorage
const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  // Find the corresponding movie object in the list
const movieIndex = favoriteMovies.findIndex(movie => movie.title === movieData.title);

  // If the movie exists, update its notes
if (movieIndex !== -1) {
    favoriteMovies[movieIndex].notes = notes;
}

  // Save the updated list of favorite movies to localStorage
localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
}