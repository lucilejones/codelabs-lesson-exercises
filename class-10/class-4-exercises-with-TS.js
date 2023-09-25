// exercise 1
function greet(name) {
    return "Hello, ".concat(name, "!");
}
;
console.log(greet('Luci'));
// exercise 2
function multiply(num1, num2) {
    return num1 * num2;
}
;
console.log(multiply(5, 3));
// exercise 3
var person;
person = {
    name: "Bri",
    age: 30,
    gender: 'female'
};
console.log(person);
// exercise 4
var car;
car = {
    make: "Kia",
    model: "Carnival",
    year: 2023
};
console.log(car);
// exercise 5
function reverseString(str) {
    return str.split("").reverse().join("");
}
;
console.log(reverseString("tarantula"));
// exercise 6
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
;
console.log(calculateArea(5));
// exercise 7
var now = new Date();
console.log(now);
// exercise 8
var randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);
// exercise 9
function stringInterpolation(str) {
    return "\"".concat(str, "\" is the string!");
}
;
console.log(stringInterpolation('Hoorah, porcupines'));
// exercise 10 HTML - skip
// exercise 11
function keysAndValues(obj) {
    var keys = [];
    var properties = [];
    for (var key in obj) {
        keys.push(key);
        properties.push(obj[key]);
    }
    ;
    return [keys, properties];
}
;
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
