let CART=new Cart();
document.addEventListener("DOMContentLoaded",() =>{
    console.log(CART);
    console.log("cartItemsData before navigation:", sessionStorage.getItem("cartItemsData"));

    const cartItemsData=JSON.parse(sessionStorage.getItem("cartItemsData"));
    console.log(cartItemsData);
    // const TOY_DATABASE=JSON.parse(localStorage.getItem("toy_database")) || [];
    console.log(typeof cartItemsData);
    let i=1;
    CART.cartItems=[];
    if(cartItemsData){

        if(cartItemsData.length===0){

        }else{
        cartItemsData.forEach(item=>{
            console.log("I am running:",i)
            console.log(typeof item.toy);
            console.log(typeof item.quantity);
            let toyObject=new Toy(item.toy.name,item.toy.price,item.toy.rating,item.toy.quantity,item.toy.imageLink,item.toy.otherLink,item.toy.toyType,item.toy.age,item.toy.keywords,item.toy.id);
            let cartToy=new CartToy(toyObject,item.quantity);
            console.log(toyObject instanceof Toy);
            console.log(cartToy instanceof CartToy);

            console.log(cartToy);
            
            CART.addCartToy(cartToy);
            console.log(CART);
            i+=1;
        });
        }
    }
    console.log(CART);

    CART.displayCart();
    shopMoreButton=document.getElementById("shopMoreButton")
    if(shopMoreButton){
        shopMoreButton.addEventListener("click", function(){
            window.location.href = "index.html";
        });
    }

    toyWorldLogo=document.getElementById("toyLogoHomeButton");
    if(toyWorldLogo){
        toyWorldLogo.addEventListener("click",function(){
        window.location.href="index.html";
        });
    }


});

