/* Usage  <div carousel="type"></div>
 * Include a carousel to your page.
 * type: best
 */

export function carousel() {
    let bloc = document.getElementsByTagName("*");
    for (let index = 0; index < bloc.length; index++) {
        let selectedElement = bloc[index];
        let carouselType = selectedElement.getAttribute("carousel");
        if (carouselType !== null) {
            selectedElement.innerHTML = "Bingpot! - " + carouselType;
        }
    }
}