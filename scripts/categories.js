// -------------------------------------------------------------------------------------------------------------------------------------
// Categories button listeners
// -------------------------------------------------------------------------------------------------------------------------------------
//Display Toy Cards for Categories Added listeners for categories
let booksAndComicsButton = document.getElementById("BooksAndComicsButton").addEventListener("click", function () {
    
    TOY_DATABASE.editFilterArray("Category","Books and Comics")
    TOY_DATABASE.filterToyDB();    
    createCartListeners(TOY_DATABASE);
    //showBooksAndComics();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Books and Comics";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#182b5e";
    document.getElementById("outdoorButton").style.backgroundColor = "#ff4545";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#d8399b";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#2c9bce";
    document.getElementById("electronicsButton").style.backgroundColor = "#03a359"; 
    //end

    
});
let outdoorButton = document.getElementById("outdoorButton").addEventListener("click", function () {
    
    TOY_DATABASE.editFilterArray("Category","Outdoor");
    TOY_DATABASE.filterToyDB();
    //showOutdoor();
    createCartListeners(TOY_DATABASE);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Outdoor";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#375dc6";
    document.getElementById("outdoorButton").style.backgroundColor = "#a52f2f";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#d8399b";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#2c9bce";
    document.getElementById("electronicsButton").style.backgroundColor = "#03a359"; 
    //end

    
});
let electronicsButton = document.getElementById("electronicsButton").addEventListener("click", function () {
    
    TOY_DATABASE.editFilterArray("Category","Electronics");
    TOY_DATABASE.filterToyDB();
    createCartListeners(TOY_DATABASE);
    //showElectronics();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Electronics";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#375dc6";
    document.getElementById("outdoorButton").style.backgroundColor = "#ff4545";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#d8399b";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#2c9bce";
    document.getElementById("electronicsButton").style.backgroundColor = "#154c33"; 
    //end

    
});
let GamesAndPuzzlesButton = document.getElementById("GamesAndPuzzlesButton").addEventListener("click", function () {
    
    TOY_DATABASE.editFilterArray("Category","Games and Puzzles");
    TOY_DATABASE.filterToyDB();
    createCartListeners(TOY_DATABASE);
    //showGamesAndPuzzles();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    //display selected category
    document.getElementById("selectedCategory").innerHTML = "Category: Games and Puzzles";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#375dc6";
    document.getElementById("outdoorButton").style.backgroundColor = "#ff4545";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#d8399b";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#12435a";
    document.getElementById("electronicsButton").style.backgroundColor = "#03a359"; 
    //end

    
});
let ActionFigures = document.getElementById("ActionFiguresButton").addEventListener("click", function () {
    //TOY_DATABASE=TOY_DATABASE.applyCategoryFilter("Action Figures");
    TOY_DATABASE.editFilterArray("Category","Action Figures");
    TOY_DATABASE.filterToyDB();
    createCartListeners(TOY_DATABASE);
    //showActionFigures();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });

    //display selected category
    document.getElementById("selectedCategory").innerHTML = "Category: Action Figures";
    
    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#375dc6";
    document.getElementById("outdoorButton").style.backgroundColor = "#ff4545";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#771e55";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#2c9bce";
    document.getElementById("electronicsButton").style.backgroundColor = "#03a359";
    //end 
    
});
