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
//functions can take multiple parametrs
function costumeHello2(name, age) {
    console.log(`Hello ${name} you are ${age} years old`)
}

costumHello('Selina');
costumHello('Davis');
costumHello('Kristiana');
costumHello('Veniamins');

//we can use a function to calculate the area of a rectangle

function areaOfRectangle(width,height) {
    let area=width*height;
    console.log(`The area of regtangle with width ${width} and height ${height} is ${area}`);
}

areaOfRectangle(10,20);
areaOfRectangle(5,10);