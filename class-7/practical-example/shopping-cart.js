class ShoppingCartObserver {
    // instance properties
    items = [];
    observers = [];

    // add items
    addItem(item) {
        // add item to items
        this.items.push(item);
        // notify all subscribers that an item has been added
        // in this example, the cart and the popup
        this.notifyAll();
    }

    // add subscribers to observers
    subscribe(observer){
        this.observers.push(observer);
    }

    // broadcast info to all subscribers
    notifyAll(){
        this.observers.forEach(observer => observer(this.items)) // we're going to push the entire array
    }
}


// instance creation
const shoppingCart = new ShoppingCartObserver;

const updateCart = (items) => {
    // update the ui based on the items
    console.log("updating cart . . .")

    // get card element
    const cartElem = document.getElementById("header-cart");

    // adjust the content
    cartElem.innerText = `Cart(${items.length})`
}

const updatePopUp = (items) => {
    // update the ui based on the items
    console.log("updating pop up")

    // get pop up element
    const popUpElem = document.getElementById("pop-up");

    // adjust the content
    popUpElem.innerText = `You have added ${items[items.length - 1]}`;

    // show the popup (since it starts with property display:none)
    popUpElem.style.display = "block";

}

shoppingCart.subscribe(updateCart);
shoppingCart.subscribe(updatePopUp)