$(document).ready(function () {
    // Filter code
    $(document).click(function (event) {
        if (
            $('.toggle > input').is(':checked') &&
            !$(event.target).parents('.toggle').is('.toggle')
        ) {
            $('.toggle > input').prop('checked', false);
        }
    });
    $("#t4").attr("disabled", "disabled");
    $("label.t4").css("color", "grey");
    //let text = "Price";
    //document.getElementById("pricefilter").innerHTML = text; 
    //$("#t4").prop('disabled', true);
    //$("#subcategory-list").hide();
});

window.onload = function () {
    onLoadCreateDatabase();
    onLoadDisplayToys();
    createCartListeners();
}

let addToCart = document.getElementById("Add-to-Cart").addEventListener("click", function () {
    let boxCategories = document.getElementById('box-categories');
    let boxFilters = document.getElementById('box-filter');
    let boxToyCard = document.getElementById('box-toy-card');
    let navigationBar = document.getElementById('navigation-bar');
    navigationBar.style.display = 'none';
    boxCategories.style.display = 'none';
    boxFilters.style.display = 'none';
    boxToyCard.style.display = 'none';

    let cartDivision = document.getElementById('cart-section');
    cartDivision.style.display = 'block';
    CART.displayCart();
});

let shopMoreButton = document.getElementById("shopMoreButton").addEventListener("click", regenerateHomePage());

function regenerateHomePage() {
    $("#t4").attr("disabled", "disabled");
    $("label.t4").css("color", "grey");

    onLoadDisplayToys();
}

let toyLogohomeButton = document.getElementById("toylogolink").addEventListener("click", function () {
    $("#t4").attr("disabled", "disabled");
    $("label.t4").css("color", "grey");
    document.getElementById("selectedCategory").innerHTML = "";

    onLoadDisplayToys();
});

let homeButton = document.getElementById("homeButton").addEventListener("click", function () {
    $("#t4").attr("disabled", "disabled");
    $("label.t4").css("color", "grey");
    document.getElementById("selectedCategory").innerHTML = "";

    onLoadDisplayToys();
});


// -------------------------------------------------------------------------------------------------------------------------------------
// Filter Button Listeners
// -------------------------------------------------------------------------------------------------------------------------------------

//Price Filters
// Get the dropdown container by its ID
let price0to10 = document.getElementById("price0to10").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(0, 10);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "$0-10") {
        pricelabel.innerHTML = "$0-10";
      } else {
        pricelabel.innerHTML = "Price";
      }
    //let text = "$ 0 - 10";
    //pricelabel.insertAdjacentText("beforeend", text);
});

let price10to20 = document.getElementById("price10to20").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(10, 20);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "$10-20") {
        pricelabel.innerHTML = "$10-20";
      } else {
        pricelabel.innerHTML = "Price";
      }
});

let price20to30 = document.getElementById("price20to30").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(20, 30);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "$20-30") {
        pricelabel.innerHTML = "$20-30";
      } else {
        pricelabel.innerHTML = "Price";
      }
});

let price30to40 = document.getElementById("price30to40").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(30, 40);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "$30-40") {
        pricelabel.innerHTML = "$30-40";
      } else {
        pricelabel.innerHTML = "Price";
      }
});

let priceMoreThan40 = document.getElementById("priceMoreThan40").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(40);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "$40 +") {
        pricelabel.innerHTML = "$40 +";
      } else {
        pricelabel.innerHTML = "Price";
      }
});

let undoPriceFilter = document.getElementById("priceUndo").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyPriceFilter(0);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "Price") {
        pricelabel.innerHTML = "Price";
      } else {
        pricelabel.innerHTML = "Price";
      }
});


// Age Filters
let age0to2 = document.getElementById("age0to2").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(0, 2);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("agefilter");
    if (pricelabel.innerHTML != "0 - 2 years old") {
        pricelabel.innerHTML = "0 - 2 years old";
      } else {
        pricelabel.innerHTML = "Age";
      }
});

