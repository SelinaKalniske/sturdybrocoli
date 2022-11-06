// Simple hello world script
// we use for comments
// in CSS we use /*....*/
// in HTML we use <!--.....-->
// we use the console.log() function to print to the console
console.log("Hello Javascript!")



//finding the first paragraph
const para = document.querySelector('p');
// add listener to the paragraph
para.addEventListener('click', updateName);
//defined what to do when the paragraph is clicked
function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
  //we find first element from class results
  const resultsElement = document.querySelector('.results');
  resultsElement.textContent = `Updated at ${Date()}`;
}
