// exercise 1
console.log("Hello, World!");

// exercise 2
const studentName = "Luci";
console.log(studentName);

// exercise 3
const rectangleLength = 12;
const rectangleHeight = 4;
let result = rectangleHeight * rectangleLength;
console.log(result);

// exercise 4
function evenOrOdd(number) {
    if(number % 2 === 0) {
        return (`${number} is even!`)
    } else if (number % 2 !== 0) {
        return (`${number} is odd!`)
    }
};

console.log(evenOrOdd(65));
console.log(evenOrOdd(100));

// exercise 5
for(let i = 1; i <= 10; i++) {
    console.log(i)
};

// exercise 6
// const userName = prompt("Enter your name: ");
// alert(`Hi, ${userName}! Welcome to Barbieland!`);
// console.log(`Hi, ${userName}! Welcome to Barbieland!`);

// exercie 7
const userNumber = 5;
// const userNumber = prompt("Enter a number: .")
let factorialResult = userNumber
for(let i = userNumber; i > 1; i--){
    factorialResult = factorialResult * (i - 1);
    // console.log("result", factorialResult)
    // console.log("i", i);
};
console.log(`The factorial of ${userNumber} is ${factorialResult}.`)

// exercise 8
// check whether a year is a leap year

// exercise 9
let num = 1;
let sum = 0;
while(num <= 100) {
    sum = sum + num;
    num++
}
console.log(sum);

// exercise 10
const number1 = prompt("Please enter number 1. ");
const number2 = prompt("Please enter number 2. ");

const additionResult = +number1 + +number2;
const subtractionResult = +number1 - +number2;
const multiplicationResult = +number1 * +number2;
const divisionResult = +number1 / +number2;

console.log(`${number1} plus ${number2} equals ${additionResult}.\n
${number1} minus ${number2} equals ${subtractionResult}.\n
${number1} times ${number2} equals ${multiplicationResult}.\n
${number1} divided by ${number2} equals ${divisionResult}.`)

// exercise 11
const myString = "spunky";
const myNumber = 14;
const isHungry = true;
const myEmptyValue = null;
const myMysteryValue = undefined;
const myPet = {
    name: "Lavendar",
    breed: "Labrador",
    isHouseTrained: true,
    age: 2
};
const myNeighbors = ["Brad", "Aubrey", "Joann"];
let answer;

