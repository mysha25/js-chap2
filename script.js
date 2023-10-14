//CHAP 02
// practice exercise:2.1
console.log("Exercise 2.1");

let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log("str1", typeof str1);
console.log("str2", typeof str2);
console.log("val1", typeof val1);
console.log("val2", typeof val2);
console.log("myNum", typeof myNum);


// practice exercise:2.2

console.log("Exercise 2.2");

let myNam= "mysha saleem";
let age= 17;
let js = true;
let message = `Hello, my is Name ${myNam}, I am ${age} years old and I can code JavaScript:${js}`;
console.log(message);

//Exercise 2.3
console.log("Exercise 2.3");
console.log("Pythagorean theorem");

let A = prompt("Enter a value side A ");
let B = prompt("Enter a value side B ");

let C = A**2 + B**2;
console.log("The value of side C is : ", C);

// practice exercise:2.4
console.log("Exercise 2.4");
let a=2;
let b=4;
let c=6;

console.log("Add b to a");
let add=b+a;
console.log(add);

console.log("Divide a by c");
let divide=c/a;
console.log(divide);

console.log("Replace the value of c with the modulus of c and b");
let mod=b%c;
c=mod;
console.log(c);

// CHAPTER PROJECT
// Miles-to-kilometers converter
console.log("Chapter Project");
console.log("Miles to kiloMeters:");

let miles = prompt("Enter a value in miles : ");
let km = miles * 1.60934;

let result=`The distance of ${miles}miles is equal to ${km}kilometers`
console.log(result);

//BMI Calculator
console.log("BMI Calculator:");
let height = prompt("Enter a height in inches : ");
let cm = height * 2.54;

let Weight = prompt("Enter a weight in pounds : ");
let kilo = Weight * 0.453592;

let BMI = cm / kilo*kilo;

console.log("The value is : " , BMI);

