import {numberOfShownElements, slideId, slideIndex} from "../variables/variables";

export function showSlides(n, no) {
    // Hide and show elements from the slide

    let element;
    let selectedSlide = document.getElementsByClassName(slideId[no]);
    let countdown = numberOfShownElements;
    let maxCursor = selectedSlide.length - numberOfShownElements;

    if (slideIndex[no] > maxCursor) {
        slideIndex[no] = maxCursor
    }
    if (slideIndex[no] < 0) {
        slideIndex[no] = 0
    }

    // Hide every element
    for (element = 0; element < selectedSlide.length; element++) {
        selectedSlide[element].style.display = "none";
    }
    // Show the current selection
    for (element = slideIndex[no]; element < selectedSlide.length; element += 1) {
        if (countdown > 0) {
            selectedSlide[element].style.display = "block";
            countdown--;
        }
    }
}