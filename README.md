## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.



HTML will need:
- header with "Character Creator"
- An input that takes numbers from 1-10
    -(drop down menu is probably best)
- A button that will display an image
    -image should correspond to number chosen in input.

- will need ids for button and input

JS will need:
-variables tied from button and input from HTML

-Test function to initiate image display based on user input.
    -will need an: if(input < 4) {
        display first image
    } else if(input > 4 && input < 7>) {
        display second image
    } else if(input > 7) {
        display third image
    };

-make a file for the function to live in for export

-import function to tests.js for testing.

-once function is verified, inport to app.js to be called with variables from the HTML.