let age2to5 = document.getElementById("age2to5").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(2, 5);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("agefilter");
    if (pricelabel.innerHTML != "2 - 5 years old") {
        pricelabel.innerHTML = "2 - 5 years old";
      } else {
        pricelabel.innerHTML = "Age";
      }
});

let age5to10 = document.getElementById("age5to10").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(5, 10);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("agefilter");
    if (pricelabel.innerHTML != "5 - 10 years old") {
        pricelabel.innerHTML = "5 - 10 years old";
      } else {
        pricelabel.innerHTML = "Age";
      }
});

let ageMoreThan10 = document.getElementById("ageMoreThan10").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(10);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("agefilter");
    if (pricelabel.innerHTML != "10+ years old") {
        pricelabel.innerHTML = "10+ years old";
      } else {
        pricelabel.innerHTML = "Age";
      }
});

let undoAgeFilter = document.getElementById("ageUndo").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(0);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "Age") {
        pricelabel.innerHTML = "Age";
      } else {
        pricelabel.innerHTML = "Age";
      }
});

// Rating Filter
let oneStar = document.getElementById("oneStar").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyRatingFilter(1);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("starfilter");
    if (pricelabel.innerHTML != "1 star") {
        pricelabel.innerHTML = "1 star ";
      } else {
        pricelabel.innerHTML = "Ratings";
      }
});

let twoStar = document.getElementById("twoStar").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyRatingFilter(2);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("starfilter");
    if (pricelabel.innerHTML != "2 star") {
        pricelabel.innerHTML = "2 star ";
      } else {
        pricelabel.innerHTML = "Ratings";
      }
});

let threeStar = document.getElementById("threeStar").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyRatingFilter(3);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("starfilter");
    if (pricelabel.innerHTML != "3 star") {
        pricelabel.innerHTML = "3 star ";
      } else {
        pricelabel.innerHTML = "Ratings";
      }
});

let fourStar = document.getElementById("fourStar").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyRatingFilter(4);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("starfilter");
    if (pricelabel.innerHTML != "4 star") {
        pricelabel.innerHTML = "4 star ";
      } else {
        pricelabel.innerHTML = "Ratings";
      }
});

let fiveStar = document.getElementById("fiveStar").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyRatingFilter(5);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("starfilter");
    if (pricelabel.innerHTML != "5 star") {
        pricelabel.innerHTML = "5 star ";
      } else {
        pricelabel.innerHTML = "Ratings";
      }
});

let undoStarFilter = document.getElementById("ratingUndo").addEventListener("click", (event) => {
    event.preventDefault();
    TOY_DATABASE.applyAgeFilter(0);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("pricefilter");
    if (pricelabel.innerHTML != "Customer Ratings") {
        pricelabel.innerHTML = "Customer Ratings";
      } else {
        pricelabel.innerHTML = "Customer Ratings";
      }
});


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
    //$( ".category-books" ).css('background', '#f82828');
    document.getElementById("selectedCategory").innerHTML = "Category: Books and Comics";

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
    //$( ".category-outdoor" ).css('background', '#be6e6e');
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
    //$( ".category-electronics" ).css('background', '#3bb47b');

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

    document.getElementById("selectedCategory").innerHTML = "Category: Games and Puzzles";


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

let tryYourLuckButton = document.getElementById("tryYourLuckButton").addEventListener("click", function () {
    showLuckCards();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behaviour: "smooth",
    });

});

// Add event listener to handle the flip
luckCard.addEventListener('click', function () {
    // Only flip if the card doesn't have an item (e.g., "?" sign)
    if (luckCard.querySelector('.card-title').textContent === "?") {
        luckCard.classList.add('flipped'); // Flip the card

        // After 2 seconds, check if this is the lucky card (you can customize this)
        setTimeout(function () {
            luckCard.classList.remove('flipped'); // Flip back if it's not the lucky card
            // You can add logic here to show the toy details on the back
        }, 2000);
    }
});