// createCard.js

export function createMovieCard(element) {
    const movieCard = document.createElement("ul");
    movieCard.classList = "relative border p-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5";
    movieCard.id = element.ID;
  
    const createTitle = document.createElement("li");
    createTitle.classList = "movie-title my-2 font-bold";
    createTitle.textContent = element.Name;
  
    const createPoster = document.createElement("li");
    const createPosterImg = document.createElement("img");
    
    createPosterImg.src = element.img_url ? `https://image.tmdb.org/t/p/w500${element.img_url}` : "./assets/No-Image-Placeholder.png";
  
    createPoster.appendChild(createPosterImg);
    createPoster.classList = "movie-poster relative";
  
    const movieVote = document.createElement("div");
    movieVote.innerHTML = `<div class="flex items-center"><img class="mr-2 bg-black p-1" src="https://img.icons8.com/?size=20&id=37974&format=png&color=ffffff"><p>${element.vote_average}</p></div>`;
  
    movieCard.append(createPoster, createTitle, movieVote);
  
    return movieCard;
  }
  