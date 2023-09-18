// exercise 1
const myDiv = document.querySelector('#myDiv');
myDiv.style.backgroundColor = 'lightblue';

const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs)
paragraphs.forEach( (p) => {
    console.log(p.innerText)
});


