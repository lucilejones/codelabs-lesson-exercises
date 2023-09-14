// exercise 1 (and 4)
class Subject {
    constructor() {
        this.observers = [];
    }

    // add methods for add, remove, and notify
    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(data) {
        this.observers.forEach((observer) => observer.update(data));
    }

    async fetchAndNotify() {
        const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        this.notifyObservers(data)
    }

}

class Observer {
    update(data) {
        // console.log('Observer updated!');
        try {
            // console.log(data)
            console.log(data[0].title)
        }
        catch(error) {
            console.log(`Error: ${error}`)
        }
    }
}

const observer1 = new Observer;
console.log(observer1);
const observer2 = new Observer;


const subject1 = new Subject;
subject1.addObserver(observer1);
subject1.addObserver(observer2);
console.log(subject1.observers);
// subject1.removeObserver(observer1);
// console.log(subject1.observers);

// subject1.notifyObservers();
subject1.fetchAndNotify(); // this prints (twice): sunt aut facere repellat provident occaecati excepturi optio reprehenderit


// exercise 2
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

const {name, age} = person;
console.log(name); // this will print John

const [, b, , d] = fruits;
console.log(b); // this will print banana

const { address: {city, country}} = person;
console.log(city);


// exercise 3
async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	// Your async/await code here
    try { 
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.log(`Error: ${error}`)
    }
    
}

// Call the function to fetch posts
// fetchPosts();