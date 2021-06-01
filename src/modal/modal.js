import {scrapData} from "../requests/scrapData";

export function modalShow(movie) {
    let everyGenre = "";
    let directors = "";
    let actors = "";
    scrapData(movie);
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Fill the modal with Movie content
    for (let el of movie.genres) {
        everyGenre = everyGenre + el + " ";
    }
    for (let el of movie.directors) {
        directors = directors + el + " ";
    }
    for (let el of movie.actors) {
        actors = actors + el + " ";
    }

    document.getElementsByClassName("modalText")[0].innerHTML = `
<p>L’image de la pochette du film</p>
<img src="${movie.image_url}">
<p>Le Titre du film : ${movie.title}</p>
<p>Le genre complet du film : ${everyGenre}</p>
<p>Sa date de sortie : ${movie.year}</p>
<p>Son Rated : ${movie.votes}</p>
<p>Son score Imdb : ${movie.imdb_score}</p>
<p>Son réalisateur : ${directors}</p>
<p>La liste des acteurs : ${actors}</p>
<p>Sa durée : ${movie.duration}</p>
<p>Le pays d’origine : ${movie.country}</p>
<p>Le résultat au Box Office: ${movie.boffice}</p>
<p>Le résumé du film: ${movie.long_summary}</p>
  `
}