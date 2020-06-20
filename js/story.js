// 1. Declare variables and capture input.
let massageA = prompt('Insert World A : ');
let massageB = prompt('Insert World A : ');
let massageC = prompt('Insert World A : ');



// 2. Combine the input with other words to create a story.

let combine_massage = `<p>A = ${massageA} | B = ${massageB} | C = ${massageC} !!</p>`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = combine_massage;