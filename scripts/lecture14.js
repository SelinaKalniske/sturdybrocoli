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
      //lets costumize this text depending on number of elements
      // we will use ` to make template string
      //we haven't added element so elementCount is off by one
    newElement.innerText=`I'm element No. ${numElements+1}!`;
    // lets add a value atribute to the new element
    newElement.setAttribute("value", numElements+1);//can be used to identify the element
    //add element to container
    parentElement.appendChild(newElement);
}

// lets add flexible function to add any number of elements
function addElements(numElements){
    //use loop to add multiple elements
    for (let i=0; i<numElements; i++){
        addElement();
    }
}
// lets add 10 element function
function add10Elements(){
    addElements(10);
}

//TODO function that reads button value and add that many elements-more universal solution




// lets make a function to remove last element from container
 function removeElement(){
    const parentElement=document.getElementById("container");
    const lastChild=parentElement.lastElementChild;
    //lets remove last child only if its exists
    if (lastChild==null){
    console.log("No more elements to remove!");
    } else{
        console.log("Removing last child " + lastChild.innerText);
        parentElement.removeChild(lastChild);
    }
 }
  
// function for removing ALL elements
function removeAllElements(){
    console.log("Removing all elements");
    //container element
    const parentElement=document.getElementById("container");
    //get the last child remove of the container
    // we need to use let since we will change the value of lastChild
    let lastChild=parentElement.lastElementChild;
    //loop to remove all elements
    while (lastChild !== null){
        console.log("Removing last child: " +lastChild.innerText)
        parentElement.removeChild(lastChild);
        //get new last child
        lastChild=parentElement.lastElementChild;
    }
 //we could have gotten only specific children and removed them using querySelectorAll
}


// lets make a function to add listeners
function addListeners(){
console.log("Adding listeners")
const addButton=document.getElementById("addButton")
addButton.addEventListener("click", addElement);
const removeButton=document.getElementById("removeButton");
removeButton.addEventListener("click", removeElement);
//lets add 10 element button
const add10Button=document.getElementById("add10Button");
add10Button.addEventListener("click", add10Elements);
//add remove all elements button
const removeAllButton=document.getElementById("removeAllButton");
removeAllButton.addEventListener("click", removeAllElements);
}

//lets make main function, because its better to add listener when the page loads
function main(){
console.log("main function called");
//since we have many buttons we could make a separate function to add listeners
addListeners();
}
 
//lets attach main to the window load event
document.addEventListener("DOMContentLoaded", main);