import {
  everyMovies
} from "../variables/variables.js";

export function bindThemAll() {
  // A function to bind every movie once the carousels are done
  let movie = "";
  let selectedElement = "";
  for (movie of everyMovies) {
    selectedElement = document.getElementById(movie[0]);

    // Caramel is the function with context, it sticks like a caramel!
    function caramel() {
      // Here is the code when clicking on a movie
      console.log(this.movie.title);
    }

    // We capture the context
    caramel = caramel.bind({
      movie: movie[1]
    });

    // We bind the function
    selectedElement.addEventListener("click", function(event) {
      event.stopPropagation;
      caramel();
    });
  }
}