import {appName, movies} from "../variables/variables";
import {carousel} from "../carousel/carousel";

import {scrapData} from "../requests/scrapData"

export function start() {
    document.title = appName;
}

window.onload = function () {
    // Get the modal
    let modal = document.getElementById("myModal");
    // Hide modal Window
    modal.style.display = "none";
    // Generate the carousels
    carousel();
}