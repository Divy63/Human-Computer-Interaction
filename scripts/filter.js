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
    TOY_DATABASE.applyAgeFilter(6);
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const pricelabel = document.getElementById("ratingsfilter");
    if (pricelabel.innerHTML != "Customer Ratings") {
        pricelabel.innerHTML = "Customer Ratings";
      } else {
        pricelabel.innerHTML = "Customer Ratings";
      }
});