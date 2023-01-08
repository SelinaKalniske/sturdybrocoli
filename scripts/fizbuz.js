console.log("Let's make Fizz Buzz!")

//const inputMin = document.getElementById("minInput");
//const inputMax = document.getElementById("maxInput");
const startValue = document.querySelector('#start-value').value;
const endValue = document.querySelector('#end-value').value;
const main = document.getElementById("container");
const resetButton = document.querySelector('#resetButton');
const refreshButton = document.getElementById('refreshButton');
const div = document.querySelectorAll('div');


for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    // Set the div's unique id
    div.id = `myid${i}`;

    // Set the div's inner text based on the conditions specified
    if (i % 3 === 0 && i % 5 === 0) {
      div.classList.add('fizzbuzz');
      div.innerText = 'FizzBuzz';
    } else if (i % 3 === 0) {
      div.classList.add('fizz');
      div.innerText = 'Fizz';
    } else if (i % 5 === 0) {
      div.classList.add('buzz');
      div.innerText = 'Buzz';
    } else {
      div.classList.add('other');
      div.innerText = i;
    }
  
    document.getElementById('main').appendChild(div);
  }


  // MIN and MAX value button
  function updateDivs() {
    // Get the start and end values from the controls
const startValue = document.querySelector('#start-value').value;
const endValue = document.querySelector('#end-value').value;
  
    // Generate the div elements
    for (let i = startValue; i <= endValue; i++) {
      // Create a new div element
      const div = document.createElement('div');
    }  
}

// Update the div elements when the start or end values change
document.querySelector('#start-value').addEventListener('change', updateDivs);
document.querySelector('#end-value').addEventListener('change', updateDivs);
// Initialize the div elements
updateDivs();
  
const startValueInput = document.querySelector('#start-value');
const endValueInput = document.querySelector('#end-value');
startValueInput.addEventListener('change', function() {
    // Set the minimum value of the second input to the value of the first input
    endValueInput.min = startValueInput.value;
  });

  endValueInput.addEventListener('change', function() {
    // Set the maximum value of the first input to the value of the second input
    startValueInput.max = endValueInput.value;
  });
  


// RESET  BUTTON
  resetButton.addEventListener('click', function() {
    // Reset the start and end values to their default values
    document.querySelector('#start-value').value = 1;
    document.querySelector('#end-value').value = 100;
  
    // Update the div elements
    updateDivs();
    
  });


// FIZZ BUTTON
  const fizzButton = document.getElementById('fizzButton');
  fizzButton.addEventListener('click', function() {
  });
  
  fizzButton.addEventListener('click', function() {
    // Select all divs with the class "fizz"
    const fizzDivs = document.querySelectorAll('.fizz');
  
    // Change the background color of the "fizz" divs to green
    for (const div of fizzDivs) {
      div.style.backgroundColor = 'red';
    }
  });
  
//BUZZ BUTTON
const buzzButton = document.getElementById('buzzButton');
buzzButton.addEventListener('click', function() {
});
buzzButton.addEventListener('click', function() {
    // Select all divs with the class "buzz"
    const buzzDivs = document.querySelectorAll('.buzz');
  
    // Change the background color of the "buzz" divs to blue
    for (const div of buzzDivs) {
      div.style.backgroundColor = 'blue';
    }
  });
  
//FIZZBUZZ BUTTON
const fizzbuzzButton = document.getElementById('fizzbuzzButton');
fizzbuzzButton.addEventListener('click', function() {
});
fizzbuzzButton.addEventListener('click', function() {
    // Select all divs with the class "fizzbuzz"
    const fizzbuzzDivs = document.querySelectorAll('.fizzbuzz');
  
    // Change the background color of the "fizzbuzz" divs to yellow
    for (const div of fizzbuzzDivs) {
      div.style.backgroundColor = 'orange';
    }
  });
  

