// let TOY_DATABASE=new Toys();
// let CART=new Cart();

function displayToys(toys) {
    toys.displayHTML();
}

function onLoadCreateDatabase() {

    // Create Toys to display on load
    let Robot_Head = new Toy("Robot Head", "18.99", 3, 0, "images/toyImages/WEBP/Robot_Head.webp", "images/toyImages/JPEG/Robot_Head.jpeg", "Action Figures", 6, ["robot", "head", "kids", "future"]);
    let Grizzly_Bear = new Toy("Grizzly Bear", "19.99", 2, 15, "images/toyImages/WEBP/Grizzly_Bear.webp", "images/toyImages/JPEG/Grizzly_Bear.jpeg", "Games and Puzzles", 2, ["grizzly", "bear", "animal", "wildlife", "teddy", "toy", "brown", "forest"]);
    let Darts = new Toy("Darts", "19.99", 4.7, 2, "images/toyImages/WEBP/Darts.webp", "images/toyImages/JPEG/Darts.jpeg", "Outdoor", 10, ["darts", "game", "target", "aim", "sports", "throw", "competition"]);
    let Lego_RangeRover = new Toy("Lego Car (Range Rover)", "25.99", 4.5, 12, "images/toyImages/WEBP/Lego_RangeRover.webp", "images/toyImages/JPEG/Lego_RangeRover.jpeg", "Games and Puzzles", 9, ["lego", "range rover", "car", "vehicle", "SUV", "building blocks", "toy", "model", "construction"]);
    let SpiderMan_Comic_Book = new Toy("Spider-Man Comic Book", "9.99", 1, 30, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg", "Books and Comics", 7, ["spiderman", "comic book", "superhero", "marvel", "web", "hero", "action", "adventure", "comic", "spider"]);
    let HarryPotter_Book = new Toy("Harry Potter Book", "12.99", 2, 25, "images/toyImages/WEBP/Comic_Book.webp", "images/toyImages/JPEG/Comic_Book.jpeg", "Books and Comics", 7, ["harry potter", "book", "wizard", "magic", "fantasy", "hogwarts", "witchcraft", "j.k. rowling", "adventure"]);
    let IronMan_Figure = new Toy("Iron Man Action Figure", "14.99", 4.65, 50, "images/toyImages/WEBP/Ironman_Figure.webp", "images/toyImages/JPEG/Ironman_Figure.jpeg", "Action Figures", 3, ["iron man", "figure", "marvel", "superhero", "action figure", "tony stark", "armor", "robot", "comic", "avengers"]);

    // Images left to be downloaded
    let WonderWoman_Figure = new Toy("Wonder Woman Action Figure", "17.99", 4, 40, "images/toyImages/WEBP/WonderWoman_Figure.webp", "images/toyImages/JPEG/WonderWoman_Figure.jpeg", "Action Figures", 3, ["wonder woman", "figure", "superhero", "amazon", "action figure", "dc comics", "woman", "justice league", "battle", "hero"]);
    let Chess_Set = new Toy("Chess Set", "24.99", 3, 15, "images/toyImages/WEBP/Chess_Set.webp", "images/toyImages/JPEG/Chess_Set.jpeg", "Games and Puzzles", 15, ["chess", "board game", "strategy", "game", "puzzle", "king", "queen", "pawn", "checkmate", "competition"]);
    let Jenga_Game = new Toy("Jenga Game", "19.99", 4, 20, "images/toyImages/WEBP/Jenga_Game.webp", "images/toyImages/JPEG/Jenga_Game.jpeg", "Games and Puzzles", 14, ["jenga", "game", "wood", "tower", "stack", "balance", "family", "party", "puzzle", "fun"]);
    let Soccer_Ball = new Toy("Soccer Ball", "14.99", 2, 35, "images/toyImages/WEBP/Soccer_Ball.webp", "images/toyImages/JPEG/Soccer_Ball.jpeg", "Outdoor", 5, ["soccer", "ball", "football", "sports", "game", "kick", "goal", "team", "outdoor", "exercise"]);
    let Jump_Rope = new Toy("Jump Rope", "7.99", 1, 30, "images/toyImages/WEBP/Jump_Rope.webp", "images/toyImages/JPEG/Jump_Rope.jpeg", "Outdoor", 12, ["jump rope", "fitness", "exercise", "workout", "skipping", "activity", "cord", "outdoor", "sports", "cardio"]);
    let Remote_Control_Car = new Toy("Remote Control Car", "29.99", 5, 15, "images/toyImages/WEBP/Remote_Control_Car.webp", "images/toyImages/JPEG/Remote_Control_Car.jpeg", "Electronics", 12, ["remote control", "car", "toy", "vehicle", "RC", "radio control", "race", "speed", "battery"]);
    let Digital_Camera_Toy = new Toy("Digital Camera Toy", "22.99", 4, 25, "images/toyImages/WEBP/Digital_Camera_Toy.webp", "images/toyImages/JPEG/Digital_Camera_Toy.jpeg", "Electronics", 15, ["digital camera", "toy", "camera", "photography", "kids", "imagination", "toy camera", "electronic", "play", "education"]);

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

function onLoadDisplayToys() {
    // Displays Toys
    displayToys(TOY_DATABASE);
}

// Method that shows Electronics
function showElectronics() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = '';//Emptying the container
    let toys = new Toys();
    for (let i = 0; i < TOY_DATABASE.getLength(); i++) {
        if (TOY_DATABASE.get(i).toyType == "Electronics") {
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows books and comics
function showBooksAndComics() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = '';//Emptying the container
    let toys = new Toys();
    for (let i = 0; i < TOY_DATABASE.getLength(); i++) {
        if (TOY_DATABASE.get(i).toyType == "Books and Comics") {
            toys.add(TOY_DATABASE.get(i));
        }
    }

    let toyCardArea = document.getElementById("box-toy-card");

    displayToys(toys);

    // Scrolls to toy card section
    toyCardArea.scrollIntoView({
        behaviour: "smooth",
        block: "start",
    });


}

// Method that shows action figures
function showActionFigures() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = '';//Emptying the container
    let toys = new Toys();
    for (let i = 0; i < TOY_DATABASE.getLength(); i++) {
        if (TOY_DATABASE.get(i).toyType == "Action Figures") {
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows games and puzzles
function showGamesAndPuzzles() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = '';//Emptying the container
    let toys = new Toys();
    for (let i = 0; i < TOY_DATABASE.getLength(); i++) {
        if (TOY_DATABASE.get(i).toyType == "Games and Puzzles") {
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

// Method that shows Outdoors
function showOutdoor() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = '';//Emptying the container
    let toys = new Toys();
    for (let i = 0; i < TOY_DATABASE.getLength(); i++) {
        if (TOY_DATABASE.get(i).toyType == "Outdoor") {
            toys.add(TOY_DATABASE.get(i));
        }
    }

    displayToys(toys);

}

function createCartListeners(toys) {
    for (let i = 0; i < toys.getLength(); i++) {
        let toy = toys.get(i);
        if (toy.getQuantity() > 0) {
            let id = "add to cart - " + toy.getID();
            let button = document.getElementById(id);
            if (button) {
                button.addEventListener("click", function (toy) {
                    return function () {
                        CART.addToCart(toys.getByID(toy.getID()));
                        showNotification(toy.getName());
                    };
                }(toy));
            }
        }
    }
}


function showNotification(itemName) {
    const notification = document.getElementById('notification');
    notification.innerText = `${itemName} has been added to the cart!`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Hides after 3 seconds
}


function showLuckCards() {
    let htmlContainer = document.getElementById('box-toy-card');
    htmlContainer.innerHTML = ''; // Emptying the container

    // Random card pick (lucky card)
    let luckyCardIndex = Math.floor(Math.random() * 4);

    let luckyToy = new Toys();
    luckyToy.add(TOY_DATABASE.get(2));

    // Store the original price
    let originalPrice = luckyToy.get(0).getPrice();

    // Create the 4 cards
    for (let i = 0; i < 4; i++) {
        let luckCard = document.createElement('div');
        luckCard.classList.add('toy-card');

        let luckCardInner = document.createElement('div');
        luckCardInner.classList.add('toy-card-inner');

        let luckCardFront = document.createElement('div');
        luckCardFront.classList.add('card-side', 'front');

        let luckCardTitle = document.createElement('div');
        luckCardTitle.classList.add('card-title');
        luckCardFront.appendChild(luckCardTitle);

        let luckCardFooter = document.createElement('div');
        luckCardFooter.classList.add('card-footer');
        luckCardFooter.innerHTML = "<p>Try Your Luck!</p>";
        luckCardFront.appendChild(luckCardFooter);

        let luckCardBack = document.createElement('div');
        luckCardBack.classList.add('card-side', 'back');
        luckCardInner.appendChild(luckCardFront);
        luckCardInner.appendChild(luckCardBack);

        luckCard.appendChild(luckCardInner);

        luckCard.addEventListener('click', function () {
            luckCard.classList.toggle('flipped');

            if (i === luckyCardIndex) {

                luckyToy.get(0).setPrice("13.99");
                luckyToy.displayHTML();

                luckCardFooter.style.display = "none";

                setTimeout(() => {
                    luckyToy.get(0).setPrice(originalPrice);

                }, 1000);

            } else {
                luckCardFooter.style.display = "none";
                luckCardTitle.style.display = "none";
                luckCardBack.innerHTML = "<p class = 'unlucky-card'>Better luck next time!</p>";
            }
        });

        htmlContainer.appendChild(luckCard);
    }
}
