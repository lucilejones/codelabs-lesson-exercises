// Observer pattern
// have a list of subscribers waiting to be notified of a broadcast

// this class will be a template for creating observers

class Observer {
    // our specific observers
    observers = [];

    // instance method - adding subscribers
    // a function waiting to be called
    subscribe(fn){
        this.observers.push(fn);
    }

    // instance method - broadcast information to subscribers
    broadcast(data){
        this.observers.forEach(sub => sub(data))
        // every specific value of the array is a function
    }
}

// creating an observer instance
const observer = new Observer;

// declare a subscriber
const subscriber = (data) => {
    console.log("This is from subscriber 1")
    console.log("Here is some data, " + data)
}

const subscriberTwo = (data) => {
    console.log("This is from subscriber 2")
    console.log("Here is the data again: " + data)
}


console.log("Before subscriber list ", observer.observers)

// we need to pass in an argument
// adding a subscriber to the list
observer.subscribe(subscriber);
observer.subscribe(subscriberTwo);

console.log("After subscriber list ", observer.observers)

// calling broadcast, this is going to execute every subscriber
observer.broadcast("John Doe");
// this is the information we want every subscriber to get

