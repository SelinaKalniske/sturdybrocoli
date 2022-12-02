console.log("Javascript functions")

// functions are a way to group code together

function sayHello() {
    console.log("Hello");
}
//you need to execute it
sayHello();
sayHello();

//use loop to call function 10 times
for(let i=0; i<10; i++){
    sayHello();
}

//functions can take parametrs
function costumHello(name) {
    console.log(`Hello ${name}`);
}
costumHello('Selina');
costumHello('Davis');
costumHello('Kristiana');
costumHello('Veniamins');

//functions can take multiple parametrs
function costumHello2(name, age) {
    console.log(`Hello ${name} you are ${age} years old`)
}
costumHello2("Selina", 23);
costumHello2("Davis", 24);
costumHello2("Kristiana", 23);
costumHello2("Veniamins", 24);

//we can use a function to calculate the area of a rectangle

function areaOfRectangle(width,height) {
    let area=width*height;
    console.log(`The area of regtangle with width ${width} and height ${height} is ${area}`);
}
areaOfRectangle(10,20);
areaOfRectangle(5,10);


// functions can return value
function add(a,b) {
    return a+b;//instead of printing return the value to the caller and they can do whatvever they want with it
}
let result= add(10,20); //result is global variable
console.log(`the result of of adding 10 and 20 is ${result}`);

// lets make multiplication function
function multiply(a,b) {
    return a*b
}
result = multiply(add(10,20), add(30,40)); //result should be 2100
console.log(`the result of multipling 30 plus 40 and then adding 10 plus 20 is ${result}`);


// calling functions within function can be compared to movie Inception where you have a dream within a dream
//while in a function you can another function and that function call another function and so on

//good practise is to use function witjouth global variables

//function main() {
   // sayHello();
 //   costumHello("Selina");
 //   costumHello2("Selina", 23)
 //   areaOfRectangle(10,20);
 //   add(a,b);
 //   multiply(a*b);    
//}

//main();

//functions with default parametrs
function costumHello3(name="Selina", age=24) {
console.log(`Hello ${name} you are ${age} years old`);    
}
costumHello3("Selina", 23)
costumHello3("Davis")


