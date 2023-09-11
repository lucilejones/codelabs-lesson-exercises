// exercise 1
// const userName = prompt("What is your name?");
// function greet(name) {
//     alert(`Hello, ${name}!`);
// }
// greet(userName);

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Luci"));

// exercise 2
function multiply(num1, num2) {
    return num1 * num2
};

console.log(multiply(2, 4));

// exercise 3
const person = {
    name: "Joann",
    age: 34,
    gender: "female"
};

console.log(person);

// exercise 4
const car = {
    make: "Kia",
    model: "Carnival",
    year: 2023
};

console.log(car);

// exercise 5
function reverseString(string) {
    // const arr = string.split("");
    // const reversedArr = arr.reverse();
    // const newString = reversedArr.join("");
    // return newString;
    return string.split("").reverse().join("");
}

console.log(reverseString("tarantula"));
console.log(reverseString("pink pajamas"));

// exercise 6
function calculateArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(calculateArea(5));

// exercise 7
let now = new Date();
console.log(now);

// exercise 8
let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

// exercise 10 (lesson skips exercise 9) 
function stringInterpolator(str) {
    return `Here is the input: ${str}`;
}
console.log(stringInterpolator("All the 50 states."))

// exercise 11
const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(`Name: ${userForm.name.value}`);
});