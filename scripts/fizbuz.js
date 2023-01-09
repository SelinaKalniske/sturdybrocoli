console.log("Let's make Fizz Buzz!")

//const inputMin = document.getElementById("minInput");
//const inputMax = document.getElementById("maxInput");
const startValue = document.querySelector('#start-value').value;
const endValue = document.querySelector('#end-value').value;
const main = document.getElementById("container");
const resetButton = document.querySelector('#resetButton');
const refreshButton = document.getElementById('refreshButton');
const div = document.querySelectorAll('div');

document.querySelector('form').addEventListener('submit', createDivs);

function createDivs(event) {
  // prevent the form from being submitted
  event.preventDefault();

  // get the start and end values from the form fields
  const startValue = document.querySelector('#start-value').value;
  const endValue = document.querySelector('#end-value').value;

  // create the div elements with the specified range of values
  if (!startValue || !endValue || isNaN(startValue) || isNaN(endValue) || startValue > endValue) {
    console.log("Wrong values inserted!")
  } else {
    document.getElementById('main').innerHTML = '';
    for (let i = startValue; i <= endValue; i++) {
      const div = document.createElement('div');
      // Set the div's unique id
      div.id = `myid${i}`;

      // Set the div's inner text based on the conditions specified
      if (i % 3 === 0 && i % 5 === 0) {
        div.classList.add('fizzbuzz');
        div.innerText = i + ' = FizzBuzz';
      } else if (i % 3 === 0) {
        div.classList.add('fizz');
        div.innerText = i + ' = Fizz';
      } else if (i % 5 === 0) {
        div.classList.add('buzz');
        div.innerText = i +' = Buzz';
      } else {
        div.classList.add('other');
        div.innerText = i;
      }
      document.getElementById('main').appendChild(div);
    }
  }
}

  
// RESET  BUTTON
  resetButton.addEventListener('click', function() {
    // Reset the start and end values to their default values
    document.querySelector('#start-value').value = 1;
    document.querySelector('#end-value').value = 100; 
  });


//FIZZ BUTTON
$(document).ready(function(){
  $("#fizzButton").click(function(){ 
    $(".buzz, .other, .fizzbuzz").toggle();
  });
});
console.log("#fizzButton");
  
//BUZZ BUTTON
$(document).ready(function(){ $("#buzzButton").click(function(){ 
  $(".other, .fizz, .fizzbuzz").toggle();
});
});
  
//FIZZBUZZ BUTTON
$(document).ready(function(){ $("#fizzbuzzButton").click(function(){ 
  $(".other, .fizz, .buzz").toggle();
});
});