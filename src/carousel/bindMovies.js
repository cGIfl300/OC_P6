import {
  everyMovies
} from "../variables/variables.js";

import {
  topMovie
} from "../topmovie/topmovie.js";
import {
  modalShow
} from "../modal/modal"

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

    // Modal Window to generate a modal window on the fly
    function modalWindow() {
      // Code of the modal window Here
      modalShow(this.movie);
    }

    // Contaxt Capture for the modal
    modalWindow = modalWindow.bind({
      movie: movie[1]
    });

    // We bind the function
    selectedElement.addEventListener("click", function(event) {
      event.stopPropagation;
      // Get the modal
      let modal = document.getElementById("myModal");
      modal.style.display = "block";
      modalWindow();
    });

    selectedElement.addEventListener("mouseover", function(event) {
      event.stopPropagation;
      caramel();
    });
  }
}