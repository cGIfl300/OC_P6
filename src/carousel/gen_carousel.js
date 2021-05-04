import {plusSlides} from "./plusSlides";

export function gen_carousel(element, slideNumber) {
    let nextTrigger = "next" + slideNumber;
    let prevTrigger = "prev" + slideNumber;
    element.innerHTML += `
    <p>Slideshow ${slideNumber}:</p>
<div class="slideshow-container">
    <table>
        <th>
            <a class="prev" id="prev${slideNumber}">&#10094;</a>
        </th>
        <th>
            <div class="mySlides${slideNumber}">
                <img src="https://zupimages.net/up/21/16/6bxn.jpg" style="width:100%; max-height:200px">
            </div>
        </th>
        <th>
            <div class="mySlides${slideNumber}">
                <img src="https://zupimages.net/up/21/16/gxj9.jpg" style="width:100%; max-height:200px">
            </div>
        </th>
        <th>
            <div class="mySlides${slideNumber}">
                <img src="https://zupimages.net/up/21/16/cht0.jpg" style="width:100%; max-height:200px">
            </div>
        </th>
        <th>
            <a class="next" id="next${slideNumber}">&#10095;</a>
        </th>
    </table>
</div>
    `;
    let nextElement = document.getElementById(nextTrigger);
    nextElement.addEventListener('click', function (event) {
        event.stopPropagation();
        plusSlides(1, slideNumber);
    });

    let previousElement = document.getElementById(prevTrigger);
    previousElement.addEventListener('click', function (event) {
        event.stopPropagation();
        plusSlides(-1, slideNumber);
    });
}