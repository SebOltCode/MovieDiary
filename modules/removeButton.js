// removeButton.js

import { getFavorites, setFavorites } from './localStorageUtils.js';

export function addRemoveButton(createPoster, getMovieID) {
  const removeBtn = document.createElement("button");
  removeBtn.id = `remove-${getMovieID}`;
  removeBtn.classList = "absolute p-2 bg-black top-6 right-6";
  removeBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=EYnXuvqJDgzX&format=png&color=ffffff">`;
  createPoster.append(removeBtn);

  removeBtn.addEventListener("click", () => {
    let favorites = getFavorites();
    favorites = favorites.filter((entry) => entry.ID !== getMovieID);
    setFavorites(favorites);
    location.reload();
  });
}