import {
  everyMovies
} from "../variables/variables.js";

import {
  topMovie
} from "../topmovie/topmovie.js";

export function bindThemAll() {
  // A function to bind every movie once the carousels are done
  let movie = "";
  let selectedElement = "";

  // We print something for the topMovie
  topMovie(everyMovies.get("movie0_0"));

  for (movie of everyMovies) {
    selectedElement = document.getElementById(movie[0]);

    // Caramel is the function with context, it sticks like a caramel!
    function caramel() {
      // Here is the code when clicking on a movie
      topMovie(this.movie);
    }

    // We capture the context
    caramel = caramel.bind({
      movie: movie[1]
    });

    // We bind the function
    // selectedElement.addEventListener("click", function(event) {
    //   event.stopPropagation;
    //   caramel();
    // });
    selectedElement.addEventListener("mouseover", function(event) {
      event.stopPropagation;
      caramel();
    });
  }
}