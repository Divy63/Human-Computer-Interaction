class Cart{
    constructor(){
        this.cartItems=[];
    }

    addToCart(toy){

        // If toy in the cart add quantity
        for(let i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].toy.getID()===toy.getID()){
                this.cartItems[i].addQuantity();
                return;
            }

        }

        // If not in cart add the toy to cart with quantity 1
        this.cartItems.push(new CartToy(toy));
    }

    getQuantity(toy){
        for(let i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].toy.getID()===toy.getID()){
                return this.cartItems[i].getQuantity();
                }
            }
    }

    removeFromCart(toyID){
        for(let i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].toy.getID()===toyID){
                if(this.cartItems[i].quantity>1){
                    this.cartItems[i].subtractQuantity();
                }else{
                    this.cartItems.splice(i,1);
                }
                return;
            }
        }
        this.displayCart();
    }

    toString(){
        let output="Cart:\n";
        for(let i=0;i<this.cartItems.length;i++){
            output+=this.cartItems[i].toString()+"\n";
            }
        return output;
    }

    decreaseQuantity(ID){
        for(let i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].toy.getID()===ID){
                this.cartItems[i].subtractQuantity();
                return;
            }
        }
        this.displayCart();

    }

    increaseQuantity(ID){
        for(let i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].toy.getID()===ID){
                this.cartItems[i].increaseQuantity();
                return;
            }
        }
        this.displayCart();
    }

    displayCart(){
        let cartItemsContainer=document.getElementById('cart-items');
        let emptyCart=document.getElementById('empty-cart-message');
        let totalPriceElement=document.getElementById('total-price');
        let total=0;

        cartItemsContainer.innerHTML='';

        if(this.cartItems.length===0){
            emptyCart.style.display="block";
        }else{
            emptyCart.style.display="none";
            for(let i=0;i<this.cartItems.length;i++){
                let toy=this.cartItems[i].toy;
                let quantity=this.cartItems[i].quantity;
                let price=toy.getPrice();
                total+=price*quantity;

                let toyInCart=`
                <div class="cart-item">
                    <img src="${toy.getImageLink()}" alt="${toy.getName()}">
                    <div class="cart-item-details">
                        <div><strong>${toy.getName()}</strong><div>
                        <div>Price:${toy.getPrice()}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button>-</button>
                        <span>${quantity}</span>
                        <button>+</button>
                        <button onclick="removeFromCart(${toy.getID()})">Remove From Cart</button>
                    </div>
                </div>`;
    
                cartItemsContainer.innerHTML+= toyInCart;
            
            }
            

            totalPriceElement.innerText=total.toFixed(2);
        }
           
    }



}

