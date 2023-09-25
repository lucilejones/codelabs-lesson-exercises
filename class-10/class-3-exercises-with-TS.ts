// exercise 1

function greeting(greeting: string): void {
    console.log(greeting);
}

greeting('Hello World!')

// exercise 2
const studentName: string = 'Luci';
console.log(studentName);

// exercise 3
const rectangleLength: number = 12;
const rectangleHeight: number = 4;
let result: number = rectangleHeight * rectangleLength;
console.log(result);

// exercise 4
function evenOrOdd(num: number): string {
    if(num % 2 === 0) {
        return (`${num} is even!`);
    } else if(num % 2 !==0) {
        return (`${num} is odd!`);
    } else return (`There was an error.`)
};

// function evenOrOdd(num: number): string {
//     if(num % 2 === 0) {
//         return (`${num} is even!`);
//     } else return (`${num} is odd!`);
// };

console.log(evenOrOdd(19));
console.log(evenOrOdd(46));

// exercise 5
for(let i = 0; i <= 10; i++) {
    console.log(i)
};

// exercise 6, 7, 8, 9, 10 - skip these

// exercise 11
const myString: string = "spunky";
const myNum: number = 14;
const isAwesome: boolean = true;
const myEmptyValue: null = null;
const myUnknownValue: undefined = undefined;
interface myPet {
    name: string;
    breed: string;
    isHousetrained: boolean;
    age: number
};

let myPet: myPet = {
    name: 'Lavendar',
    breed: 'Labrador',
    isHousetrained: true,
    age: 2
};
const myNeighbors: string[] = ['Brad', 'Cora', 'Eileen'];
let answer: number;

// exercise 12 - HTML and DOM skip

// exercise 13
function arrayOfMultiples(num: number, length: number) : number[] {
    let result: number[] = [];
    for(let i = 1; i <= length; i++) {
        result.push(num * i);
    }
    return result
};
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));

// exercise 14
function typeOfNumber(num: number): string {
    if(num < 0) {
        return(`${num} is negative.`)
    } else if(num === 0) {
        return(`${num} is zero.`)
    } else if(num > 0) {
        return(`${num} is positive.`)
    } else return(`There was an error.`)
};
console.log(typeOfNumber(-45));
console.log(typeOfNumber(0));
console.log(typeOfNumber(74));
