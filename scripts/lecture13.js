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

//button 2

const btn2=document.querySelector('#mySecondButton');
btn2.onclick=handleButtonClick; //shortet way, but only one listener is alloweds


//lets handle mouseover event
function handleMouseOver(){
    console.log("Mouse is over the button");
}