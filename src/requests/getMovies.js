import {actualPage, maximumMovies, movies, typeOfMovies} from "../variables/variables";

export function getMovies(requestedFilter = "best", numberOfMovies) {
    movies = Array();
    requestDB(requestedFilter, numberOfMovies);
    actualPage = 1;
    return movies;
}

function requestDB(requestedFilter, numberOfMovies) {
    let xmlhttp = new XMLHttpRequest();
    let method = "GET";
    let status = "";
    let urlRequest = typeOfMovies.get(requestedFilter);

    xmlhttp.open(method, urlRequest + "&page=" + actualPage, false);
    xmlhttp.onreadystatechange = function () {
        // In local files, status is 0 upon success in Mozilla Firefox
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
            status = xmlhttp.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                stockMovies(xmlhttp.responseText, numberOfMovies, requestedFilter);
            } else {
                // Oh no! There has been an error with the request!
                console.log("Something wrong, you'd better do something.");
            }
        }
    };
    xmlhttp.send();
}

function stockMovies(rawStock, numberOfMovies, requestedFilter) {
    let element = 0;
    rawStock = JSON.parse(rawStock);

    if ((rawStock.next === undefined) || (rawStock.next === null)) {
        actualPage = 0;
    }

    for (element;
         (element < rawStock.results.length) &&
         (movies.length < maximumMovies) &&
         (movies.length < numberOfMovies); element++) {
        movies = movies.concat(rawStock.results[element]);
    }

    if (movies.length === maximumMovies || movies.length === numberOfMovies) {
        actualPage = 0;
    }
    while (actualPage !== 0) {
        if (movies.length === maximumMovies || movies.length === numberOfMovies) {
            actualPage = 0;
        }
        actualPage++;
        requestDB(requestedFilter, numberOfMovies);
    }
}