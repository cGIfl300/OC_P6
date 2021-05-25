let submarry = "";

export function getSummary(requestedURL) {
  submarry = "";
  requestURL(requestedURL);
  return submarry;
}

function requestURL(requestedURL) {
  let xmlhttp = new XMLHttpRequest();
  let method = "GET";
  let status = "";

  xmlhttp.open(method, requestedURL, false);
  xmlhttp.onreadystatechange = function() {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      status = xmlhttp.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        returnSubmarry(xmlhttp.responseText);
      } else {
        // Oh no! There has been an error with the request!
        console.log("Something wrong, you'd better do something.");
      }
    }
  };
  xmlhttp.send();
}

function returnSubmarry(responseText) {
  console.log(responseText);
  //let el = xmlhttp.querySelector("[data-testid=\"plot-xl\"]").innerHTML;
  submarry = responseText;
}