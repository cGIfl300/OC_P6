import {showSlides} from "../carousel/showSlides";

export let appName = 'JustStreamIt';
export let typeOfMovies = new Map();
typeOfMovies.set("best", "url to best movies");
export let serverURL = "http://localhost:8000/api/v1/titles/?format=json";

// Carousel
export let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1];
export const slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"];
export let numberOfShownElements = 2;