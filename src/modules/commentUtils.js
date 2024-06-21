import { getFavorites, setFavorites } from './localStorageUtils.js';

export function addCommentButton(createPoster, getMovieID) {
  const addCommentDialogBtn = document.createElement("button");
  addCommentDialogBtn.classList = "absolute p-2 bg-black top-20 right-6 sm:block hidden";
  addCommentDialogBtn.innerHTML = `<img src="https://img.icons8.com/?size=30&id=1ukEkhevqhKc&format=png&color=ffffff">`;
  createPoster.append(addCommentDialogBtn);

  const commentWindow = document.createElement("div");
  const closeWindow = document.createElement("img");
  closeWindow.src = "https://img.icons8.com/?size=15&id=71200&format=png&color=000000";
  closeWindow.classList = "absolute top-2 right-2 cursor-pointer";
  closeWindow.addEventListener("click", () => {
    location.reload();
  });

  commentWindow.classList = "comment-window hidden z-20 top-0 left-0 absolute p-2 bg-blue-100 shadow-md w-full h-full";
  const commentTextArea = document.createElement("textarea");
  commentTextArea.id = `text-${getMovieID}`;
  commentTextArea.classList = "comment-textarea w-full p-2 mt-6 h-40 border";
  commentWindow.append();

  createPoster.append(commentWindow);

  const showCommentWindow = () => {
    const bgOverlay = document.getElementById("comment-overlay");
    bgOverlay.classList.remove("hidden");
    commentWindow.classList.remove("hidden");
  };

  addCommentDialogBtn.addEventListener("click", showCommentWindow);
  createPoster.addEventListener("click", showCommentWindow);

  const saveCommentBtn = document.createElement("button");
  saveCommentBtn.textContent = "save comment";
  commentWindow.append(closeWindow, commentTextArea, saveCommentBtn);
  saveCommentBtn.classList = "bg-black text-white p-1 my-2";
  saveCommentBtn.addEventListener("click", () => {
    saveComment(getMovieID, commentTextArea.value);
  });

  return commentWindow;
}

export function saveComment(getMovieID, commentText) {
  const favorites = getFavorites();
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].ID === getMovieID) {
      favorites[i].comment = commentText;
      break;
    }
  }
  setFavorites(favorites);
  location.reload(); // avoid reload but set datat data
}

export function displayComment(commentWindow, comment) {
  if (comment !== "") {
    const commentView = document.createElement("p");
    commentView.classList = "text-wrap text-sm";
    const commentViewHeadline = document.createElement("h4");
    commentViewHeadline.classList = "font-bold";
    commentViewHeadline.textContent = "Meine Notizen: ";
    commentView.textContent = comment;
    commentWindow.append(commentViewHeadline, commentView);
  }
}
