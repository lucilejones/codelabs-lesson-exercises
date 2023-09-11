// exercise 1
function globalFunction() {
    console.log(this)
}

globalFunction();
// this in the globalFuction refers to the Window object
// will print the global object in the node environment
// scopes are objects

const car = {
    make: "Kia",
    model: "Carnival",
    year: 2023,

    printDetails() {
        console.log(`${this.make}, ${this.model}, ${this.year}`, this);
    }
}

car.printDetails();
// this here refers to the car object

const car2 = {
    make: "Hyundai",
    model: "Accent",
    year: 2008,

    printDetails: () => {
        console.log(this)
        console.log(`${this.make}, ${this.model}, ${this.year}`);
    }
}

car2.printDetails();
// this in the arrow function will refer to the Window object, it doesn't have its own this scope so it will inherit the this scope of the nearest surrounding regular function
// and the this.make, etc will be undefined


// exercises 2 - 6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`${this.name} says, "Hello!"`)
    }

    static info() {
        return "This is a Person class."
    }

    get age() {
        return this._age
    }

    set age(value) {
        if(value < 0 ) {
            throw "Age must be a positive number."
        }
        this._age = value
    }
}

const person1 = new Person("Luci", 40);
person1.greet();
const person2 = new Person("Amanda", 35);
person2.greet();

console.log(Person.info());
// this prints "This is a Person class."
// console.log(person1.info());
// this will print undefined and using info() will say person1.info is not a function

console.log(person1.age);
person1.age = 38;
console.log(person1.age);
// person1.age = -14;



// exercise 6 in private-fields-in-classes


// exercise 7
class Library {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    books = [];

    addBook = function(newBook) {
        this.books.push(newBook);
    }

    removeBook = function(deleteBook) {
        const index = this.books.indexOf(deleteBook);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    }

    printBooks = function() {
        for(let i = 0; i < this.books.length; i++) {
            console.log(this.books[i].title)
        }
    }
}

class Book {
    #isbn;

    constructor(isbn, title, author, subject) {
        this.#isbn = isbn;
        this.title = title;
        this.author = author;
        this.subject = subject;
    }
}

const myLibrary = new Library("Orem Public Library", "Orem, UT");
const book1 = new Book(9780140430721, "Pride and Prejudice", "Jane Austen", "social commentary");

console.log(myLibrary.books)

myLibrary.addBook(book1);

console.log(myLibrary);
console.log(myLibrary.books);

const book2 = new Book(9780060853976, "Good Omens", "Terry Pratchett and Neil Gaiman", "fantasy");

myLibrary.addBook(book2);

console.log(myLibrary.books);

myLibrary.removeBook(book2);
console.log(myLibrary.books);

myLibrary.printBooks();

