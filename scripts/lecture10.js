console.log("Hello conditionals and logic!");

let a=10;
let aString="10";
//console.log(a==aString);//true, but this is not a good way to compare usually
console.log(`variable a:${a} and variable aString ${aString} are equal?`, a == aString);

let b=10;
console.log(`variable a:${a} and variable b ${b} are STRICTLY equal?`, a==b);
//lets compare a and aString

console.log(`variable a:${a} and variable aString ${aString} are STRICTLY equal?`, a==aString);

console.log(`variable a:${a} and variable aString ${aString} are NOT equal?`, a != aString);//false

let aNumber = Number(aString);
console.log(`variable a:${a} and variable ${aNumber} are equal?`, a==aNumber);

let anotherString=String(a);
console.log(`variable a:${aString} and variable ${anotherString} are equal?`, a==anotherString);

let c=42;
//lets compare a and c using > and < and >=, <=

console.log(`variable a:${a} is greater than variable c ${c}?`, a>c);
console.log(`variable a:${a} is less than variable c ${c}?`, a<c);
console.log(`variable a:${a} is greater than or equal to variable c ${c}?`, a>=c);
console.log(`variable a:${a} is less than or equal to variable c ${c}?`, a<=c);

const myName ="Selina";
const anotherName ="Solvita";
console.log(`variable myName${myName} is greater than variable anotherName${anotherName}?`, myName>anotherName);
console.log(`variable myName${myName} is less than variable anotherName${anotherName}?`, myName<anotherName);

//find ordinal number of a character
console.log(`ordinal number of a is ${"a".charCodeAt(0)}`);//97
//find ordinal number of ā character
console.log(`ordinal number of ā is ${"ā".charCodeAt(0)}`); //257

//logic operators
// && is AND - both sides must be true - logical conjuction
console.log(`true && true is ${true && true}`);//true
console.log(`true && false is ${true && false}`);//false
console.log(`false && true is ${false && true}`);//false
console.log(`false && false is ${false && false}`);//false

// || is OR - side must be true - logical disjuction
console.log(`true || true is ${true || true}`);// true
console.log(`true || false is ${true || false}`);//true
console.log(`false || true is ${false || true}`);//true
console.log(`false || false is ${false || false}`);//false

// ! is NOT - logical negation
console.log(`!true is ${!true}`);//false
console.log(`!false is ${!false}`);//true

// we can use ! to flip the value of a boolean
let myBool=true;
console.log(`myBool is ${myBool}`);//true
myBool=!myBool;
console.log(`myBool is ${myBool}`);//false
// we can keep going
myBool=!myBool
console.log(`myBool is ${myBool}`);// true

//sometimes you will see code with !!  - double negation
console.log(`!!true is ${!!true}`);//true
console.log(`!!false is ${!!false}`);//false

// how about 0
console.log(`!!0 is ${!!0}`);//false - 0 is falsy and was converted to false

//now we get to the fun part
// conditional statement

// if statement
console.log(`if statement`);
if (true) {
    console.log(`inside if statement`);
}
console.log(`outside if statement`);

//let myVar=true;
//let myVar=2*2==4; //comparison will be evaluated first then assigned to myVariable
a=2;
b=4;

console.log(`if statement`);
if (a*a==b) {
    console.log(`inside if statement ${a}*${a}==${b}`);
}

else {
   console.log(`inside else statement ${a}*${a} !== ${b}`);
}
console.log(`outside if statement`);


// now we introduce else if, useful for multiple conditions

console.log(`BEFORE if statement`);
if (a*a==b);{
    console.log(`inside if statement ${a}*${a}==${b}`);
}
//else if (a*a>b){
    //console.log(`inside else if statement ${a}*${a}>${b}`);
//}

//example of NESTED if

console.log(`before if statement`);
a=2;
let d=10;
if (a*b==b) {
    console.log(`inside if statement ${a}*${a}==${b}`);
    if (d==10){
        console.log(`inside nested if statement ${d}==10`);
    }
    else {
        console.log(`inside nested else statement ${d} !==10`);
    }
}

else if (a*a>b){
    console.log(`inside else if statement ${a}*${a}> ${b}`);
}
else {
    console.log(`inside else if statement ${a}*${a}<${b}`);
}

//lets change a
a=1;

console.log(`before switch statement`);
switch (a) {
    case 1:
        console.log(`inside case 1`);
        break;
    case 2:
        console.log(`inside case 2`);
        break;
    case 3:
        console.log(`inside case 3`);
        break;
        default:
            console.log(`inside default`);
            break;
}
console.log(`AFTER switch statement`);


let myString=prompt(`Enter a String`); //will prompt user for input
console.log(`before switch statement`)
switch(myString){
    case "hello": 
    console.log(`inside case hello`);
    break;
    case "world":
        console.log(`inside case world`);
        break;
    default:
        console.log(`inside default you entered ${myString}`);
        break;
}


let result = 0;
let i = 8
do { 
  result += i;
  i++;
} while (i < 5)
console.log(result); //result?


  


