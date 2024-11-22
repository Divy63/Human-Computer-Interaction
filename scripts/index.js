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

let toyLogohomeButton = document.getElementById("toyLogoHomeButton").addEventListener("click", function () {
    $("#t4").attr("disabled", "disabled");
    $("label.t4").css("color", "grey");

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
        behavior: "smooth",
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