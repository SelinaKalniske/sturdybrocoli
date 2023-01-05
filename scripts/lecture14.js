console.log("lets add and remove some elements!");

// lets get container element
const container=document.getElementById("container");

//lets make a function that adds new element to container
function addElement(containerElement) {
    const parentElement=document.getElementById("container");
    //create a new element
    const newElement= document.createElement("div");
    //add class to new element
    newElement.classList.add("new-element");
    //add new class dpending whether there are an odd or even number elements
    const numElements=parentElement.childElementCount;
    if (numElements % 2 == 0){
        newElement.classList.add("even");
    } else{
        newElement.classList.add("odd");
    }
      //add some text to container
    newElement.innerText="Im a new element!";
    //add element to container
    parentElement.appendChild(newElement);
}


//lets make main function, because its better to add listener when the page loads
function main(){
console.log("main function called");
const addButton=document.getElementById("addButton")
addButton.addEventListener("click", addElement);
}
 
//lets attach main to the window load event
document.addEventListener("DOMContentLoaded", main);