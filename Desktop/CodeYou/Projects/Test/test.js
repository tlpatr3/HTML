//This script creates a button that adds a paragraph to a div when clicked
//Event listener for button click
const button = document.querySelector("button");
button.addEventListener('click', createParagraph);


//Add paragraph to div
function createParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This was added by using JavaScript to manipulate the DOM";
    const container = document.getElementById('container');
    container.appendChild(newParagraph);
    button.removeEventListener('click', createParagraph);
}