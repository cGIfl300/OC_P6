export function getMovies(selectedElement, requestedMovies) {
    for (let index = 0; index < 16; index++) {
        // selectedElement.innerHTML = selectedElement.innerHTML + "Element " + index + " " + requestedMovies;
        selectedElement.innerHTML += `<item>index numéro ${index}</item><br>`;
    }
}