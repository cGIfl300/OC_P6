import {slideId, slideIndex} from "../variables/variables";

export function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }

    // Alternative
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    // Code HERE - Number of elements of the slide to be shown...
    x[slideIndex[no] - 1].style.display = "block";
    x[slideIndex[no]].style.display = "block";
}