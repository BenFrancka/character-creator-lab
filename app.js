// import functions and grab DOM elements
import {displayLogicImage} from './utils.js';

//DOM elements
const logicIndex = document.getElementById("logic-index");
const displayButton = document.getElementById("display-button");
const displayImage = document.getElementById("display-image");

// set event listeners to update state and DOM
displayButton.addEventListener('click', () => {
    displayImage.src = displayLogicImage(logicIndex.value);
})