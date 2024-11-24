// Container Class 'Toys' for 'Toy' which helpsto manage a list of 'Toys' to display
class Toys{
    constructor(){
        this.toys = [];//Array that stores a toy
        this.filter = ["Category","None","Age",0,Infinity,"Price",0,Infinity,"STAR",6];//applied filters
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

    }

    editFilterArray(type,start,end=Infinity){
        if(type === "Category"){
            this.filter[1] = start;            
        }
        if(type === "Age"){
            this.filter[3] = start;
            this.filter[4] = end;            
        }
        if(type === "Price"){
            this.filter[6] = start;
            this.filter[7] = end;            
        }
        if(type === "Star"){
            this.filter[9] = start;                     
        }

    }

    // Method that displays toys in the html page.
    // It creates a container for each toy and forms a card for it to display.
    displayHTML(){
        let htmlContainer=document.getElementById('box-toy-card');
        if(htmlContainer){
        htmlContainer.innerHTML='';//Emptying the container


        let notificationDiv = document.getElementById('notification');
        if (!notificationDiv) {
            notificationDiv = document.createElement('div');
            notificationDiv.id = 'notification';
            document.body.appendChild(notificationDiv); 
        }





        
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
    }
    }

    
    getByID(id){
        let toy;
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
        console.log("current db");
       console.log(this.toys);
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
        console.log("current db");
        console.log(this.toys);
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
        this.filterArray[2] = category;
       console.log("Filter array");
       console.log(this.filterArray);
        console.log("current db");
       console.log(this.toys);
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

    applyCategoryFilter(category){
        //let htmlContainer=document.getElementById('box-toy-card');
       // htmlContainer.innerHTML='';//Emptying the container
       this.filterArray[2] = category;
       console.log("Filter array");
       console.log(this.filterArray);
       console.log("current db");
       console.log(this.toys);
       //alert(category)
        let filteredToys=new Toys();
        for(let i=0;i<this.toys.length;i++){
            let toy=this.toys[i];
            if(toy.getToyType()===category){
                console.log("FILTERED");
                filteredToys.add(this.toys[i]);
            }
        }
        filteredToys.displayHTML();
        
    }

    filterToyDB(){
       
        let filteredToys=new Toys();        
        for(let i=0;i<this.toys.length;i++){
            let toy=this.toys[i];
            let price= parseFloat(this.toys[i].getPrice().replace('$', ''));
            if (this.filter[1] === "None"){ 
                console.log("filter by none");               
                if (this.filter[9] <= 5){
                    if (toy.getRating()===this.filter[9]){
                        if (price>=this.filter[6] && price<=this.filter[7]){
                            if(toy.getAge()>=this.filter[3] && toy.getAge()<=this.filter[4]){
                                filteredToys.add(this.toys[i]);
                            }
                        }
                    }     
                } 
                else{
                    if (price>=this.filter[6] && price<=this.filter[7]){
                        if(toy.getAge()>=this.filter[3] && toy.getAge()<=this.filter[4]){
                            filteredToys.add(this.toys[i]);
                        }
                    }
                }      
            }
            else{
                console.log("filter by category");
                if(toy.getToyType()===this.filter[1])
                {  
                    if (this.filter[9] <= 5){
                        if (toy.getRating()===this.filter[9]){
                            if (price>=this.filter[6] && price<=this.filter[7]){
                                if(toy.getAge()>=this.filter[3] && toy.getAge()<=this.filter[4]){
                                    filteredToys.add(this.toys[i]);
                                }
                            }
                        }     
                    } 
                    else{
                        if (price>=this.filter[6] && price<=this.filter[7]){
                            if(toy.getAge()>=this.filter[3] && toy.getAge()<=this.filter[4]){
                                filteredToys.add(this.toys[i]);
                            }
                        }
                    }                    
                }
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


