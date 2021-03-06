/* Usage  <div carousel="type"></div>
 * Include a carousel to your page.
 * type: best
 */

import {gen_carousel} from "./gen_carousel";
import {showSlides} from "./showSlides";

import {bindThemAll} from "./bindMovies.js";

export function carousel() {
    let slideNumber = 0
    let bloc = document.getElementsByTagName("*");
    for (let index = 0; index < bloc.length; index++) {
        let selectedElement = bloc[index];
        let carouselType = selectedElement.getAttribute("carousel");
        if (carouselType !== null) {
            gen_carousel(selectedElement, slideNumber, carouselType);
            slideNumber += 1;
        }
    }
    // Show and hide initial carousels
    for (let index = 0; index < 10; index++) {
        showSlides(1, index);
    }
    bindThemAll();
}