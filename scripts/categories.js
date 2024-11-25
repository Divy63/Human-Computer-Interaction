// -------------------------------------------------------------------------------------------------------------------------------------
// Categories button listeners
// -------------------------------------------------------------------------------------------------------------------------------------
//Display Toy Cards for Categories Added listeners for categories
let booksAndComicsButton = document.getElementById("BooksAndComicsButton").addEventListener("click", function () {
    showBooksAndComics();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Books and Comics";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#f82828";
    document.getElementById("outdoorButton").style.backgroundColor = "#FF9999";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#FFAD60";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#71dad3";
    document.getElementById("electronicsButton").style.backgroundColor = "#96CEB4"; 
    //end

    $("#t4").removeAttr('disabled');
    $("label.t4").css("color", "black");
    $("#electronics-cat1").hide();
    $("#electronics-cat2").hide();
    $("#electronics-cat3").hide();
    $("#action-cat1").hide();
    $("#action-cat2").hide();
    $("#action-cat3").hide();
    $("#game-cat1").hide();
    $("#game-cat2").hide();
    $("#game-cat3").hide();
    $("#outdoor-cat1").hide();
    $("#outdoor-cat2").hide();
    $("#outdoor-cat3").hide();
    $("#book-cat1").show();
    $("#book-cat2").show();
    $("#book-cat3").show();
});
let outdoorButton = document.getElementById("outdoorButton").addEventListener("click", function () {
    showOutdoor();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Outdoor";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#FF6B6B";
    document.getElementById("outdoorButton").style.backgroundColor = "#fc5d5d";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#FFAD60";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#71dad3";
    document.getElementById("electronicsButton").style.backgroundColor = "#96CEB4"; 
    //end

    $("#t4").removeAttr('disabled');
    $("label.t4").css("color", "black");
    $("#electronics-cat1").hide();
    $("#electronics-cat2").hide();
    $("#electronics-cat3").hide();
    $("#action-cat1").hide();
    $("#action-cat2").hide();
    $("#action-cat3").hide();
    $("#game-cat1").hide();
    $("#game-cat2").hide();
    $("#game-cat3").hide();
    $("#book-cat1").hide();
    $("#book-cat2").hide();
    $("#book-cat3").hide();
    $("#outdoor-cat1").show();
    $("#outdoor-cat2").show();
    $("#outdoor-cat3").show();
});
let electronicsButton = document.getElementById("electronicsButton").addEventListener("click", function () {
    showElectronics();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    document.getElementById("selectedCategory").innerHTML = "Category: Electronics";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#FF6B6B";
    document.getElementById("outdoorButton").style.backgroundColor = "#FF9999";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#FFAD60";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#71dad3";
    document.getElementById("electronicsButton").style.backgroundColor = "#52cf95"; 
    //end

    $("#t4").removeAttr('disabled');
    $("label.t4").css("color", "black");
    $("#book-cat1").hide();
    $("#book-cat2").hide();
    $("#book-cat3").hide();
    $("#action-cat1").hide();
    $("#action-cat2").hide();
    $("#action-cat3").hide();
    $("#game-cat1").hide();
    $("#game-cat2").hide();
    $("#game-cat3").hide();
    $("#outdoor-cat1").hide();
    $("#outdoor-cat2").hide();
    $("#outdoor-cat3").hide();
    $("#electronics-cat1").show();
    $("#electronics-cat2").show();
    $("#electronics-cat3").show();
});
let GamesAndPuzzlesButton = document.getElementById("GamesAndPuzzlesButton").addEventListener("click", function () {
    showGamesAndPuzzles();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    //display selected category
    document.getElementById("selectedCategory").innerHTML = "Category: Games and Puzzles";

    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#FF6B6B";
    document.getElementById("outdoorButton").style.backgroundColor = "#FF9999";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#FFAD60";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#05bdb1";
    document.getElementById("electronicsButton").style.backgroundColor = "#96CEB4"; 
    //end

    $("#t4").removeAttr('disabled');
    $("label.t4").css("color", "black");
    $("#electronics-cat1").hide();
    $("#electronics-cat2").hide();
    $("#electronics-cat3").hide();
    $("#action-cat1").hide();
    $("#action-cat2").hide();
    $("#action-cat3").hide();
    $("#book-cat1").hide();
    $("#book-cat2").hide();
    $("#book-cat3").hide();
    $("#outdoor-cat1").hide();
    $("#outdoor-cat2").hide();
    $("#outdoor-cat3").hide();
    $("#game-cat1").show();
    $("#game-cat2").show();
    $("#game-cat3").show();
});
let ActionFigures = document.getElementById("ActionFiguresButton").addEventListener("click", function () {
    showActionFigures();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });

    //display selected category
    document.getElementById("selectedCategory").innerHTML = "Category: Action Figures";
    
    //Displays selected button as darker colour    
    document.getElementById("BooksAndComicsButton").style.backgroundColor = "#FF6B6B";
    document.getElementById("outdoorButton").style.backgroundColor = "#FF9999";
    document.getElementById("ActionFiguresButton").style.backgroundColor = "#f88d29";
    document.getElementById("GamesAndPuzzlesButton").style.backgroundColor = "#71dad3";
    document.getElementById("electronicsButton").style.backgroundColor = "#96CEB4";
    //end 
    $("#t4").removeAttr('disabled');
    $("label.t4").css("color", "black");
    $("#electronics-cat1").hide();
    $("#electronics-cat2").hide();
    $("#electronics-cat3").hide();
    $("#book-cat1").hide();
    $("#book-cat2").hide();
    $("#book-cat3").hide();
    $("#game-cat1").hide();
    $("#game-cat2").hide();
    $("#game-cat3").hide();
    $("#outdoor-cat1").hide();
    $("#outdoor-cat2").hide();
    $("#outdoor-cat3").hide();
    $("#action-cat1").show();
    $("#action-cat2").show();
    $("#action-cat3").show();
});
