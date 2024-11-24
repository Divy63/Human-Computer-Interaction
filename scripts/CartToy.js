class CartToy{
    constructor(toy,quantity){
        this.toy = toy;
        this.quantity=quantity || 1;
    }
    
    
    addQuantity(){
        this.quantity += 1;
    }

    subtractQuantity(){
        this.quantity -= 1;
    }


}