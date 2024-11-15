let TOY_DATABASE=new Toys();

function displayToys(toys){
    toys.displayHTML();
}

function onLoadDisplayToys(){
    // Create a new toy list
    let toys =new Toys();

    // Create Toys to display on load
    let Robot_Head=new Toy("Robot Head","$18.99",3,20,"images/toyImages/WEBP/Robot_Head.webp","images/toyImages/JPEG/Robot_Head.jpeg");
    let Grizzly_Bear=new Toy("Grizzly Bear","19.99",2,15,"images/toyImages/WEBP/Grizzly_Bear.webp","images/toyImages/JPEG/Grizzly_Bear.jpeg");
    let Darts=new Toy("Darts","$19.99",5,2,"images/toyImages/WEBP/Darts.webp","images/toyImages/JPEG/Darts.jpeg");
    let Lego_RangeRover=new Toy("Lego Car (Range Rover)","$25.99",4.5,12,"images/toyImages/WEBP/Lego_RangeRover.webp","images/toyImages/JPEG/Lego_RangeRover.jpeg");
    let SpiderMan_Comic_Book = new Toy("Spider-Man Comic Book", "$9.99", 1, 30, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg");
    let HarryPotter_Book = new Toy("Harry Potter Book", "$12.99", 2, 25, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg");
    let IronMan_Figure = new Toy("Iron Man Action Figure", "$14.99", 5, 50, "images/toyImages/WEBP/Ironman_Figure.webp", "images/toyImages/JPEG/Ironman_Figure.jpeg");
   
    // Images left to be downloaded
    let WonderWoman_Figure = new Toy("Wonder Woman Action Figure", "$17.99", 4, 40, "images/toyImages/WEBP/WonderWoman_Figure.webp", "images/toyImages/JPEG/WonderWoman_Figure.jpeg");
    let Chess_Set = new Toy("Chess Set", "$24.99", 3, 15, "images/toyImages/WEBP/Chess_Set.webp", "images/toyImages/JPEG/Chess_Set.jpeg");
    let Jenga_Game = new Toy("Jenga Game", "$19.99", 4, 20, "images/toyImages/WEBP/Jenga_Game.webp", "images/toyImages/JPEG/Jenga_Game.jpeg");
    let Soccer_Ball = new Toy("Soccer Ball", "$14.99", 2, 35, "images/toyImages/WEBP/Soccer_Ball.webp", "images/toyImages/JPEG/Soccer_Ball.jpeg");
    let Jump_Rope = new Toy("Jump Rope", "$7.99", 1, 30, "images/toyImages/WEBP/Jump_Rope.webp", "images/toyImages/JPEG/Jump_Rope.jpeg");
    let Remote_Control_Car = new Toy("Remote Control Car", "$29.99", 5, 15, "images/toyImages/WEBP/Remote_Control_Car.webp", "images/toyImages/JPEG/Remote_Control_Car.jpeg");
    let Digital_Camera_Toy = new Toy("Digital Camera Toy", "$22.99", 4, 25, "images/toyImages/WEBP/Digital_Camera_Toy.webp", "images/toyImages/JPEG/Digital_Camera_Toy.jpeg");


    // Add created toy to toys list
    toys.add(Robot_Head);
    toys.add(Grizzly_Bear);
    toys.add(Darts);
    toys.add(Lego_RangeRover);
    toys.add(SpiderMan_Comic_Book);
    toys.add(HarryPotter_Book);
    toys.add(IronMan_Figure);
    toys.add(WonderWoman_Figure);
    toys.add(Chess_Set);
    toys.add(Jenga_Game);
    toys.add(Soccer_Ball);
    toys.add(Jump_Rope);
    toys.add(Remote_Control_Car);
    toys.add(Digital_Camera_Toy);

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

    // Displays Toys
    displayToys(toys);
}

function showElectronics(){
    let htmlContainer=document.getElementById('box-toy-card');
    htmlContainer.innerHTML='';//Emptying the container
    let toys =new Toys();
    let Remote_Control_Car = new Toy("Remote Control Car", "$29.99", 5, 15, "images/toyImages/WEBP/Remote_Control_Car.webp", "images/toyImages/JPEG/Remote_Control_Car.jpeg");
    let Digital_Camera_Toy = new Toy("Digital Camera Toy", "$22.99", 4, 25, "images/toyImages/WEBP/Digital_Camera_Toy.webp", "images/toyImages/JPEG/Digital_Camera_Toy.jpeg");

    toys.add(Remote_Control_Car);
    toys.add(Digital_Camera_Toy);

    displayToys(toys);

}

function showBooksAndComics(){
    let toys =new Toys();
    let SpiderMan_Comic_Book = new Toy("Spider-Man Comic Book", "$9.99", 1, 30, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg");
    let HarryPotter_Book = new Toy("Harry Potter Book", "$12.99", 2, 25, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg");

    toys.add(SpiderMan_Comic_Book);
    toys.add(HarryPotter_Book);

    displayToys(toys);

}

function showActionFigures(){
    let toys =new Toys();
    let IronMan_Figure = new Toy("Iron Man Action Figure", "$14.99", 5, 50, "images/toyImages/WEBP/Ironman_Figure.webp", "images/toyImages/JPEG/Ironman_Figure.jpeg");
    let WonderWoman_Figure = new Toy("Wonder Woman Action Figure", "$17.99", 4, 40, "images/toyImages/WEBP/WonderWoman_Figure.webp", "images/toyImages/JPEG/WonderWoman_Figure.jpeg");
    toys.add(IronMan_Figure);
    toys.add(WonderWoman_Figure);

    displayToys(toys);

}

function showGamesAndPuzzles(){
    let toys =new Toys();
    let Chess_Set = new Toy("Chess Set", "$24.99", 3, 15, "images/toyImages/WEBP/Chess_Set.webp", "images/toyImages/JPEG/Chess_Set.jpeg");
    let Jenga_Game = new Toy("Jenga Game", "$19.99", 4, 20, "images/toyImages/WEBP/Jenga_Game.webp", "images/toyImages/JPEG/Jenga_Game.jpeg");

    toys.add(Chess_Set);
    toys.add(Jenga_Game);

    displayToys(toys);

}

function showOutdoor(){
    let toys =new Toys();
    let Soccer_Ball = new Toy("Soccer Ball", "$14.99", 2, 35, "images/toyImages/WEBP/Soccer_Ball.webp", "images/toyImages/JPEG/Soccer_Ball.jpeg");
    let Jump_Rope = new Toy("Jump Rope", "$7.99", 1, 30, "images/toyImages/WEBP/Jump_Rope.webp", "images/toyImages/JPEG/Jump_Rope.jpeg");

    toys.add(Soccer_Ball);
    toys.add(Jump_Rope);

    displayToys(toys);

}



