// Container Class 'Toys' for 'Toy' which helpsto manage a list of 'Toys' to display
class Toys{
    constructor(){
        this.toys = [];//Array that stores a toy
    }

    // Method that adds toy to the List
    add(toy){
        this.toys.push(toy);
    }

    // Method that displays toys in the html page.
    // It creates a container for each toy and forms a card for it to display.
    displayHTML(){
        let htmlContainer=document.getElementById('box-toy-card');
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
            if (halfstar >= 0.5){
                // adding a full star
                starDisplay+=`<span class="rating">&#9733;</span>`
            }else{
                // adding a half star
                starDisplay+=`<span class="rating">&#9734;</span>`
            }

            // while(starDisplay.split(' ').length<5){
            //     starDisplay+=`<span class="rating">&#9734;</span>`
            // }

            
            let toyCard=`
                <div class="toy-card">
                    <picture>
                        <source srcset="${toy.imageLink}" type="image/webp" alt="${toy.name}">
                        <img src="${toy.otherLink}" alt="${toy.name}">
                    </picture>
                    <div class="toy-card-container">
                        <div class="card-title">${toy.name}</div>
                        <div class="rating">${starDisplay}</div>
                        </div>
                    <div class="toy-card-footer">
                        <div class="card-price">${toy.price}</div>
                        <button class="add-to-cart">
                            <img src="image/Buttons/add-to-cart.jpeg alt="Add to Cart"></i>
                        </button>
                    </div>
                </div>`;
            
            htmlContainer.innerHTML+=toyCard;
        }

    }
}
