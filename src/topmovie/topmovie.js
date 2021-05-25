export function topMovie(movie) {
  // Function to print the top movie

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
    Here is the film resume.
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