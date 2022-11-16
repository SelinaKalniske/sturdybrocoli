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