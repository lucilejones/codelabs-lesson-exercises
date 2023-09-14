// JS is single thread so code is executed in a line/queue
// asyn lets us not block the line while we wait for something to finish executing
console.log(1);
setTimeout( () => {
    console.log("This is an example of asynchronous code!");
}, 2000)
console.log(2);
console.log(3);

// practical example
// fetch data from a server
async function fetchPosts(){
    // URL
    const url = '';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    // then could add to the webpage or do something with the data, etc.
}

fetchPosts();
// if we don't use the keyword await when we call the fetchPosts function in the console.log we'll get a Promise
// with the await keyword we're telling it to wait til we get an actual response from the server

// good practice to put this code in a try/catch block
