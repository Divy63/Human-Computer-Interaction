class Toy{

    static idCounter=-1;
    // Constructor for a toy class
    constructor(name,price,rating,quantity,imageLink,otherLink,toyType,age,keywords,id){
        
        this.id=id || ++Toy.idCounter;
        this.name=name;
        this.price=price;
        this.rating=rating;
        this.quantity=quantity;
        this.imageLink=imageLink;
        this.otherLink=otherLink;
        this.toyType=toyType;
        this.age=age;
        this.keywords=keywords;
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

    getAge(){
        return this.age;
    }

    getKeywords(){
        return this.keywords;
    }


}