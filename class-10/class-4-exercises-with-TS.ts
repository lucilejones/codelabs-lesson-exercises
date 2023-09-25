// exercise 1
function greet(name: string): string {
    return `Hello, ${name}!`
};
console.log(greet('Luci'));

// exercise 2
function multiply(num1: number, num2: number): number {
    return num1 * num2
};
console.log(multiply(5,3));

// exercise 3
let person: {
    name: string;
    age: number;
    gender: string;
};

person = {
    name: "Bri",
    age: 30,
    gender: 'female'
};
console.log(person);

// exercise 4
let car: {
    make: string;
    model: string;
    year: number;
};

car = {
    make: "Kia",
    model: "Carnival",
    year: 2023
}
console.log(car);

// exercise 5
function reverseString(str: string): string {
    return str.split("").reverse().join("");
};

console.log(reverseString("tarantula"));

// exercise 6
function calculateArea(radius: number): number {
    return Math.PI * radius ** 2;
};

console.log(calculateArea(5));

// exercise 7
let now: {} = new Date();
console.log(now);

// exercise 8
let randomNum: number = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

// exercise 9
function stringInterpolation(str: string): string {
    return `"${str}" is the string!`
};
console.log(stringInterpolation('Hoorah, porcupines'));

// exercise 10 HTML - skip

// exercise 11
function keysAndValues(obj: {}): any[] {
    let keys: any[] = []
    let properties: any[] = []
    for(const key in obj) {
        keys.push(key)
        properties.push(obj[key])
    };

    return [keys, properties]
};
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));