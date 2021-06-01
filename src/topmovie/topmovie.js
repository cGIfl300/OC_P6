import {scrapData} from "../requests/scrapData";

export function topMovie(movie) {
    // Function to print the top movie
    scrapData(movie);
    let target = document.getElementById("topmovie");

    target.innerHTML = `
  <table>
    <tr>
      <td width="200px" height="230px">${movie.title}
      </td>
      <td rowspan="3">
        <img src="${movie.image_url}">
      </td>
    </tr>
    <tr>
    <td>
    ${movie.summary}
    </td>
    </tr>
    <tr>
      <td class="playbutton">
      <a href="${movie.imdb_url}" target="_blank"><center>Play</center></a>
      </td>
    </tr>
  </table>
  `;
}