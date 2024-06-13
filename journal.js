// read from localstorage
// create card
// add button to comment
// store comment in local storage

function generateMyJournal() {
    const output = document.getElementById("output-journal");
    const getMyJournal = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(getMyJournal);
    getMyJournal.forEach((element) => {
      const getMovieTitle = element.Name;
      const getMovieImage = "https://image.tmdb.org/t/p/w500" + element.img_url;
      const getMovieID = element.ID;
      let getComment = element.comment;
      console.log(getMovieID);
  
      // MovieCard erstellen und styling
      const movieCard = document.createElement("ul");
      movieCard.classList = "p-4 border relative max-w-[342px]";
      movieCard.id = getMovieID;
      const createTitle = document.createElement("li");
      createTitle.className = "movie-title my-2 font-bold ";
      createTitle.textContent = getMovieTitle;
      const createPoster = document.createElement("li");
      const createPosterImg = document.createElement("img");
      createPosterImg.src = getMovieImage;
      createPoster.appendChild(createPosterImg);
      createPoster.className = "movie-poster relative";
      output.appendChild(movieCard);
      movieCard.append(createPoster, createTitle);


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
    //   const addCommentDialogBtn = document.createElement("button");
    //   addCommentDialogBtn.classList = "absolute p-2 bg-black bottom-2 right-2 ";
    //   addCommentDialogBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=1ukEkhevqhKc&format=png&color=ffffff">`;
    //   createPoster.append(addCommentDialogBtn);
  
      
  
      //Kommentar schreiben
  
    //   const commentWindow = document.createElement("div");
    //   commentWindow.classList = "comment-window hidden absolute bottom-11 p-2 m-3 bg-blue-100 shadow-md border-red";
    //   commentWindow.innerHTML = `<textarea id="text-${getMovieID}" class="comment-textarea w-full p-2 h-40 border"></textarea>`;
    //   createPoster.append(commentWindow);
  
    //   addCommentDialogBtn.addEventListener("click", () => {
    //     commentWindow.classList.remove("hidden");
    //   });
  
      // Kommentar Speichern
    //   const saveCommentBtn = document.createElement("button");
    //   saveCommentBtn.textContent = "speichern";
    //   commentWindow.append(saveCommentBtn);
  
    //   saveCommentBtn.addEventListener("click", () => {
    //     const getCommentText = document.getElementById(
    //       `text-${getMovieID}`
    //     ).value;
  
    //     const entries = JSON.parse(localStorage.getItem("favorites")) || [];
    //     const entryIdToUpdate = getMovieID;
    //     const newComment = getCommentText;
  
    //     for (let i = 0; i < entries.length; i++) {
    //       if (entries[i].ID === entryIdToUpdate) {
    //         entries[i].comment = newComment;
    //         break;
    //       }
    //     }
  
    //     localStorage.setItem("favorites", JSON.stringify(entries));
    //     location.reload();
    //   });
  
      // Kommentar anzeigen
    //   if (getComment !== "") {
    //     console.log(getComment);
    //     const commentView = document.createElement("p");
    //     commentView.classList = "text-wrap text-sm";
    //     const commentViewHeadline = document.createElement("h4");
    //     commentViewHeadline.classList = "font-bold";
    //     commentViewHeadline.textContent = "Meine Notizen: ";
    //     commentView.textContent = getComment;
    //     movieCard.append(commentViewHeadline, commentView);
    //     const showInTextarea = document.getElementById(`text-${getMovieID}`);
    //     showInTextarea.append(getComment);
    //   }
  
     
  
      // STYLING
      let btnStyle = "bg-black text-white p-1 my-2";
      //saveCommentBtn.classList = btnStyle;
    });
  }
  
  generateMyJournal();
  