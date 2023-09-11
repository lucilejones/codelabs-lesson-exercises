// function counter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         decrement: function() {
//             count--;
//             return count;
//         },
//         getCount: function() {
//             return count;
//         }
//     }
// }

// let myCounter = counter();

// console.log("My count is initially " + myCounter.getCount());
// myCounter.increment();
// console.log("My count is now " + myCounter.getCount());

// closure allows the inner functions to retain the context of their outer scope at the time of their creation


// exercise #1
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();


// exercise #2
function mainFunction() {
    // call the hoistedFunction here
    printDetails();
    // Now, declare the hoistedFunction below
    function printDetails() {
        console.log("Here are the details.")
    }
}

mainFunction();


// exercise #3
function greetUser(name) {
    return function sayHello(greeting) {
        console.log(`${greeting}, ${name}.`);
    }
};

const newGreeting = greetUser("Luci");
newGreeting("Good morning");


// exercise #4
// Declare a global variable here
let favoriteShow = "Good Omens";
console.log("initial value: " + favoriteShow)

function modifyGlobal() {
    // Try to modify the global variable here
    favoriteShow = "Clone Wars";
    console.log("global function: " + favoriteShow);
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    const favoriteShow = "The Good Place";
    console.log("scope test: " + favoriteShow);
}

// Call both functions here
modifyGlobal();
localScopeTest();


// exercise #5
function functionFactory(param) {
    // Return a function that makes use of 'param'
    return function double() {
        console.log(+param * 2);
    }
}

// Create an instance of the inner function by invoking functionFactory with a parameter
const newFunction = functionFactory(14);
newFunction();
// functionFactory(14)();
// use case for this would be when want a two-step function, or to have the inner function protected and not accessible outside; like banks, etc



// exercise #6
function hoistingTest() {
    // Try printing a variable here
    // console.log(dogName);

    // Declare the variable after the console.log
    const dogName = "Lavendar";
    // let or const will say cannot access before initialization
    // var will print "undefined"
}

hoistingTest();


// exercise #7
function setupCounter() {
    // Define a count variable here
    let count = 0;

    return function() {
        // Increment and print the count
        count++;
        console.log(count);
    }
}

// Create a counter instance and invoke it to test
const counterCall = setupCounter();
counterCall();
counterCall();


// exercise #8
function counterWithLimit() {
    let count = 0;

    return function() {
        if(count < 5) {
            count++;
            console.log(count);
        } else if(count >= 5) {
            count = 0;
            console.log(count);
        }
    }
}

const tryCounter = counterWithLimit();

tryCounter(); // prints 1
tryCounter(); // prints 2
tryCounter(); // prints 3
tryCounter(); // prints 4
tryCounter(); // prints 5
tryCounter(); // prints 0
tryCounter(); // prints 1
tryCounter(); // prints 2

