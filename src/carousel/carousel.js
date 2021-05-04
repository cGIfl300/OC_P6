/* Usage  <div carousel="type"></div>
 * Include a carousel to your page.
 * type: best
 */

import {gen_carousel} from "./gen_carousel";
import {showSlides} from "./showSlides";

export function carousel() {
    let carouselNumber = 0
    let bloc = document.getElementsByTagName("*");
    for (let index = 0; index < bloc.length; index++) {
        let selectedElement = bloc[index];
        let carouselType = selectedElement.getAttribute("carousel");
        if (carouselType !== null) {
            //getMovies(selectedElement, carouselType);
            gen_carousel(selectedElement, carouselNumber);
            carouselNumber += 1;
        }
    }
    // Show initial carousels
    for (let index = 0; index < 10; index++) {
        showSlides(1, index);
    }
}