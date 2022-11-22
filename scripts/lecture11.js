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