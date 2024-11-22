let TOY_DATABASE=new Toys();
let CART=new Cart();

function displayToys(toys){
    toys.displayHTML();
}

function onLoadCreateDatabase(){

    // Create Toys to display on load
    let Robot_Head=new Toy("Robot Head","18.99",3,0,"images/toyImages/WEBP/Robot_Head.webp","images/toyImages/JPEG/Robot_Head.jpeg","Action Figures",6);
    let Grizzly_Bear=new Toy("Grizzly Bear","19.99",2,15,"images/toyImages/WEBP/Grizzly_Bear.webp","images/toyImages/JPEG/Grizzly_Bear.jpeg","Games and Puzzles",2);
    let Darts=new Toy("Darts","19.99",4.7,2,"images/toyImages/WEBP/Darts.webp","images/toyImages/JPEG/Darts.jpeg","Outdoor",10);
    let Lego_RangeRover=new Toy("Lego Car (Range Rover)","25.99",4.5,12,"images/toyImages/WEBP/Lego_RangeRover.webp","images/toyImages/JPEG/Lego_RangeRover.jpeg","Games and Puzzles",9);
    let SpiderMan_Comic_Book = new Toy("Spider-Man Comic Book", "9.99", 1, 30, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg","Books and Comics",7);
    let HarryPotter_Book = new Toy("Harry Potter Book", "12.99", 2, 25, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg","Books and Comics",7);
    let IronMan_Figure = new Toy("Iron Man Action Figure", "14.99", 4.65, 50, "images/toyImages/WEBP/Ironman_Figure.webp", "images/toyImages/JPEG/Ironman_Figure.jpeg","Action Figures",3);

    // Images left to be downloaded
    let WonderWoman_Figure = new Toy("Wonder Woman Action Figure", "17.99", 4, 40, "images/toyImages/WEBP/WonderWoman_Figure.webp", "images/toyImages/JPEG/WonderWoman_Figure.jpeg","Action Figures",3);
    let Chess_Set = new Toy("Chess Set", "24.99", 3, 15, "images/toyImages/WEBP/Chess_Set.webp", "images/toyImages/JPEG/Chess_Set.jpeg","Games and Puzzles",15);
    let Jenga_Game = new Toy("Jenga Game", "19.99", 4, 20, "images/toyImages/WEBP/Jenga_Game.webp", "images/toyImages/JPEG/Jenga_Game.jpeg","Games and Puzzles",14);
    let Soccer_Ball = new Toy("Soccer Ball", "14.99", 2, 35, "images/toyImages/WEBP/Soccer_Ball.webp", "images/toyImages/JPEG/Soccer_Ball.jpeg","Outdoor",5);
    let Jump_Rope = new Toy("Jump Rope", "7.99", 1, 30, "images/toyImages/WEBP/Jump_Rope.webp", "images/toyImages/JPEG/Jump_Rope.jpeg","Outdoor",12);
    let Remote_Control_Car = new Toy("Remote Control Car", "29.99", 5, 15, "images/toyImages/WEBP/Remote_Control_Car.webp", "images/toyImages/JPEG/Remote_Control_Car.jpeg","Electronics",12);
    let Digital_Camera_Toy = new Toy("Digital Camera Toy", "22.99", 4, 25, "images/toyImages/WEBP/Digital_Camera_Toy.webp", "images/toyImages/JPEG/Digital_Camera_Toy.jpeg","Electronics",15);

    TOY_DATABASE.add(Robot_Head);
    TOY_DATABASE.add(Grizzly_Bear);
    TOY_DATABASE.add(Darts);
    TOY_DATABASE.add(Lego_RangeRover);

    // Comics
    TOY_DATABASE.add(SpiderMan_Comic_Book);
    TOY_DATABASE.add(HarryPotter_Book);

    // Action Figure
    TOY_DATABASE.add(IronMan_Figure);
    TOY_DATABASE.add(WonderWoman_Figure);

    // Games & Puzzles
    TOY_DATABASE.add(Chess_Set);
    TOY_DATABASE.add(Jenga_Game);

    // Outdoor
    TOY_DATABASE.add(Soccer_Ball);
    TOY_DATABASE.add(Jump_Rope);

    // Electronic
    TOY_DATABASE.add(Remote_Control_Car);
    TOY_DATABASE.add(Digital_Camera_Toy);

}

function onLoadDisplayToys(){
    // Displays Toys
    displayToys(TOY_DATABASE);
}

// Method that shows Electronics
function showElectronics(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        if(TOY_DATABASE.get(i).toyType=="Electronics"){
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows books and comics
function showBooksAndComics(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        if(TOY_DATABASE.get(i).toyType=="Books and Comics"){
            toys.add(TOY_DATABASE.get(i));
        }
    }

    let toyCardArea=document.getElementById("box-toy-card");

    displayToys(toys);

    // Scrolls to toy card section
    toyCardArea.scrollIntoView({
        behaviour: "smooth",
        block: "start",
    });


}

// Method that shows action figures
function showActionFigures(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        if(TOY_DATABASE.get(i).toyType=="Action Figures"){
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows games and puzzles
function showGamesAndPuzzles(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        if(TOY_DATABASE.get(i).toyType=="Games and Puzzles"){
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows Outdoors
function showOutdoor(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        if(TOY_DATABASE.get(i).toyType=="Outdoor"){
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

function createCartListeners(){
    for(let i=0;i<TOY_DATABASE.getLength();i++){
        toy=TOY_DATABASE.get(i);
        if(toy.getQuantity()>0){
            let id ="add to cart - "+toy.getID();
            button=document.getElementById(id)
            if (button) {
                button.addEventListener("click", function(toy) {
                    return function(){

                        CART.addToCart(TOY_DATABASE.getByID(toy.getID()));
                    };
                }(toy));
            }
        }
    }
}



