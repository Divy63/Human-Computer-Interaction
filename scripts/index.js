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