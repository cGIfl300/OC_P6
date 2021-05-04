import {showSlides} from "./showSlides";
import {slideIndex} from "../variables/variables";

export function plusSlides(n, no) {
    // Moves the slideIndex (no) to n offsets
    showSlides(slideIndex[no] += n, no);
}