<<<<<<< HEAD
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
=======
// read from localstorage
// create card
// add button to comment
// store comment in local storage

function generateMyJournal() {
  const output = document.getElementById("output-journal");
  const getMyJournal = JSON.parse(localStorage.getItem("favorites")) || [];
  
  getMyJournal.forEach((element) => {
    const getMovieTitle = element.Name;
    const getMovieImage = "https://image.tmdb.org/t/p/w500" + element.img_url;
    const getMovieID = element.ID;
    const getVotes = element.vote_average;
    let getComment = element.comment;

    // MovieCard erstellen und styling
    const movieCard = document.createElement("ul");
    movieCard.classList =
      "relative border p-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5";
    movieCard.id = getMovieID;
    const createTitle = document.createElement("li");
    createTitle.classList = "movie-title my-2 font-bold";
    createTitle.textContent = getMovieTitle;
    const createPoster = document.createElement("li");
    const createPosterImg = document.createElement("img");
    createPosterImg.src = getMovieImage;
    createPoster.appendChild(createPosterImg);
    createPoster.classList = "movie-poster relative";
    const movieVote = document.createElement("div");
    movieVote.innerHTML = `<div class="flex items-center"><img class="mr-2 bg-black p-1" src="https://img.icons8.com/?size=20&id=37974&format=png&color=ffffff"><p>${getVotes}</p></div>`;
    output.appendChild(movieCard);
    movieCard.append(createPoster, createTitle, movieVote);

    // FILM aus Journal entfernen
    const removeBtn = document.createElement("button");
    removeBtn.id = `remove-${getMovieID}`;
    removeBtn.classList = "absolute p-2 bg-black top-2 right-2";
    removeBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=EYnXuvqJDgzX&format=png&color=ffffff">`;
    createPoster.append(removeBtn);

    removeBtn.addEventListener("click", () => {
      let entries = JSON.parse(localStorage.getItem("favorites")) || [];
      entries = entries.filter((entry) => entry.ID !== getMovieID);
      localStorage.setItem("favorites", JSON.stringify(entries));
      location.reload();
    });

    //öffne comment dialog
    const addCommentDialogBtn = document.createElement("button");
    addCommentDialogBtn.classList = "absolute p-2 bg-black bottom-2 right-2 ";
    addCommentDialogBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=1ukEkhevqhKc&format=png&color=ffffff">`;
    createPoster.append(addCommentDialogBtn);

    //Kommentar schreiben

    const commentWindow = document.createElement("div");
    const closeWindow = document.createElement("img");
    closeWindow.src = "https://img.icons8.com/?size=15&id=71200&format=png&color=000000";
    closeWindow.classList = "absolute top-2 right-2 cursor-pointer";
    closeWindow.addEventListener("click", () => {
      location.reload();
    })

    commentWindow.classList = "comment-window z-20 hidden absolute bottom-11 p-2 bg-blue-100 shadow-md w-full";
    const commentTextArea = document.createElement("textarea");
    commentTextArea.id = `text-${getMovieID}`;
    commentTextArea.classList = "comment-textarea w-full p-2 mt-6 h-40 border";
    
    //commentWindow.innerHTML = `<textarea id="text-${getMovieID}" class="comment-textarea w-full p-2 h-40 border"></textarea>`;

    createPoster.append(commentWindow);

    addCommentDialogBtn.addEventListener("click", () => {
      const bgOverlay = document.getElementById("comment-overlay");
      bgOverlay.classList.remove("hidden");
      commentWindow.classList.remove("hidden");
    });

    // Kommentar Speichern
    const saveCommentBtn = document.createElement("button");
    saveCommentBtn.textContent = "speichern";
    commentWindow.append(closeWindow, commentTextArea, saveCommentBtn);
    saveCommentBtn.classList = "bg-black text-white p-1 my-2";
    saveCommentBtn.addEventListener("click", () => {
      const getCommentText = document.getElementById(
        `text-${getMovieID}`
      ).value;

      const entries = JSON.parse(localStorage.getItem("favorites")) || [];
      const entryIdToUpdate = getMovieID;
      const newComment = getCommentText;

      for (let i = 0; i < entries.length; i++) {
        if (entries[i].ID === entryIdToUpdate) {
          entries[i].comment = newComment;
          break;
        }
      }
      localStorage.setItem("favorites", JSON.stringify(entries));
      location.reload();
    });

    // Kommentar anzeigen
    if (getComment !== "") {
      const commentView = document.createElement("p");
      commentView.classList = "text-wrap text-sm";
      const commentViewHeadline = document.createElement("h4");
      commentViewHeadline.classList = "font-bold";
      commentViewHeadline.textContent = "Meine Notizen: ";
      commentView.textContent = getComment;
      movieCard.append(commentViewHeadline, commentView);
      const showInTextarea = document.getElementById(`text-${getMovieID}`);
      showInTextarea.append(getComment);
    }


    
  });
}


generateMyJournal();
>>>>>>> 4e21ac8e58bb04d9442bbf93287530e1a881c7f0
