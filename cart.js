let products=[{  
    id:1,
    name: "Perfume",
    price: "$100",
    category:"Cosmetics",
    imageURL:"images/perfume.jpg" ,
        },{
    id:2,
    name: "Lipstick",
    price: "$25",
    category:"Cosmetics",
    imageURL:"images/lipstick.jpg" ,
        },{
    id:3,
    name: "Apple Airpods",
    price: "$100",
    category:"Technology",
    imageURL:"images/airpods.jpg" ,
        }];

let cards = document.createElement("div");
let cardsContainer = document.getElementsByClassName("cards-container")[0];
cardsContainer.appendChild(cards);

products.forEach(function(product){
    hideEmptyCartText();
    let card= document.createElement("div");
    let cardImage= document.createElement("img");    
    let firstRowContainer = document.createElement("div");
    let secondRowContainer = document.createElement("div");
    let quantityContainer = document.createElement("div");
    let cardName= document.createElement("h3");
    let cardPrice = document.createElement("span");
    let cardCategory = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let quantity = document.createElement("input");
    let quantityText = document.createElement("span");
    let totalPrice= document.getElementsByClassName("total-price")[0];

    cardImage.src=product.imageURL;
    cardName.textContent=product.name;
    cardPrice.textContent=product.price;
    cardCategory.textContent=product.category;
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    quantityText.textContent="Quantity:";
    quantity.type="number";
    quantity.min="1";
    quantity.value="1";

    card.appendChild(cardImage);
    firstRowContainer.appendChild(cardName);
    firstRowContainer.appendChild(cardPrice);
    secondRowContainer.appendChild(cardCategory);
    secondRowContainer.appendChild(deleteBtn);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(quantity);
    card.appendChild(firstRowContainer);
    card.appendChild(secondRowContainer);
    card.appendChild(quantityContainer);
    
    card.className="card";
    cardImage.className="card-image";
    firstRowContainer.className="first-row-container";
    secondRowContainer.className="second-row-container";
    deleteBtn.className="delete-btn";
    quantityContainer.className="quantity-container";
    quantity.className="quantity";
    cardPrice.className="item-price";

    deleteBtn.addEventListener('click',function(event){
        var buttonClicked= event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();
    });

    cards.appendChild(card);
    updateTotalPrice();
    
})
cards.className="cards";
function showEmptyCartText(){
    let emptyCardText= document.getElementsByClassName("empty-cart-container")[0];
    let checkoutbtnContainer = document.getElementsByClassName("btn-checkout-container")[0];
    let totalPriceContainer = document.getElementsByClassName("total-price-container")[0];
    emptyCardText.classList.remove("hide");
    totalPriceContainer.classList.add("hide");
    checkoutbtnContainer.classList.add("hide");
}
function hideEmptyCartText(){
        let emptyCardText= document.getElementsByClassName("empty-cart-container")[0];
    let checkoutbtnContainer = document.getElementsByClassName("btn-checkout-container")[0];
    let totalPriceContainer = document.getElementsByClassName("total-price-container")[0];
    emptyCardText.classList.add("hide");
    totalPriceContainer.classList.remove("hide");
    checkoutbtnContainer.classList.remove("hide");
}
function updateTotalPrice(){
    let itemPrice = document.getElementsByClassName("item-price");
    let itemQuantity = document.getElementsByClassName("quantity");
    let TotalPrice = document.getElementsByClassName("total-price")[0];
    let total=0;
    for(var i=0; i<itemPrice.length; i++){
        total+= parseFloat(itemPrice[i].textContent.replace('$',''))*itemQuantity[i].value;
    }
    TotalPrice.textContent=total;
    if(total==0)
     showEmptyCartText();
};

function emptyCart(){
    let cartItems =document.getElementsByClassName("card");
    cartItems[0].parentNode.remove();
    showEmptyCartText();
}

let checkoutBtn = document.getElementsByClassName("btn-checkout")[0];
checkoutBtn.addEventListener("click",function(){
    alert("Checkout Successful !!");
    emptyCart();
    updateTotalPrice();
});
let quantityInput = document.getElementsByClassName("quantity");
for(var i=0;i<quantityInput.length;i++){
    quantityInput[i].addEventListener('input',function(event){
        updateTotalPrice();
    });
}
