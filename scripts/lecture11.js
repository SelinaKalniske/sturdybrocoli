console.log(`looping constructors`);

let i = 0;
const WhileLoopElement=document.getElementById("displayWhile");
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

// so lets look at for loops, when you know how many times you will loop
const forLoopElement=document.getElementById("foorLoop")
for (let i=0; 1<10; i++) {
    console.log(i);
    forLoopElement.textContent += i+ " ";
}
console.log(`after the loop i is ${i}`);

//lets try this with different iterator
//for(let j=0; 1<10; j++){
    //console.log(j)
//}
//console.log(`after the loop i is ${j}`);

//we need to use j outside the loop so we should have to declare it outside the loop
 let j=0;
 for(; j<10; j++){ // notice empty initialization - ;
    console.log(j);
 }
 console.log(`after the loop i is ${j}`);


