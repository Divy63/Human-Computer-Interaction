class Toy{

    static idCounter=0;
    // Constructor for a toy class
    constructor(name,price,rating,quantity,imageLink,otherLink,toyType){
        
        this.id=this.idCounter++;
        this.name=name;
        this.price=price;
        this.rating=rating;
        this.quantity=quantity;
        this.imageLink=imageLink;
        this.otherLink=otherLink;
        this.toyType=toyType;
    }
    getID(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getRating(){
        return this.rating;
    }

    getQuantity(){
        return this.quantity;
    }

    getImageLink(){
        return this.imageLink;
    }

    getOtherImageLink(){
        return this.otherLink;
    }

    getToyType(){
        return this.toyType;
    }



}