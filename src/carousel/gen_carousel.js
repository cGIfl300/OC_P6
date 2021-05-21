import {
  plusSlides
} from "./plusSlides";
import {
  getMovies
} from "../requests/get_movies";

export function gen_carousel(element, slideNumber, carouselType) {
  let nextTrigger = "next" + slideNumber;
  let prevTrigger = "prev" + slideNumber;
  let myMovies = "";
  let content = `
    <p>Slideshow ${carouselType}:</p>
<div class="slideshow-container">
    <table>
        <th>
            <a class="prev" id="prev${slideNumber}">&#10094;</a>
        </th>`;
  // Here is the loop
  myMovies = getMovies(carouselType, 10);
  for (let el = 0; el < myMovies.length; el++) {
    content += `<th>
              <div class="mySlides${slideNumber}">
                  <img src="${myMovies[el].image_url}">
              </div>
          </th>`;
  }
  // End of Hell
  content += `
        <th>
            <a class="next" id="next${slideNumber}">&#10095;</a>
        </th>
    </table>
</div>
    `;
  element.innerHTML += content;
  let nextElement = document.getElementById(nextTrigger);
  nextElement.addEventListener('click', function(event) {
    event.stopPropagation();
    plusSlides(1, slideNumber);
  });

  let previousElement = document.getElementById(prevTrigger);
  previousElement.addEventListener('click', function(event) {
    event.stopPropagation();
    plusSlides(-1, slideNumber);
  });
}