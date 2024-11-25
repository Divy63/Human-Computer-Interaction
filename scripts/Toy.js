class Toy {

    static idCounter = -1;
    // Constructor for a toy class
    constructor(name, price, rating, quantity, imageLink, otherLink, toyType, age) {

        this.id = Toy.idCounter += 1;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.quantity = quantity;
        this.imageLink = imageLink;
        this.otherLink = otherLink;
        this.toyType = toyType;
        this.age = age;
    }
    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getRating() {
        return this.rating;
    }

    getQuantity() {
        return this.quantity;
    }

    getImageLink() {
        return this.imageLink;
    }

    getOtherImageLink() {
        return this.otherLink;
    }

    getToyType() {
        return this.toyType;
    }

    getAge() {
        return this.age;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

}