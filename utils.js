export{displayLogicImage} 

function displayLogicImage(logic) {
    let integer = Number(logic);
    if (integer < 4) 
        return 'https://www.pngfind.com/pngs/m/13-132114_graphic-freeuse-download-joker-face-clipart-joker-png.png';
    if (integer > 4 && logic <7)
         return 'https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png';
    if (integer > 7)
         return 'http://londonhomestays.com/wp-content/uploads/2018/07/sherlock-holmes-147255_960_720-1.png';
}