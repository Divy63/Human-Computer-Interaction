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
    
    // Add created toy to toys list
    toys.add(Robot_Head);
    toys.add(Grizzly_Bear);
    toys.add(Darts);
    toys.add(Lego_RangeRover);

    // Displays Toys
    displayToys(toys);
}