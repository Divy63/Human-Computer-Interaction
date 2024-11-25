// -------------------------------------------------------------------------------------------------------------------------------------
// Filter Button Listeners
// -------------------------------------------------------------------------------------------------------------------------------------

//Price Filters
// Get the dropdown container by its ID
let price0to10 = document.getElementById("price0to10").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE.applyPriceFilter(0, 10); 
    TOY_DATABASE.editFilterArray("Price",0,10);
    TOY_DATABASE.filterToyDB();
    //filterArray[3] = "0-10";
    //TOY_DATABASE.filterto(filterArray);   
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
        pricelabel.innerHTML = "$0-10";
      }
      //alert(Boolean($('.toggle > input').is(':checked')));
    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }

});

let price10to20 = document.getElementById("price10to20").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyPriceFilter(10, 20);
    TOY_DATABASE.editFilterArray("Price",10,20);
    TOY_DATABASE.filterToyDB();
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
        pricelabel.innerHTML = "$10-20";
      }
    
    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }  

});

let price20to30 = document.getElementById("price20to30").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyPriceFilter(20, 30);
    TOY_DATABASE.editFilterArray("Price",20,30);
    TOY_DATABASE.filterToyDB();
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
        pricelabel.innerHTML = "$20-30";
      }
    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }   
});

let price30to40 = document.getElementById("price30to40").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyPriceFilter(30, 40);
    TOY_DATABASE.editFilterArray("Price",30,40);
    TOY_DATABASE.filterToyDB();
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
        pricelabel.innerHTML = "$30-40";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }   
});

let priceMoreThan40 = document.getElementById("priceMoreThan40").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyPriceFilter(40);
    TOY_DATABASE.editFilterArray("Price",40,Infinity);
    TOY_DATABASE.filterToyDB();
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
        pricelabel.innerHTML = "$40 +";
      }
    
    if ( $('.toggle > input').is(':checked'))
    {     
        $('.toggle > input').prop('checked', false);
    }   

});

let undoPriceFilter = document.getElementById("priceUndo").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyPriceFilter(0);
    TOY_DATABASE.editFilterArray("Price",0,Infinity);
    TOY_DATABASE.filterToyDB();
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
    if ( $('.toggle > input').is(':checked'))
    {     
        $('.toggle > input').prop('checked', false);
    }   
});


// Age Filters
let age0to2 = document.getElementById("age0to2").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(0, 2);
    TOY_DATABASE.editFilterArray("Age",0,2);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const agelabel = document.getElementById("agefilter");
    if (agelabel.innerHTML != "0 - 2 years old") {
        agelabel.innerHTML = "0 - 2 years old";
      } else {
        agelabel.innerHTML = "0 - 2 years old";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    } 

});

let age2to5 = document.getElementById("age2to5").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(2, 5);
    TOY_DATABASE.editFilterArray("Age",2,5);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const agelabel = document.getElementById("agefilter");
    if (agelabel.innerHTML != "2 - 5 years old") {
      agelabel.innerHTML = "2 - 5 years old";
      } else {
        agelabel.innerHTML = "2 - 5 years old";
      }
    
    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    } 
      
});

let age5to10 = document.getElementById("age5to10").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(5, 10);
    TOY_DATABASE.editFilterArray("Age",5,10);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const agelabel = document.getElementById("agefilter");
    if (agelabel.innerHTML != "5 - 10 years old") {
      agelabel.innerHTML = "5 - 10 years old";
      } else {
        agelabel.innerHTML = "5 - 10 years old";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }   
});

let ageMoreThan10 = document.getElementById("ageMoreThan10").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(10);
    TOY_DATABASE.editFilterArray("Age",10,Infinity);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const agelabel = document.getElementById("agefilter");
    if (agelabel.innerHTML != "10+ years old") {
      agelabel.innerHTML = "10+ years old";
      } else {
        agelabel.innerHTML = "10+ years old";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    } 
});

let undoAgeFilter = document.getElementById("ageUndo").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(0);
    TOY_DATABASE.editFilterArray("Age",0,Infinity);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const agelabel = document.getElementById("agefilter");
    if (agelabel.innerHTML != "Age") {
      agelabel.innerHTML = "Age";
      } else {
        agelabel.innerHTML = "Age";
      }
    
    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }     

});

// Rating Filter
let oneStar = document.getElementById("oneStar").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyRatingFilter(1);
    TOY_DATABASE.editFilterArray("Star",1);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starlabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "1 star") {
        starlabel.innerHTML = "1 star";
      } else {
        starlabel.innerHTML = "1 star";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }    
});

let twoStar = document.getElementById("twoStar").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyRatingFilter(2);
    TOY_DATABASE.editFilterArray("Star",2);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starelabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "2 star") {
        starlabel.innerHTML = "2 star";
      } else {
        starlabel.innerHTML = "2 star";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }  
});

let threeStar = document.getElementById("threeStar").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyRatingFilter(3);
    TOY_DATABASE.editFilterArray("Star",3);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starlabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "3 star") {
        starlabellabel.innerHTML = "3 star";
      } else {
        starlabel.innerHTML = "3 star";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }    
});

let fourStar = document.getElementById("fourStar").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyRatingFilter(4);
    TOY_DATABASE.editFilterArray("Star",4);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starlabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "4 star") {
        starlabel.innerHTML = "4 star";
      } else {
        starlabel.innerHTML = "4 star";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }    
});

let fiveStar = document.getElementById("fiveStar").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyRatingFilter(5);
    TOY_DATABASE.editFilterArray("Star",5);
    TOY_DATABASE.filterToyDB();
    filterArray.push("Star");
    filterArray.push("");
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starlabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "5 star") {
        starlabel.innerHTML = "5 star";
      } else {
        starlabel.innerHTML = "5 star";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }      
});

let undoStarFilter = document.getElementById("ratingUndo").addEventListener("click", (event) => {
    event.preventDefault();
    //TOY_DATABASE = TOY_DATABASE.applyAgeFilter(6);
    TOY_DATABASE.editFilterArray("Star",6);
    TOY_DATABASE.filterToyDB();
    let toyCardArea = document.getElementById("box-toy-card");
    // Scrolls to toy card section
    window.scrollTo({
        top: toyCardArea.offsetTop,
        behavior: "smooth",
    });
    const starlabel = document.getElementById("starfilter");
    if (starlabel.innerHTML != "Customer Ratings") {
        starlabel.innerHTML = "Customer Ratings";
      } else {
        starlabel.innerHTML = "Customer Ratings";
      }

    if ( $('.toggle > input').is(':checked'))
    {     
      $('.toggle > input').prop('checked', false);
    }
    
    let toyLogohomeButton = document.getElementById("toyLogoHomeButton")
    
    if(toyLogohomeButton){

    }

    let homeButton = document.getElementById("homeButton").addEventListener("click", function () {
      console.log("home clicked");
      const starlabel = document.getElementById("starfilter");
      if (starlabel.innerHTML != "Customer Ratings") {
          starlabel.innerHTML = "Customer Ratings";
        } else {
          starlabel.innerHTML = "Customer Ratings";
        }

      const agelabel = document.getElementById("agefilter");
      if (agelabel.innerHTML != "Age") {
          agelabel.innerHTML = "Age";
      } else {
          agelabel.innerHTML = "Age";
      }

      const pricelabel = document.getElementById("pricefilter");
      if (pricelabel.innerHTML != "Price") {
          pricelabel.innerHTML = "Price";
      } else {
          pricelabel.innerHTML = "Price";
      }  
        
    });

});