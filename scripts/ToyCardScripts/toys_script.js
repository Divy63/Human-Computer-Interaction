// let TOY_DATABASE=new Toys();
// let CART=new Cart();

function displayToys(toys) {
  toys.displayHTML();
}

function onLoadCreateDatabase() {
  // Create Toys to display on load
  let Robot_Head = new Toy(
    "Robot Head",
    "18.99",
    3,
    0,
    "images/toyImages/WEBP/Robot_Head.webp",
    "images/toyImages/JPEG/Robot_Head.jpeg",
    "Action Figures",
    6,
    ["robot", "head", "kids", "future"]
  );
  let Grizzly_Bear = new Toy(
    "Grizzly Bear",
    "19.99",
    2,
    15,
    "images/toyImages/WEBP/Grizzly_Bear.webp",
    "images/toyImages/JPEG/Grizzly_Bear.jpeg",
    "Games and Puzzles",
    2,
    ["grizzly", "bear", "animal", "wildlife", "teddy", "toy", "brown", "forest"]
  );
  let Darts = new Toy(
    "Darts",
    "19.99",
    4.7,
    2,
    "images/toyImages/WEBP/Darts.webp",
    "images/toyImages/JPEG/Darts.jpeg",
    "Outdoor",
    10,
    ["darts", "game", "target", "aim", "sports", "throw", "competition"]
  );
  let Lego_RangeRover = new Toy(
    "Lego Car (Range Rover)",
    "25.99",
    4.5,
    12,
    "images/toyImages/WEBP/Lego_RangeRover.webp",
    "images/toyImages/JPEG/Lego_RangeRover.jpeg",
    "Games and Puzzles",
    9,
    [
      "lego",
      "range rover",
      "car",
      "vehicle",
      "SUV",
      "building blocks",
      "toy",
      "model",
      "construction",
    ]
  );
  let SpiderMan_Comic_Book = new Toy(
    "Spider-Man Comic Book",
    "9.99",
    1,
    30,
    "images/toyImages/WEBP/Comic_Book.webp",
    "images/toyImages/JPEG/Comic_Book.jpeg",
    "Books and Comics",
    7,
    [
      "spiderman",
      "comic book",
      "superhero",
      "marvel",
      "web",
      "hero",
      "action",
      "adventure",
      "comic",
      "spider",
    ]
  );
  let HarryPotter_Book = new Toy(
    "Harry Potter Book",
    "12.99",
    2,
    25,
    "images/toyImages/WEBP/Comic_Book.webp",
    "images/toyImages/JPEG/Comic_Book.jpeg",
    "Books and Comics",
    7,
    [
      "harry potter",
      "book",
      "wizard",
      "magic",
      "fantasy",
      "hogwarts",
      "witchcraft",
      "j.k. rowling",
      "adventure",
    ]
  );
  let IronMan_Figure = new Toy(
    "Iron Man Action Figure",
    "14.99",
    4.65,
    50,
    "images/toyImages/WEBP/Ironman_Figure.webp",
    "images/toyImages/JPEG/Ironman_Figure.jpeg",
    "Action Figures",
    3,
    [
      "iron man",
      "figure",
      "marvel",
      "superhero",
      "action figure",
      "tony stark",
      "armor",
      "robot",
      "comic",
      "avengers",
    ]
  );

  // Images left to be downloaded
  let WonderWoman_Figure = new Toy(
    "Wonder Woman Action Figure",
    "17.99",
    4,
    40,
    "images/toyImages/WEBP/WonderWoman_Figure.webp",
    "images/toyImages/JPEG/WonderWoman_Figure.jpeg",
    "Action Figures",
    3,
    [
      "wonder woman",
      "figure",
      "superhero",
      "amazon",
      "action figure",
      "dc comics",
      "woman",
      "justice league",
      "battle",
      "hero",
    ]
  );
  let Chess_Set = new Toy(
    "Chess Set",
    "24.99",
    3,
    15,
    "images/toyImages/WEBP/Chess_Set.webp",
    "images/toyImages/JPEG/Chess_Set.jpeg",
    "Games and Puzzles",
    15,
    [
      "chess",
      "board game",
      "strategy",
      "game",
      "puzzle",
      "king",
      "queen",
      "pawn",
      "checkmate",
      "competition",
    ]
  );
  let Jenga_Game = new Toy(
    "Jenga Game",
    "19.99",
    4,
    20,
    "images/toyImages/WEBP/Jenga_Game.webp",
    "images/toyImages/JPEG/Jenga_Game.jpeg",
    "Games and Puzzles",
    14,
    [
      "jenga",
      "game",
      "wood",
      "tower",
      "stack",
      "balance",
      "family",
      "party",
      "puzzle",
      "fun",
    ]
  );
  let Soccer_Ball = new Toy(
    "Soccer Ball",
    "14.99",
    2,
    35,
    "images/toyImages/WEBP/Soccer_Ball.webp",
    "images/toyImages/JPEG/Soccer_Ball.jpeg",
    "Outdoor",
    5,
    [
      "soccer",
      "ball",
      "football",
      "sports",
      "game",
      "kick",
      "goal",
      "team",
      "outdoor",
      "exercise",
    ]
  );
  let Jump_Rope = new Toy(
    "Jump Rope",
    "7.99",
    1,
    30,
    "images/toyImages/WEBP/Jump_Rope.webp",
    "images/toyImages/JPEG/Jump_Rope.jpeg",
    "Outdoor",
    12,
    [
      "jump rope",
      "fitness",
      "exercise",
      "workout",
      "skipping",
      "activity",
      "cord",
      "outdoor",
      "sports",
      "cardio",
    ]
  );
  let Remote_Control_Car = new Toy(
    "Remote Control Car",
    "29.99",
    5,
    15,
    "images/toyImages/WEBP/Remote_Control_Car.webp",
    "images/toyImages/JPEG/Remote_Control_Car.jpeg",
    "Electronics",
    12,
    [
      "remote control",
      "car",
      "toy",
      "vehicle",
      "RC",
      "radio control",
      "race",
      "speed",
      "battery",
    ]
  );
  let Digital_Camera_Toy = new Toy(
    "Digital Camera Toy",
    "22.99",
    4,
    25,
    "images/toyImages/WEBP/Digital_Camera_Toy.webp",
    "images/toyImages/JPEG/Digital_Camera_Toy.jpeg",
    "Electronics",
    15,
    [
      "digital camera",
      "toy",
      "camera",
      "photography",
      "kids",
      "imagination",
      "toy camera",
      "electronic",
      "play",
      "education",
    ]
  );

  let cinderella_doll = new Toy(
    "cindrella doll",
    "20",
    4,
    10,
    "images/toyImages/WEBP/Chess_Set.webp",
    "images/toyImages/WEBP/Chess_Set.webp",
    "Games and Puzzles",
    3,
    [
      "Cinderella doll",
      "doll",
      "toy",
      "princess",
      "fairy tale",
      "Disney",
      "royalty",
      "kids",
      "gift",
      "playtime",
      "dress",
      "castle",
      "magic",
      "glass slipper",
      "imagination",
      "ball gown",
    ]
  );
  let football = new Toy(
    "football",
    "8",
    3,
    15,
    "images/toyImages/WEBP/Chess_Set.webp",
    "images/toyImages/WEBP/Chess_Set.webp",
    "outdoor",
    5,
    [
      "football",
      "soccer",
      "ball",
      "sports",
      "game",
      "kids",
      "outdoor",
      "team",
      "kick",
      "goal",
      "play",
      "athletics",
      "exercise",
      "training",
      "field",
    ]
  );
  // OUTDOOR
  let Flying_Disc = new Toy(
    "Flying Disc",
    "7.99",
    4,
    50,
    "images/toyImages/WEBP/Flying_Disc.webp",
    "images/toyImages/JPEG/Flying_Disc.jpeg",
    "Outdoor",
    5,
    [
      "flying disc",
      "frisbee",
      "outdoor",
      "sports",
      "kids",
      "fun",
      "play",
      "throw",
      "catch",
      "exercise",
    ]
  );

  let Beach_Bucket_Set = new Toy(
    "Beach Bucket and Shovel Set",
    "9.99",
    5,
    40,
    "images/toyImages/WEBP/Beach_Bucket_Set.webp",
    "images/toyImages/JPEG/Beach_Bucket_Set.jpeg",
    "Outdoor",
    3,
    [
      "beach bucket",
      "sand toys",
      "outdoor",
      "kids",
      "summer",
      "fun",
      "shovel",
      "play",
      "activity",
      "creative",
    ]
  );

  let Trampoline = new Toy(
    "Mini Trampoline",
    "49.99",
    4,
    10,
    "images/toyImages/WEBP/Trampoline.webp",
    "images/toyImages/JPEG/Trampoline.jpeg",
    "Outdoor",
    8,
    [
      "trampoline",
      "jumping",
      "outdoor",
      "kids",
      "fun",
      "fitness",
      "activity",
      "play",
      "exercise",
      "sports",
    ]
  );

  let Kite = new Toy(
    "Colorful Kite",
    "14.99",
    4,
    30,
    "images/toyImages/WEBP/Kite.webp",
    "images/toyImages/JPEG/Kite.jpeg",
    "Outdoor",
    6,
    [
      "kite",
      "flying",
      "outdoor",
      "wind",
      "kids",
      "fun",
      "play",
      "activity",
      "summer",
      "colorful",
    ]
  );

  // ELECTRONICS
  let Walkie_Talkies = new Toy(
    "Kids Walkie Talkies",
    "29.99",
    4,
    20,
    "images/toyImages/WEBP/Walkie_Talkies.webp",
    "images/toyImages/JPEG/Walkie_Talkies.jpeg",
    "Electronics",
    7,
    [
      "walkie talkies",
      "communication",
      "toy",
      "kids",
      "fun",
      "electronics",
      "play",
      "outdoor",
      "radio",
      "talk",
    ]
  );

  let Coding_Robot = new Toy(
    "Coding Robot for Kids",
    "79.99",
    5,
    15,
    "images/toyImages/WEBP/Coding_Robot.webp",
    "images/toyImages/JPEG/Coding_Robot.jpeg",
    "Electronics",
    10,
    [
      "coding robot",
      "robotics",
      "STEM",
      "electronics",
      "toy",
      "learning",
      "education",
      "kids",
      "fun",
      "technology",
    ]
  );

  let RC_Boat = new Toy(
    "Remote Control Boat",
    "39.99",
    4,
    25,
    "images/toyImages/WEBP/RC_Boat.webp",
    "images/toyImages/JPEG/RC_Boat.jpeg",
    "Electronics",
    8,
    [
      "remote control",
      "boat",
      "toy",
      "RC",
      "water",
      "kids",
      "fun",
      "action",
      "electronics",
      "vehicle",
    ]
  );

  let Tablet_For_Kids = new Toy(
    "Kids Educational Tablet",
    "59.99",
    4,
    12,
    "images/toyImages/WEBP/Tablet_For_Kids.webp",
    "images/toyImages/JPEG/Tablet_For_Kids.jpeg",
    "Electronics",
    6,
    [
      "tablet",
      "educational",
      "toy",
      "kids",
      "learning",
      "fun",
      "technology",
      "play",
      "interactive",
      "electronics",
    ]
  );

  // ACTION FIGURES
  let SpiderMan_Figure = new Toy(
    "Spider-Man Action Figure",
    "19.99",
    5,
    20,
    "images/toyImages/WEBP/SpiderMan_Figure.webp",
    "images/toyImages/JPEG/SpiderMan_Figure.jpeg",
    "Action Figures",
    4,
    [
      "spider-man",
      "action figure",
      "marvel",
      "superhero",
      "kids",
      "fun",
      "toy",
      "play",
      "adventure",
      "hero",
    ]
  );

  let Batman_Figure = new Toy(
    "Batman Action Figure",
    "17.99",
    4,
    25,
    "images/toyImages/WEBP/Batman_Figure.webp",
    "images/toyImages/JPEG/Batman_Figure.jpeg",
    "Action Figures",
    5,
    [
      "batman",
      "action figure",
      "DC",
      "superhero",
      "toy",
      "kids",
      "fun",
      "justice league",
      "play",
      "hero",
    ]
  );

  let Transformers_Optimus = new Toy(
    "Transformers Optimus Prime",
    "29.99",
    5,
    15,
    "images/toyImages/WEBP/Transformers_Optimus.webp",
    "images/toyImages/JPEG/Transformers_Optimus.jpeg",
    "Action Figures",
    6,
    [
      "transformers",
      "optimus prime",
      "robot",
      "action figure",
      "toy",
      "kids",
      "fun",
      "hero",
      "adventure",
      "play",
    ]
  );

  let Hulk_Figure = new Toy(
    "Hulk Smash Action Figure",
    "19.99",
    4,
    20,
    "images/toyImages/WEBP/Hulk_Figure.webp",
    "images/toyImages/JPEG/Hulk_Figure.jpeg",
    "Action Figures",
    5,
    [
      "hulk",
      "action figure",
      "marvel",
      "superhero",
      "smash",
      "kids",
      "fun",
      "toy",
      "hero",
      "adventure",
    ]
  );

  // BOOKS AND COMICS
  let Naruto_1 = new Toy(
    "Naruto_1",
    "9.99",
    5,
    50,
    "images/toyImages/WEBP/Naruto_1.webp",
    "images/toyImages/JPEG/Naruto_1.jpeg",
    "Books and Comics",
    10,
    [
      "naruto",
      "manga",
      "comic book",
      "vol 1",
      "ninjas",
      "action",
      "adventure",
      "shonen",
      "japan",
      "team 7",
      "sasuke",
      "sakura",
      "kakashi",
      "hokage",
      "hidden leaf village",
      "ninjutsu",
      "battle",
      "friendship",
      "training",
      "story",
    ]
  );

  let SpongeBob_Comic = new Toy(
    "SpongeBob Comic Book",
    "12.99",
    4,
    30,
    "images/toyImages/WEBP/SpongeBob_Comic.webp",
    "images/toyImages/JPEG/SpongeBob_Comic.jpeg",
    "Books and Comics",
    8,
    [
      "spongebob",
      "comic book",
      "cartoon",
      "funny",
      "underwater",
      "patrick",
      "squidward",
      "krusty krab",
      "bikini bottom",
      "adventure",
      "humor",
      "sea creatures",
      "comic",
      "kids",
      "story",
      "spongebob squarepants",
    ]
  );

  let Dr_Seuss_Book = new Toy(
    "Dr. Seuss Collection",
    "19.99",
    5,
    25,
    "images/toyImages/WEBP/Dr_Seuss_Book.webp",
    "images/toyImages/JPEG/Dr_Seuss_Book.jpeg",
    "Books and Comics",
    3,
    [
      "dr. seuss",
      "book",
      "kids",
      "reading",
      "fun",
      "imagination",
      "story",
      "illustration",
      "classic",
      "rhymes",
    ]
  );

  let Avengers_Comics = new Toy(
    "Avengers Comics",
    "12.99",
    4,
    20,
    "images/toyImages/WEBP/Avengers_Comics.webp",
    "images/toyImages/JPEG/Avengers_Comics.jpeg",
    "Books and Comics",
    9,
    [
      "avengers",
      "comics",
      "superhero",
      "marvel",
      "kids",
      "reading",
      "action",
      "adventure",
      "story",
      "illustration",
    ]
  );

  // BOARD GAMES AND PUZZLES
  let Scrabble_Game = new Toy(
    "Scrabble Board Game",
    "19.99",
    4,
    20,
    "images/toyImages/WEBP/Scrabble_Game.webp",
    "images/toyImages/JPEG/Scrabble_Game.jpeg",
    "Board Games and Puzzles",
    12,
    [
      "scrabble",
      "board game",
      "words",
      "letters",
      "toy",
      "family",
      "fun",
      "education",
      "strategy",
      "challenge",
    ]
  );

  let Connect_4 = new Toy(
    "Connect 4 Game",
    "15.99",
    4,
    30,
    "images/toyImages/WEBP/Connect_4.webp",
    "images/toyImages/JPEG/Connect_4.jpeg",
    "Board Games and Puzzles",
    8,
    [
      "connect 4",
      "game",
      "board game",
      "kids",
      "fun",
      "strategy",
      "challenge",
      "toy",
      "family",
      "classic",
    ]
  );

  let Monopoly = new Toy(
    "Monopoly",
    "19.99",
    5,
    25,
    "images/toyImages/WEBP/Monopoly.webp",
    "images/toyImages/JPEG/Monopoly.jpeg",
    "Board Games",
    8,
    [
      "monopoly",
      "board game",
      "strategy",
      "real estate",
      "money",
      "competition",
      "family",
      "game",
      "buy",
      "sell",
      "houses",
      "property",
      "fun",
      "community chest",
      "chance",
    ]
  );

  let Puzzle_3d = new Toy(
    "Puzzle 3D",
    "19.99",
    4,
    20,
    "images/toyImages/WEBP/Puzzle_3D.webp",
    "images/toyImages/JPEG/Puzzle_3D.jpeg",
    "Puzzles",
    12,
    [
      "puzzle 3d",
      "puzzle",
      "building",
      "3D",
      "brain teaser",
      "architecture",
      "construction",
      "fun",
      "challenge",
      "family",
      "activity",
      "hands-on",
      "learning",
    ]
  );

  TOY_DATABASE.add(Robot_Head);
  TOY_DATABASE.add(Grizzly_Bear);
  TOY_DATABASE.add(Darts);
  TOY_DATABASE.add(Lego_RangeRover);

  // Comics
  TOY_DATABASE.add(SpiderMan_Comic_Book);
  TOY_DATABASE.add(HarryPotter_Book);
  TOY_DATABASE.add(Naruto_1);
  TOY_DATABASE.add(SpongeBob_Comic);
  TOY_DATABASE.add(Dr_Seuss_Book);
  TOY_DATABASE.add(Avengers_Comics);

  // Action Figure
  TOY_DATABASE.add(IronMan_Figure);
  TOY_DATABASE.add(WonderWoman_Figure);
  TOY_DATABASE.add(SpiderMan_Figure);
  TOY_DATABASE.add(Batman_Figure);
  TOY_DATABASE.add(Transformers_Optimus);
  TOY_DATABASE.add(Hulk_Figure);

  // Games & Puzzles
  TOY_DATABASE.add(Chess_Set);
  TOY_DATABASE.add(Jenga_Game);
  TOY_DATABASE.add(Scrabble_Game);
  TOY_DATABASE.add(Connect_4);
  TOY_DATABASE.add(Monopoly);
  TOY_DATABASE.add(Puzzle_3d);
  TOY_DATABASE.add(cinderella_doll);

  // Outdoor
  TOY_DATABASE.add(Soccer_Ball);
  TOY_DATABASE.add(Jump_Rope);
  TOY_DATABASE.add(football);
  TOY_DATABASE.add(Flying_Disc);
  TOY_DATABASE.add(Beach_Bucket_Set);
  TOY_DATABASE.add(Trampoline);
  TOY_DATABASE.add(Kite);

  // Electronic
  TOY_DATABASE.add(Remote_Control_Car);
  TOY_DATABASE.add(Digital_Camera_Toy);
  TOY_DATABASE.add(Walkie_Talkies);
  TOY_DATABASE.add(Coding_Robot);
  TOY_DATABASE.add(RC_Boat);
  TOY_DATABASE.add(Tablet_For_Kids);
}

