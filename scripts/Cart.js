class Cart {
    constructor() {
        this.cartItems = [];
    }

    addToCart(toy) {
        // If toy in the cart, add quantity
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].toy.getID() === toy.getID()) {
                this.cartItems[i].addQuantity();
                return;
            }
        }
        // If not in cart, add the toy to cart with quantity 1
        this.cartItems.push(new CartToy(toy));
    }

    getQuantity(toy) {
        for (let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].toy.getID() === toy.getID()) {
                return this.cartItems[i].getQuantity();
            }
        }
    }

    removeFromCart(toyID) {
        const itemIndex = this.cartItems.findIndex(item => item.toy.getID() === toyID);

        if (itemIndex === -1) {
            console.warn(`Item with ID ${toyID} not found in the cart.`);
            return;
        }

        this.cartItems.splice(itemIndex, 1);
        this.displayCart();
    }


    toString() {
        let output = "Cart:\n";
        for (let i = 0; i < this.cartItems.length; i++) {
            output += this.cartItems[i].toString() + "\n";
        }
        return output;
    }

    decreaseQuantity(toyID) {
        let item = this.cartItems.find(cartItem => cartItem.toy.getID() === toyID);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.displayCart();
        }
    }

    increaseQuantity(toyID) {
        let item = this.cartItems.find(cartItem => cartItem.toy.getID() === toyID);
        if (item) {
            item.quantity++;
            this.displayCart();
        }
    }

    displayCart() {
        let cartItemsContainer = document.getElementById('cart-items');
        let emptyCart = document.getElementById('empty-cart-message');
        let totalPriceElement = document.getElementById('total-price');
        let total = 0;

        cartItemsContainer.innerHTML = '';

        if (this.cartItems.length === 0) {
            emptyCart.style.display = "block";
            total = 0;
        } else {
            emptyCart.style.display = "none";

            for (let i = 0; i < this.cartItems.length; i++) {
                let toy = this.cartItems[i].toy;
                let quantity = this.cartItems[i].quantity;
                let price = toy.getPrice();
                total += price * quantity;


                let toyInCart = `
                <div class="cart-item">
                    <img class="item-image" src="${toy.getImageLink()}" alt="${toy.getName()}">
                    <div class="cart-item-details">
                        <div class="item-name"><strong>${toy.getName()}</strong></div>
                        <div class="item-price">Price: $${price}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="CART.decreaseQuantity(${toy.getID()})">-</button>
                        <span>${quantity}</span>
                        <button onclick="CART.increaseQuantity(${toy.getID()})">+</button>
                        <button onclick="CART.removeFromCart(${toy.getID()})" class="remove-button">Remove From Cart</button>
                    </div>
                </div>`;

                cartItemsContainer.innerHTML += toyInCart;
            }
        }
        totalPriceElement.innerText = total.toFixed(2);
    }
}
