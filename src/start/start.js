import {appName} from "../variables/variables";
import {carousel} from "../carousel/carousel";
import {getMovies, requestDB} from "../requests/get_movies";

export function start() {
    document.title = appName;
}

window.onload = function () {
    carousel();
    // DEBUG
    let test = getMovies(document.getElementById("id01"), "best", 10);
    console.log("Qu'est-ce qu'il y a dans test ?");
    for (let element = 0; element < test.length; element++) {
        console.log("Test[" + element + "] " + test[element].title);
    }
    // END DEBUG
}