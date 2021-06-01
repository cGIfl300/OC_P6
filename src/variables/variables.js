export let appName = 'JustStreamIt';

// API Server usages
export let typeOfMovies = new Map();
typeOfMovies.set("best", "http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score");
typeOfMovies.set("action", "http://localhost:8000/api/v1/titles/?format=json&genre=action");
typeOfMovies.set("adult", "http://localhost:8000/api/v1/titles/?format=json&genre=adult");
typeOfMovies.set("adventure", "http://localhost:8000/api/v1/titles/?format=json&genre=adventure");

// Carousel
export let slideIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export const slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"];
export let numberOfShownElements = 4;
export let maximumMovies = 7; // maximum number of movies to retrieve
export let movies = Array();
export let actualPage = 1;

// To remember every movies of every slides
export let everyMovies = new Map;