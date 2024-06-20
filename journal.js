import { getFavorites } from './modules/localStorageUtils.js';
import { createMovieCard } from './modules/createCard.js';
import { addRemoveButton } from './modules/removeButton.js';
import { addCommentButton, displayComment } from './modules/commentUtils.js';

function generateMyJournal() {
  const output = document.getElementById("output-journal");
  const favorites = getFavorites();
  
  favorites.forEach((element) => {
    const movieCard = createMovieCard(element);
    output.appendChild(movieCard);


    const commentWindow = addCommentButton(movieCard, element.ID);
    displayComment(commentWindow, element.comment);


    addRemoveButton(movieCard, element.ID);
  });
}

generateMyJournal();