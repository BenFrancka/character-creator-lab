// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {displayLogicImage, displayEmpathyImage, displayThrillSeekingImage} from '../utils.js';
const test = QUnit.test;


//Logic Image Tests

//Low Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://www.pngfind.com/pngs/m/13-132114_graphic-freeuse-download-joker-face-clipart-joker-png.png';;
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayLogicImage(2);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

//Medium Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png';
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayLogicImage(5);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

// High Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'http://londonhomestays.com/wp-content/uploads/2018/07/sherlock-holmes-147255_960_720-1.png';
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayLogicImage(9);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

//Empathy Image Tests

//Low Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://64.media.tumblr.com/5c89861d4d652a14e97991674372188b/tumblr_mh8licVMke1rm4lk1o1_500.png';;
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayEmpathyImage(2);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

//Medium Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://img.favpng.com/11/19/16/john-barrowman-captain-jack-harkness-doctor-who-face-of-boe-png-favpng-pGUkmnBzTJxReWTBTX33GdtZC.jpg';
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayEmpathyImage(5);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

// High Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'http://middle-earthencyclopedia.weebly.com/uploads/3/8/2/9/3829140/9455479.png';
    
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayEmpathyImage(9);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

//Thrill Seeking Image Tests

//Low Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://www.seekpng.com/png/detail/71-716732_eeyore-download-png-image-eor-winnie-the-pooh.png';;
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayThrillSeekingImage(2);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

//Medium Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://i.pinimg.com/originals/8c/80/8d/8c808df516cfba4a28ebfc49307d3cd6.jpg';
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayThrillSeekingImage(5);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

// High Number
test('should take in a number and return an image string tied to number', (expect) => {
    //Arrange

    // Set up your arguments and expectations;
        const expected = 'https://wahlnetwork.com/wp-content/uploads/2020/07/brock-samson-alligator.png';
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayThrillSeekingImage(9);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});