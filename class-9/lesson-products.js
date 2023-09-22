// fetchng products from an api and then render each product on the webpage
// fakestoreapi.com

// use bootstrap 5 CSS / CDN link

async function fetchProducts() {
    const url = "https://fakestoreapi.com/products?limit=20";

    const response = await fetch(url);
    // if we don't inclue await we'll get a promise back, not the data
    const products = await response.json();

    console.log(products);

    products.forEach(product => renderProduct(product))
}

function renderProduct(product) {
    // render product info onto the webpage
    const productsContainer = document.getElementById('products');

    // step 1: create card element
    const cardElement = document.createElement('div')
    cardElement.classList.add('card', 'col-3');
    // using bootstrap class for row/column, etc

    // step 2: create image element
    const imageElement = document.createElement('img');
    imageElement.src = product.image
    imageElement.classList.add('card-img-top');
    cardElement.appendChild(imageElement);

    // step 3: create card body
    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');
    cardElement.appendChild(cardBodyElement);

    // step 4: create title
    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.innerText = product.title;
    cardBodyElement.appendChild(titleElement);

    // step 5: create button
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('btn', 'btn-primary');
    buttonElement.innerText = 'Add to Cart';
    buttonElement.addEventListener('click', () => {
        console.log(product.title);
        // here we want to access the script from the previous lesson to update the shopping cart
        // addItem will alert all the observers (the cart count and the update popup)
        shoppingCart.addItem(product);
        // we'll want to add the object to have all the info (price, title, etc)
    })
    cardBodyElement.appendChild(buttonElement);


    // final step: add card to products container
    productsContainer.appendChild(cardElement);
}

fetchProducts();



// in the previous lesson observer we need to add localStorage funcitonality in the addItem method

// addItem(product) {
//     this.items.push(item);

//     localStorage.setItem('items', JSON.stringify(this.items));

//     this.notifyAll();
// }

// in order for the shopping cart to persist on a refresh, we need to use getItem

const items = JSON.parse(localStorage.getItem('items'));

// inside the class
// setItems(items) {
//     this.items = items;

    // updateCart(this.items);
// }

shoppingCart.setItems(items);
