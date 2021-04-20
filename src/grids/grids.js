export function gridGenerator(width, height) {
    /*
    width: width.
    height: height.
     */
    let grid = "<table>";
    let cellCounter = 0;
    for (let widthCounter = 0; widthCounter < width; widthCounter++) {
        grid = grid + "<tr>";
        for (let heightCounter = 0; heightCounter < height; heightCounter++) {
            cellCounter = cellCounter + 1;
            grid = grid + "<th>" + cellCounter + "</th>";
        }
        grid = grid + "</tr>";
    }
    grid = grid + "</table>"
    return grid;
}