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