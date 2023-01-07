console.log("Let's make Fizz Buzz!")

const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const main = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const refreshButton = document.getElementById("refreshButton");

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.id = `myid${i}`;
  
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
  