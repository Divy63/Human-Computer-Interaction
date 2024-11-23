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
