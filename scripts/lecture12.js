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

function costumeHello2(name, age) {
    console.log(`Hello ${name} you are ${age} years old`)
}
