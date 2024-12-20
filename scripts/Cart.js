class Cart {
  constructor() {
    this.cartItems = [];
    this.totalcartitems = 0;
  }

  getCartItems() {
    return this.cartItems;
  }

  addCartToy(cartToy) {
    this.cartItems.push(cartToy);
    this.totalcartitems += 1;
  }

  addToCart(toy) {
    console.log("Adding toy to cart:", toy);

    let existingToy = this.cartItems.find(
      (cartToy) => cartToy.toy.id === toy.id
    );

    if (existingToy) {
      console.log(
        `Toy with ID ${toy.id} already in cart. Increasing quantity.`
      );
      existingToy.addQuantity();
      this.totalcartitems = this.totalcartitems + 1;
    } else {
      console.log(`Toy with ID ${toy.id} is not in cart. Adding new CartToy.`);
      this.cartItems.push(new CartToy(toy));
      this.totalcartitems = this.totalcartitems + 1;
    }

    let tryYourLuck;
    if (this.cartItems.length > 0) {
      tryYourLuck = true;
    } else {
      tryYourLuck = false;
    }
    this.updateLocalStorageCart(tryYourLuck);
  }

  getQuantity(toy) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].toy.getID() === toy.getID()) {
        return this.cartItems[i].getQuantity();
      }
    }
  }

  removeFromCart(toyID) {
    const itemIndex = this.cartItems.findIndex((item) => item.toy.id === toyID);

    if (itemIndex === -1) {
      console.warn(`Item with ID ${toyID} not found in the cart.`);
      return;
    }

    this.cartItems.splice(itemIndex, 1);
    let cartItemsContainer = document.getElementById("cart-items");

    cartItemsContainer.innerHTML = "";

    this.displayCart();

    let tryYourLuck;
    let tryYourLuckBoolean = JSON.parse(sessionStorage.getItem("tryYourLuck"));
    if (tryYourLuckBoolean === true) {
      tryYourLuck = true;
    } else {
      tryYourLuck = false;
    }
    if (this.cartItems.length > 0) {
      if (
        this.cartItems.length == 1 &&
        this.cartItems[0].toy.name === "Darts" &&
        tryYourLuck === true && this.cartItems[0].toy.price=="13.99"
      ) {
        console.log("Removing Darts");
        this.removeFromCartByName("Darts");
        tryYourLuck = false;
      } else {
        tryYourLuck = true;
      }
    } else {
      tryYourLuck = false;
    }
    this.totalcartitems = this.totalcartitems - 1;
    this.updateLocalStorageCart(tryYourLuck);
    this.updateCartTotal();
  }

    getTotalItems(){
        console.log("Total Cart");
        console.log(this.totalcartitems);
        return this.totalcartitems;
    }


  removeFromCartByName(toyName) {
    const itemIndex = this.cartItems.findIndex(
      (item) => item.toy.name === toyName
    );

    if (itemIndex === -1) {
      console.warn(`Item with ID ${toyID} not found in the cart.`);
      return;
    }

    this.cartItems.splice(itemIndex, 1);
    let cartItemsContainer = document.getElementById("cart-items");

    cartItemsContainer.innerHTML = "";

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
    let item = this.cartItems.find((cartItem) => cartItem.toy.id === toyID);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.totalcartitems=this.totalcartitems - 1;
      let cartItemsContainer = document.getElementById("cart-items");

      cartItemsContainer.innerHTML = "";

      this.displayCart();
    }
    this.updateLocalStorageCart(true);
    this.updateCartTotal();
  }

  increaseQuantity(toyID) {
    let item = this.cartItems.find((cartItem) => cartItem.toy.id === toyID);
    if (item) {
      item.quantity++;
      this.totalcartitems=this.totalcartitems + 1;
      let cartItemsContainer = document.getElementById("cart-items");

      cartItemsContainer.innerHTML = "";
      console.log("I am increasing");
      this.displayCart();
    }
    

    this.updateLocalStorageCart(true);
    this.updateCartTotal();
  }

  displayCart() {
    console.log("DISPLAY CALLED");
    let cartItemsContainer = document.getElementById("cart-items");
    let emptyCart = document.getElementById("empty-cart-message");
    let cartTotalElement = document.getElementById("cart-total");
    let totalPriceElement = document.getElementById("total-price");
    let gstPriceElement = document.getElementById("gst-price");
    let pstPriceElement = document.getElementById("pst-price");
    let total = 0;
    let gstPrice = 0;
    let pstPrice = 0;

    cartItemsContainer.innerHTML = "";
    console.log(cartItemsContainer.innerHTML);

    let cartButtonsContainer = document.getElementById("cart-buttons");
    let checkoutPopup = document.getElementById("dialog");

        cartButtonsContainer.innerHTML="";

        if (this.cartItems.length === 0) {
            emptyCart.style.display = "block";
            cartTotalElement.style.display = "none";
        } else {
            emptyCart.style.display = "none";
            cartTotalElement.style.display = "block";
            for (let i = 0; i < this.cartItems.length; i++) {
                let toy = this.cartItems[i].toy;
                let quantity = this.cartItems[i].quantity;
                let price = toy.price;
                total += price * quantity;


                let toyInCart = `
            <div class="cart-item">
                <img class="item-image" src="${toy.imageLink}" alt="${toy.name}">
                <div class="cart-item-details">
                    <div class="item-name"><strong>${toy.name}</strong></div>
                    <div class="item-price">Price: $${toy.price}</div>
                </div>
                <div class="cart-item-actions">
                    <button style="font-weight: bold;" onclick="CART.decreaseQuantity(${toy.id})">-</button>
                    <strong>${quantity}</strong>
                    <button style="font-weight: bold;" onclick="CART.increaseQuantity(${toy.id})">+</button>
                    <button onclick="CART.confirmRemove(${toy.id})" class="remove-button">Remove From Cart</button>
                </div>
            </div>`;

                cartItemsContainer.innerHTML += toyInCart;
            }

            gstPrice = total * 0.05;
            pstPrice = total * 0.07;

            this.displayCheckoutAndHomeButton(); // Moved outside loop to avoid duplication.
        }

        pstPriceElement.innerText = pstPrice.toFixed(2);
        gstPriceElement.innerText = gstPrice.toFixed(2);
        total += gstPrice + pstPrice;
        totalPriceElement.innerText = total.toFixed(2);
    }


    confirmRemove(toyId) {
        const userConfirmed = confirm("Are you sure you want to remove this item from the cart?");
        if (userConfirmed) {
            this.removeFromCart(toyId);
            this.displayCart();
        }
    }


    emptyTotal() {
        let cartTotalElement = document.getElementById('cart-total');
        cartTotalElement.innerHTML = '';
    }

    getCartData() {
        return this.cartItems;
    }

  updateLocalStorageCart(tryYourLuck) {
    const cartItemsData = this.getCartItems().map((cartToy) => ({
      toy: cartToy.toy,
      quantity: cartToy.quantity,
    }));
    sessionStorage.setItem("cartItemsData", JSON.stringify(cartItemsData));

    const tryYourLuckStorage = {
      tryYourLuck: tryYourLuck,
    };
    sessionStorage.setItem("tryYourLuck", JSON.stringify(tryYourLuck));
  }

  updateCartTotal() {
    console.log("UPDATE CART TOTAL METHOD called");
    console.log(this.totalcartitems);
    sessionStorage.setItem("cartTotal", JSON.stringify(this.totalcartitems));
  
}


  toString() {
    return this.cartItems.toy + "" + this.cartItems.quantity;
  }

    displayCheckoutAndHomeButton() {
        let cartButtonsContainer = document.getElementById("cart-buttons");
        let checkoutPopup = document.getElementById("dialog");

        cartButtonsContainer.innerHTML = "";

        let checkoutButton = document.createElement("button");
        checkoutButton.textContent = "Checkout";
        checkoutButton.className = "btn-primary-checkout";
        checkoutButton.id = "checkout-button";
        checkoutButton.addEventListener("click", () => {
            checkoutPopup.showModal();

            let closeButton = checkoutPopup.querySelector(".x");
            closeButton.addEventListener("click", () => {
                checkoutPopup.close();
            });
        });

        let homeButton = document.createElement("button");
        homeButton.textContent = "Home";
        homeButton.className = "btn-primary-checkout";
        homeButton.id = "btn-secondary-homepage";
        homeButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });

        cartButtonsContainer.appendChild(checkoutButton);
        cartButtonsContainer.appendChild(homeButton);

    }
}
