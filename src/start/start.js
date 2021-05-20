import {
  appName
} from "../variables/variables";
import {
  carousel
} from "../carousel/carousel";
import {
  getMovies
} from "../requests/get_movies";

import {
  typeOfMovies
} from "../variables/variables.js";

export function start() {
  document.title = appName;
}

window.onload = function() {
  carousel();
  // DEBUG
  let test = getMovies("action", 10);
  console.log("Qu'est-ce qu'il y a dans test ?");
  for (let element = 0; element < test.length; element++) {
    console.log("Test[" + element + "] " + test[element].title);
  }
  // END DEBUG
  // DEBUG
  test = getMovies("best", 10);
  console.log("Qu'est-ce qu'il y a dans test ?");
  for (let element = 0; element < test.length; element++) {
    console.log("Test[" + element + "] " + test[element].title);
  }
  // END DEBUG
  // DEBUG
  test = getMovies("adult", 10);
  console.log("Qu'est-ce qu'il y a dans test ?");
  for (let element = 0; element < test.length; element++) {
    console.log("Test[" + element + "] " + test[element].title);
  }
  // END DEBUG
  // DEBUG
  test = getMovies("adventure", 10);
  console.log("Qu'est-ce qu'il y a dans test ?");
  for (let element = 0; element < test.length; element++) {
    console.log("Test[" + element + "] " + test[element].title);
  }
  // END DEBUG
}