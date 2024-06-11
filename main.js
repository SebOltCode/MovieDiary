const apiKey = '118b52da111b99ddfc41016d95301f2d';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=de-DE&page=1`;



async function fetchData(){

    try{

        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const response = await fetch(`${url}${searchInput}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");}
        
        if(response.json, searchInput) {
            response.json === searchInput;

        const data = await response.json();
        const movieImg = data.poster_path;
        const imgElement = document.getElementById("MovieCoverPic");

        imgElement.src = movieImg;
        imgElement.style.display = "block";}
        
            console.log("No Movie with this Name in Database")
    }
    catch(error){
        console.error(error);
    }
}



