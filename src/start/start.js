import {
  appName
} from "../variables/variables";
import {
  carousel
} from "../carousel/carousel";

export function start() {
  document.title = appName;
}

window.onload = function() {
  carousel();
}