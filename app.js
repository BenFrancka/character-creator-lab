// import functions and grab DOM elements
import {displayLogicImage, displayEmpathyImage, displayThrillSeekingImage} from './utils.js';

//DOM elements
const displayButton = document.getElementById("display-button");
const logicIndex = document.getElementById("logic-index");
const logicDisplayImage = document.getElementById("logic-display-image");

const empathyIndex = document.getElementById("empathy-index");
const empathyDisplayImage = document.getElementById("empathy-display-image")

const thrillSeekingIndex = document.getElementById("thrill-seeking-index");
const thrillSeekingDisplayImage = document.getElementById("thrill-seeking-display-image")

 
// set event listeners to update state and DOM
displayButton.addEventListener('click', () => {
    logicDisplayImage.src = displayLogicImage(logicIndex.value);
    empathyDisplayImage.src = displayEmpathyImage(empathyIndex.value);
    thrillSeekingDisplayImage.src = displayThrillSeekingImage(thrillSeekingIndex.value);
});

