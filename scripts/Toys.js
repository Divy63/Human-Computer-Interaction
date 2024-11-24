// Container Class 'Toys' for 'Toy' which helpsto manage a list of 'Toys' to display
class Toys{
    constructor(){
        this.toys = [];//Array that stores a toy
    }

    // Method that adds toy to the List
    add(toy){
        this.toys.push(toy);
    }

    // Method that gives length of the toys array
    getLength(){
        return (this.toys.length);
    }

    get(i){
        return this.toys[i];
;
    }


    // Method that displays toys in the html page.
    // It creates a container for each toy and forms a card for it to display.
    displayHTML(){
        let htmlContainer=document.getElementById('box-toy-card');
        if(htmlContainer){
        htmlContainer.innerHTML='';//Emptying the container
        
        for(let i=0;i<this.toys.length;i++){
            let toy=this.toys[i];
            
            // Display ratings using star images
            let stars=Math.floor(toy.rating);
            let halfstar=(toy.rating%1);
            let starDisplay='';
            for(let j=0;j<stars;j++){

                // Adding a full star
                starDisplay+=`<span class="rating">&#9733;</span>`
            }
            if (halfstar >= 0.5 && stars<5){
                // adding a full star
                starDisplay+=`<span class="rating">&#9733;</span>`
            }else{
                // adding a half star
                starDisplay+=`<span class="rating">&#9734;</span>`
            }

            while(starDisplay.split(' ').length<5 && stars<5){
                starDisplay+=`<span class="rating">&#9734;</span>`
            }
            let toyCard=``;
            if(toy.quantity<=0){
                toyCard=`
                <div class="toy-card">
                    <picture>
                        <source srcset="${toy.getImageLink()}" type="image/webp" alt="${toy.getName()}">
                        <img src="${toy.getOtherImageLink()}" alt="${toy.getName()}">
                    </picture>
                    <div class="toy-card-container">
                        <div class="card-title">${toy.getName()}</div>
                        <div class="rating">${starDisplay}</div>
                        </div>
                    <div class="toy-card-footer">
                        <div class="card-price">Out Of Stock</div>
                    </div>
                </div>`;
            }else{
                console.log("CREATING ID");
                 toyCard=`
                    <div class="toy-card">
                        <picture>
                            <source srcset="${toy.getImageLink()}" type="image/webp" alt="${toy.getName()}">
                            <img src="${toy.getOtherImageLink()}" alt="${toy.getName()}">
                        </picture>
                        <div class="toy-card-container">
                            <div class="card-title">${toy.getName()}</div>
                            <div class="rating">${starDisplay}</div>
                            </div>
                        <div class="toy-card-footer">
                            <div class="card-price">$${toy.getPrice()}</div>
                            <button class="add-to-cart-btn" id="add to cart - ${toy.getID()}">
                                <img src="images/buttons/add-to-cart-icon.png" alt="Add to Cart"></i>
                            </button>
                        </div>
                    </div>`;
            }
            
            htmlContainer.innerHTML+=toyCard;
        }
        
        console.log("ADD TO CART CREATED");
    }
    }

    // showNotification(itemName) {
    //     const notification = document.getElementById('notification');
    //     notification.innerText = `${itemName} has been added to the cart!`;
    //     notification.classList.add('show');

    //     setTimeout(() => {
    //         notification.classList.remove('show');
    //     }, 3000); // Hides after 3 seconds
    // }

    
    getByID(id){
        for(let i=0;i<this.toys.length;i++){
            if(this.toys[i].getID()==id){
                toy=this.toys[i];
                break;
        }
        }
        console.log(toy);
        return toy;
    }


    toString(){
        console.log(toys);
    }

    applyPriceFilter(start,end=Infinity){
        console.log("In Price FIlter");
        let filteredToys=new Toys();
        for(let i=0;i<this.toys.length;i++){
            console.log("IN LOOP");
            let price= parseFloat(this.toys[i].getPrice().replace('$', ''));
            if(price>=start && price<=end){

                console.log("FILTERED");
                filteredToys.add(this.toys[i]);
            }
        }
        filteredToys.displayHTML();

    }   

    applyAgeFilter(start,end=Infinity){
        console.log("In Price FIlter");
        let filteredToys=new Toys();
        for(let i=0;i<this.toys.length;i++){
            let toy=this.toys[i];
            console.log("IN LOOP");
            if(toy.getAge()>=start && toy.getAge()<=end){
                console.log("FILTERED");
                filteredToys.add(this.toys[i]);
            }
        }
        filteredToys.displayHTML();

    }   

    applyRatingFilter(star){
        console.log("In Rating FIlter");
        let filteredToys=new Toys();
        for(let i=0;i<this.toys.length;i++){
            let toy=this.toys[i];
            console.log("IN LOOP");
            if(toy.getRating()===star){
                console.log("FILTERED");
                filteredToys.add(this.toys[i]);
            }
        }
        filteredToys.displayHTML();

    }


    searchToys(searchText){


        result=this.toys.filter(toy => {
            return (toy.getName().toLowerCase().includes(searchText.toLowerCase()) ||
             toy.getToyType().toLowerCase().includes(searchText.toLowerCase()))||
             toy.getKeywords().some(keyword=>keyword.toLowerCase().includes(searchText.toLowerCase())
            );
        });

        return result;
    }


}


