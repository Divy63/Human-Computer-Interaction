document.addEventListener("DOMContentLoaded", () => {
    TOY_DATABASE = new Toys();
    onLoadCreateDatabase();
    onLoadDisplayToys();
    createCartListeners(TOY_DATABASE);
    let tryYourLuck=false;


    let cartItemsData = JSON.parse(sessionStorage.getItem("cartItemsData")) || [];
    if (cartItemsData.length > 0) {
        console.log("ALREADY HAVE CART");
        CART = new Cart();
        console.log(cartItemsData);
        let i = 1;
        CART.cartItems = [];
        cartItemsData.forEach(item => {
            let toyObject = new Toy(item.toy.name, item.toy.price, item.toy.rating, item.toy.quantity, item.toy.imageLink, item.toy.otherLink, item.toy.toyType, item.toy.age, item.toy.keywords, item.toy.id);
            let cartToy = new CartToy(toyObject, item.quantity);
            CART.addCartToy(cartToy);
            console.log(CART);

        });



    } else {
        console.log("CREATING NEW CART");
        CART = new Cart();
        tryYourLuck=false;
        // TOY_DATABASE=new Toys();
    }

    console.log("Printing after creating database");
    console.log(TOY_DATABASE);
    console.log(CART);
    // createCartListeners(TOY_DATABASE);


    searchBar = document.getElementById("searchBar");
    if (searchBar) {
        searchBar.value = "";
    }

    const addToCart = document.getElementById("Add-to-Cart");

    if (addToCart) {
        addToCart.addEventListener("click", function () {
            console.log(CART);
            // localStorage.setItem("toy_database",JSON.stringify(TOY_DATABASE));
            window.location.href = "cart.html";
        });
    }

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

        
        let toyLogohomeButton = document.getElementById("toyLogoHomeButton")

        if (toyLogohomeButton) {
            toyLogohomeButton.addEventListener("click", function () {
                $("#t4").attr("disabled", "disabled");
                $("label.t4").css("color", "grey");
                document.getElementById("selectedCategory").innerHTML = "";

                TOY_DATABASE.FilterArraytoDefault();
                TOY_DATABASE.filterToyDB();
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
        }



        let homeButton = document.getElementById("homeButton").addEventListener("click", function () {
            $("#t4").attr("disabled", "disabled");
            $("label.t4").css("color", "grey");
            document.getElementById("selectedCategory").innerHTML = "";

            TOY_DATABASE.FilterArraytoDefault();
            TOY_DATABASE.filterToyDB();

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






        let tryYourLuckButton = document.getElementById("tryYourLuckButton");

        if (tryYourLuckButton) {
            tryYourLuckButton.addEventListener("click", function () {
                let tryYourLuckBoolean=JSON.parse(sessionStorage.getItem("tryYourLuck"));
                console.log(typeof tryYourLuckBoolean);
                console.log(tryYourLuckBoolean);
                if (tryYourLuckBoolean === true) {
                    tryYourLuck=true;
                }else{
                    tryYourLuck=false;
                }
                console.log(tryYourLuck);
                if(tryYourLuck === true){
                showLuckCards();
                
                let toyCardArea = document.getElementById("box-toy-card");
                // Scrolls to toy card section
                window.scrollTo({
                    top: toyCardArea.offsetTop,
                    behaviour: "smooth",
                });
                }else{
                    window.document.getElementById("TryYourLuckDialog").showModal();
                }

            });
            
        }


    });


    // Add event listener to handle the flip
    luckCard.addEventListener('click', function () {
        if (luckCard.querySelector('.card-title').textContent === "?") {
            luckCard.classList.add('flipped'); // Flip the card

            setTimeout(function () {
                luckCard.classList.remove('flipped');
            }, 2000);
        }
    });
});

