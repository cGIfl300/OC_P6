export let appName = 'JustStreamIt';

// API Server usages
export let typeOfMovies = new Map();
typeOfMovies.set("best", "&sort_by=-imdb_score");
export let serverURL = "http://localhost:8000/api/v1/titles/?format=json";

// Carousel
export let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export const slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"];
export let numberOfShownElements = 4;
export let maximumMovies = 10; // maximum number of movies to retrieve