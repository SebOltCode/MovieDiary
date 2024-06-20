// localStorageUtils.js

export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }
  
export function setFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  