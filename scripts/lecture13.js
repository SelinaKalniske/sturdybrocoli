console.log("Handling some input event");

//function that will handle click event

function handleButtonClick() {
    console.log("Button was clicked");
}
//we need to attach function to button click event
//const btn=document.querySelector('button');

//better to use more specific selector
const btn=document.querySelector('#myButton'); //will select button with ID myButton
btn.addEventListener('click', handleButtonClick);