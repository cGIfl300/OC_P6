import {appName} from "../variables/variables";
import {carousel} from "../carousel/carousel";

import {getSummary} from "../requests/get_summary"

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
    // BUG
    getSummary("https://www.imdb.com/title/tt1508669/");
    console.log(getSummary("https://www.imdb.com/title/tt1508669/"));
    // END OF BUG
}