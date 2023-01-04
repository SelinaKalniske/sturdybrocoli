console.log("lets add and remove some elements!");

// lets get container element
const container=document.getElementById("container");

//lets make a function that adds new element to container
function addElement(containerElement) {
    //create a new element
    const newElement= document.createElement("div");
    //add class to new element
    newElement.classList.add("new-element");
    //add some text to container
    containerElement.appendChild(newElement);
}