function onLoadDisplayToys() {
  // Displays Toys
  displayToys(TOY_DATABASE);
}

// Method that shows Electronics
function showElectronics() {
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; //Emptying the container
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
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; //Emptying the container
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
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; //Emptying the container
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
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; //Emptying the container
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
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; //Emptying the container
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
        button.addEventListener(
          "click",
          (function (toy) {
            return function () {
              CART.addToCart(toys.getByID(toy.getID()));
              showNotification(toy.getName());
            };
          })(toy)
        );
      }
    }
  }
}

function showNotification(itemName) {
  const notification = document.getElementById("notification");
  notification.innerText = `${itemName} has been added to the cart!`;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000); // Hides after 3 seconds
}

function showLuckCards() {
  let htmlContainer = document.getElementById("box-toy-card");
  htmlContainer.innerHTML = ""; // Emptying the container

  // Random card pick (lucky card)
  let luckyCardIndex = Math.floor(Math.random() * 4);

  let luckyToy = new Toys();
  luckyToy.add(TOY_DATABASE.get(2));

  // Store the original price
  let originalPrice = luckyToy.get(0).getPrice();

  for (let i = 0; i < 4; i++) {
    let luckCard = document.createElement("div");
    luckCard.classList.add("toy-card");

    let luckCardInner = document.createElement("div");
    luckCardInner.classList.add("toy-card-inner");

    let luckCardFront = document.createElement("div");
    luckCardFront.classList.add("card-side", "front");

    let luckCardTitle = document.createElement("div");
    luckCardTitle.classList.add("card-title");
    luckCardTitle.textContent = "?";
    luckCardFront.appendChild(luckCardTitle);

    let luckCardFooter = document.createElement("div");
    luckCardFooter.classList.add("card-footer");
    luckCardFooter.innerHTML = "<p>Try Your Luck!</p>";
    luckCardFront.appendChild(luckCardFooter);

    // Back side of the card (initially empty)
    let luckCardBack = document.createElement("div");
    luckCardBack.classList.add("card-side", "back");

    luckCardInner.appendChild(luckCardFront);
    luckCardInner.appendChild(luckCardBack);

    luckCard.appendChild(luckCardInner);

    // Event listener for flipping the card
    luckCard.addEventListener("click", function () {
      luckCard.classList.toggle("flipped"); // Toggle flip class

      // When the card is flipped, update the content only for the clicked card
      if (i === luckyCardIndex) {
        luckCardBack.innerHTML = ""; // Clear the current back content

        luckyToy.get(0).setPrice("13.99");
        luckyToy.displayHTML();
        luckyToy.get(0).setPrice(originalPrice);

        luckCardFooter.style.display = "none";
      } else {
        luckCardFooter.style.display = "none";
        luckCardTitle.style.display = "none";
        luckCardBack.innerHTML = "<p>Better luck next time!</p>";
      }
    });

    htmlContainer.appendChild(luckCard);
  }
}
