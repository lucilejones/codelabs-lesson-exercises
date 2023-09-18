// SELECTORS

// const btns = document.querySelectorAll('.btn');
// this will select all the buttons on the page and create an array that we can loop over

// EVENTS
// when the button is clicked: change the background color
// btns.forEach((button) => 
//     button.addEventListener("click", (e) => {
//         const color = e.target.getAttribute('data-color');

//         changeBGColor(color);
//     }),
// );

// FUNCTiONS
// output: change background color
// function changeBGColor(colorStr) {
//     // console.log(e.target.getAttribute('data-color'));
//     document.body.style.backgroundColor = colorStr;
// }

// APPLICATION START
// changeBGColor('orange');



// calculator
// selectors
// const priceInput = document.querySelector("#price");
// const quantityInput = document.querySelector("#quantity");
// const totalPriceDisplay = document.querySelector(".total-price");
// const quantityLabel = document.querySelector('.quantity-label');

// events
// priceInput.addEventListener('input', updateTotalDisplay);

// quantityInput.addEventListener('input', updateTotalDisplay);

// quantityInput.addEventListener('input', updateQuantityLabel);

// functions
// function updateTotalDisplay() {
//     const price = priceInput.value;

//     const quantity = quantityInput.value;

//     const total = price * quantity;

//     totalPriceDisplay.innerText = `$${total.toFixed(2)}`
// }

// function updateQuantityLabel() {
//     const quantity = quantityInput.value;

//     quantityLabel.innerText = quantity;
// }


// application start
// updateTotalDisplay();



// crazy button
// selectors
const btn = document.querySelector('#btn');

// events
btn.addEventListener('mouseenter', goBtnWild);

// functions
function goBtnWild() {
    // need to add the class "crazy button" from the class notes with the absolut position
    // create a random "top" value on the screen
    const offsetTop = Math.random() * (window.innerHeight - btn.clientHeight);

    // create a random "left" value on teh screen
    const offsetLeft = Math.random() * (window.innerWidth = btn.clientWidth);

    btn.style.top = offsetTop + 'px';
    btn.style.left = offsetLeft + 'px';
}

// can also remove an event listener - if a user actually clicks the button, remove the event listener and add an alert "you win"
