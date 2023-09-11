// const classroom = {
//     name: "High Five",
//     students: ["Jamal", "Ryanne", "Hope"],
//     printStudents: function () {
//         console.log("'this' in implicit scope: ", this.students);
//     }
// }

// classroom.printStudents();
// console.log(this);


// const getName = function() {
//     console.log("'this' in explicit scope: ", this.name)
// };

// const player = {
//     name: Lebron,
//     isHappy: true,
// }

// getName.call(player);


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound`)
//     }
// }

// const dog = new Animal('Gizmo');
// dog.speak();

// const cat = new Animal('JiJi');
// cat.speak();


// getters and setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height
    }

    set dimensions(value) {
        [this.width, this.height] = value;
    }
}

// getter - will get info about class/object
const rectangle1 = new Rectangle(4, 5);
console.log(rectangle1.area)
// don't need the () after area; is similar to the .length property on an array

// setter - will set info on the object
rectangle1.dimensions = [2, 3];
console.log(rectangle1.area)


// static method
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(4, 5));

// a static method is called on the class itself, it's not going to be related to an instance of that class


// private class fields
class Circle {
    #radius; // radius will be private

    constructor(radius) {
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * this.#radius * this.#radius;
    }
}

const circle = new Circle(5)
console.log(circle.getArea());
// this will console the area, but the radius is private
console.log(circle.radius); // this will print undefined because it's private

// static methods in practical case
// like performing a unit conversion before storing the data in a newly constructed object?  Like maybe the user is putting the data in as pounds, but the object converts it to kilograms?
// Static methods belong to the class rather than any particular object instance.
// another Example: connecting your bank account number with ATM transactions, so the account number wouldn't be changed

