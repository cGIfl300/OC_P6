let $ = "";

export function scrapData(movie) {
    movie.summary = null;
        requestURL(movie);
    return movie;
}

function requestURL(movie) {
    let xmlhttp = new XMLHttpRequest();
    let method = "GET";
    let status = "";

    xmlhttp.open(method, movie.url, false);

    xmlhttp.onreadystatechange = function () {
        // In local files, status is 0 upon success in Mozilla Firefox
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
            status = xmlhttp.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully

                // Parse and then call the scraper
                let parser = JSON.parse(xmlhttp.responseText);
                add_data(parser, movie);

            } else {
                // Oh no! There has been an error with the request!
                console.log("Something wrong, you'd better do something.");
            }
        }
    };
    xmlhttp.send();
}

function add_data($, movie) {
    // Get summary
    movie.long_summary = $.long_description;
    movie.summary = $.description;

    // Get duration
    movie.duration = $.duration;

    // Get country
    movie.country = $.countries;

    // WGI
    movie.boffice = $.avg_vote;
    if ($.avg_vote === null) {
        movie.boffice = "not avaible"
    }
}