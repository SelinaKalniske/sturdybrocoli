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

console.log(0.1+0.2); //javascript doesnt have integer or float type number


//we have string data types
const myName="Selina";
console.log(myName);
console.log(typeof myName);

//we can use + tom combinate strings
console.log("Hello" + myName); // its okay for smaller strings

//this will be more modern way of combinating strings
console.log(`Hello ${myName} wouldn't it be nice if your age was ${age}`);

//how about single quotes
console.log(`Hello ${myName} wouldn't it be nice if your age was ${age}`);


//some other data types

const myTruth=true;
console.log(myTruth);
console.log(typeof myTruth);
const mylie=false;
console.log(typeof mylie);
//booleans will be used dor logic and conditionals


//we can raise powers with **

console.log(2**3); //2*2*2=8
const googol=10**100; //Googol
console.log(googol);


//now come to important operator
//the modulo operator %

console.log(10%3);// 1
console.log(10%4);// 2
console.log(10%5);
//we can use modulo to find out if the number is odd or even

//lets use promtp to make a simple temperature converter
const celsius=parseInt(prompt("Please enter a temparature in Celsius"));
console.log("Temperature in Celsius " + celsius);

const farenheit= celsius*9/5+32;
console.log("Temperature in Farenheit " + farenheit);
const tempContainer=document.querySelector('.temp-container');
tempContainer.textContent= `Temperature in Celsius ${celsius} is ${farenheit} in Farenheit`;





