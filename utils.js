export{displayLogicImage, displayEmpathyImage, displayThrillSeekingImage} 

// function to display the logic images

function displayLogicImage(logic) {
    let integer = +(logic);
    if (integer < 4) 
        return 'https://www.pngfind.com/pngs/m/13-132114_graphic-freeuse-download-joker-face-clipart-joker-png.png';
    if (integer > 4 && integer <7)
         return 'https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png';
    if (integer > 7)
         return 'http://londonhomestays.com/wp-content/uploads/2018/07/sherlock-holmes-147255_960_720-1.png';
}

// function to display the empathy images
function displayEmpathyImage(empathy) {
    let integer = +(empathy);
    if (integer < 4) 
        return 'https://64.media.tumblr.com/5c89861d4d652a14e97991674372188b/tumblr_mh8licVMke1rm4lk1o1_500.png';
    if (integer > 4 && integer <7)
         return 'https://img.favpng.com/11/19/16/john-barrowman-captain-jack-harkness-doctor-who-face-of-boe-png-favpng-pGUkmnBzTJxReWTBTX33GdtZC.jpg';
    if (integer > 7)
         return 'http://middle-earthencyclopedia.weebly.com/uploads/3/8/2/9/3829140/9455479.png';
}

//function to display the thrill seeking images

function displayThrillSeekingImage(thrillSeeking) {
    let integer = +(thrillSeeking);
    if (integer < 4) 
        return 'https://www.seekpng.com/png/detail/71-716732_eeyore-download-png-image-eor-winnie-the-pooh.png';
    if (integer > 4 && integer <7)
         return 'https://i.pinimg.com/originals/8c/80/8d/8c808df516cfba4a28ebfc49307d3cd6.jpg';
    if (integer > 7)
         return 'https://wahlnetwork.com/wp-content/uploads/2020/07/brock-samson-alligator.png';
}

