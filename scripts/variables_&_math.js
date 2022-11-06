console.log("Let's explore our variables and math");


//we use let when we know that the value will change
let age=30;
console.log(age);
//increase age
age=age+1;
console.log(age);

//we use const when the value will not change
//the rule of thumb is to use const unless you know you need to use let
const myContainer= document.querySelector('.container');
// lets put age in container
myContainer.textContent=age;
// no need to print anything, it will show inside .container div text content


age+=1; //just like age=age+1
console.log(age);

// we can use -= to subsctract from variable
age-=5;
console.log(age);

console.log(10*10); 
let divResult=10/6;

console.log(typeof age); //number
console.log(typeof divResult); //number