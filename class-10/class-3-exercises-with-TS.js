// exercise 1
function greeting(greeting) {
    console.log(greeting);
}
greeting('Hello World!');
// exercise 2
var studentName = 'Luci';
console.log(studentName);
// exercise 3
var rectangleLength = 12;
var rectangleHeight = 4;
var result = rectangleHeight * rectangleLength;
console.log(result);
// exercise 4
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return ("".concat(num, " is even!"));
    }
    else if (num % 2 !== 0) {
        return ("".concat(num, " is odd!"));
    }
    else
        return ("There was an error.");
}
;
// function evenOrOdd(num: number): string {
//     if(num % 2 === 0) {
//         return (`${num} is even!`);
//     } else return (`${num} is odd!`);
// };
console.log(evenOrOdd(19));
console.log(evenOrOdd(46));
// exercise 5
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
;
// exercise 6, 7, 8, 9, 10 - skip these
// exercise 11
var myString = "spunky";
var myNum = 14;
var isAwesome = true;
var myEmptyValue = null;
var myUnknownValue = undefined;
;
var myPet = {
    name: 'Lavendar',
    breed: 'Labrador',
    isHousetrained: true,
    age: 2
};
var myNeighbors = ['Brad', 'Cora', 'Eileen'];
var answer;
// exercise 12 - HTML and DOM skip
// exercise 13
function arrayOfMultiples(num, length) {
    var result = [];
    for (var i = 1; i <= length; i++) {
        result.push(num * i);
    }
    return result;
}
;
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
// exercise 14
function typeOfNumber(num) {
    if (num < 0) {
        return ("".concat(num, " is negative."));
    }
    else if (num === 0) {
        return ("".concat(num, " is zero."));
    }
    else if (num > 0) {
        return ("".concat(num, " is positive."));
    }
    else
        return ("There was an error.");
}
;
console.log(typeOfNumber(-45));
console.log(typeOfNumber(0));
console.log(typeOfNumber(74));
