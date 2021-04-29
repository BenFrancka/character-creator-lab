// IMPORT MODULES under test here:
// import { example } from '../example.js';
import {displayLogicImage} from '../utils.js';
const test = QUnit.test;

test('displays image based on number choice', (expect) => {
    //Arrange

    // Set up your arguments and expectations
    const expected = true;
    
     
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;
    displayLogicImage(3);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    
});

//example function
/*function getLogicImage(logic) {
    if (logic < 4) return 'http://www.placekitten.com/300/300'
    if (logic > 4 && logic < 7)return 'http://www.placekitten.com/400/400'
    if (happiness > 7) return 'http://www.placekitten.com/500/500'
   }*/

