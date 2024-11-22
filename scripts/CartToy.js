class CartToy{
    constructor(toy){
        this.toy = toy;
        this.quantity=1;
    }

    addQuantity(){
        this.quantity += 1;
    }

    subtractQuantity(){
        this.quantity -= 1;
    }


}