console.log(`looping constructors`);

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
console.log("After the loop i is " + i);
console.log(`After the loop i is ${i}`); //its same as above


i=5;
while (i>=0){
    console.log(i);
    i--;
}
console.log("After the loop i is " + i);
console.log(`After the loop i is ${i}`); //dazadi pieraksti


//we can use a break statement to exit loop early

i=0;
while(i<10){
    console.log(i);
    if (i==5){
        console.log(`i is 5 so i am breaking out of the loop`);
        break;
    }
    i++;
}
console.log(`After the loop i is ${i}`); 

i=700;
do{
    console.log(i);
    i++;
} while (i<10);
console.log(`after do while loop i is ${i}`);

i=900;
while(true){
    console.log(i);
    i++;
    if (i>=10){
    console.log(`i is 10 or greater so I am breaking out of the loop`);
    break;
}
}
console.log(`After while loop i is ${i}`);


i=0;
while(i<10){
    console.log(i)
    i+=2;
}
console.log(`After the loop i is ${i}`);

i=0;
while(i<=10){
    console.log(i)
    i+=2;
}
console.log(`After the loop i is ${i}`);

//lets ask for user input

//let input=prompt("Enter a number between 1 and 10");
//input=parseInt(input);
//console.log(`After parseInt input i is ${input}`);
//while(isNaN(input) ||input<1||input >10){
 //   input=prompt("iNVALID input. Enter a number between 1 and 10");
 //   input=parseInt(input);
//    console.log(`inside loop: After parseInt input is ${input}`);
//}
//console.log(`You entered ${input}`);


//while loop to sum up numbers 

let sum=0;
let number=prompt("Enter a number to add to the sum or enter 0 to stop");
number=parseInt(number); //we need to convert string to integer
while(number !==0){
    console.log(`Before adding: sum is ${sum} and number is ${number}`);
    sum += number;
    number=prompt("Enter a number to add to the sum or enter 0 to stop");
    number=parseInt(number);
}
console.log(`the sum is ${sum}`);

// lets output sum to container div
let container=document.getElementById("container");
container.textContent=`The sum is ${sum}`;

