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

let viewBtns = document.querySelectorAll('.view-btn');
for(var i=0; i<viewBtns.length; i++){
    viewBtns[i].addEventListener("click",function(event){
        var buttonSelected = event.target;

        for(var i=0; i<viewBtns.length; i++)
            viewBtns[i].classList.remove("selected");
            
        buttonSelected.classList.add("selected");
    });
}

showListView();
// showGridView();

// function hideOtherView(){
//     let view =document.getElementsByClassName("cards")[0];
//     cards.remove();
// }

//         console.log(buttonSelected);
        // if(buttonSelected.id==="list-view-btn"){
            
        //     
        //     hideOtherView();
        //     showListView(); 
        // }
            
        
    //     else if(buttonSelected.id==="grid-view-btn"){
    //     hideOtherView();
    //     showGridView();
    // }



function showGridView(){
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
    card.classList.add("item");
    cardImage.className="card-image";
    firstRowContainer.className="first-row-container";
    secondRowContainer.className="second-row-container";
    deleteBtn.className="delete-btn";
    quantityContainer.className="quantity-container";
    quantity.className="quantity";
    quantity.classList.add("quantity-value");
    cardPrice.className="item-price";
    cardPrice.classList.add("price");

    deleteBtn.addEventListener('click',function(event){
        var buttonClicked= event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();
    });

    cards.appendChild(card);
    updateTotalPrice();
    
});
cards.className="cards-grid";
}

function showListView(){
    let cards = document.createElement("div");
    let cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.appendChild(cards);

    hideEmptyCartText();
    let titles = document.createElement("div");
    let productTitle = document.createElement("span");
    let priceTitle = document.createElement("span");
    let quantityTitle = document.createElement("span");
    let emptyField = document.createElement("div");
    
    titles.appendChild(productTitle);
    titles.appendChild(priceTitle);
    titles.appendChild(quantityTitle);
    titles.appendChild(emptyField);
    cards.appendChild(titles)

    productTitle.textContent="Product";
    priceTitle.textContent="Price";
    quantityTitle.textContent="Quantity";

    titles.className="titles";
    productTitle.className="product-title";
    priceTitle.className="price-title";
    quantityTitle.className="quantity-title";
    emptyField.className="empty-field";

    products.forEach(function(product){
        let productRow = document.createElement("div");
        let imageContainer = document.createElement("div");
        let productImage = document.createElement("img");
        let productName = document.createElement("sapn"); 
        let productPrice = document.createElement("span");
        let productQuantity = document.createElement("input");
        let deleteBtn = document.createElement("button");

        productImage.src=product.imageURL;
        productName.textContent=product.name;
        productPrice.textContent=product.price;
        deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
        productQuantity.type="number";
        productQuantity.min="1";
        productQuantity.value="1";

        imageContainer.appendChild(productImage);
        productRow.appendChild(imageContainer);
        productRow.appendChild(productName);
        productRow.appendChild(productPrice);
        productRow.appendChild(productQuantity);
        productRow.appendChild(deleteBtn);

        productRow.className="product-row";
        productRow.classList.add("item");
        imageContainer.className="image-container";
        productImage.className="product-image";
        productName.className="product-name";
        productPrice.className="product-price";
        productPrice.classList.add("price");
        productQuantity.className="product-quantity";
        productQuantity.classList.add("quantity-value");
        deleteBtn.className="delete-btn-grid";

        deleteBtn.addEventListener('click',function(event){
            var buttonClicked= event.target;
            let listElements = document.getElementsByClassName("product-row");
            buttonClicked.parentElement.parentElement.remove();
            updateTotalPrice();
            if(listElements.length==0)
                titles.remove();

        });
    
        cards.appendChild(productRow);
        updateTotalPrice();
    });
    cards.className="cards-list";
}


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
    let itemPrice = document.getElementsByClassName("price");
    let itemQuantity = document.getElementsByClassName("quantity-value");
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
    let cartItems =document.getElementsByClassName("item");
    cartItems[0].parentNode.remove();
    showEmptyCartText();
}

let checkoutBtn = document.getElementsByClassName("btn-checkout")[0];
checkoutBtn.addEventListener("click",function(){
    alert("Checkout Successful !!");
    emptyCart();
    updateTotalPrice();
});
let quantityInput = document.getElementsByClassName("quantity-value");
for(var i=0;i<quantityInput.length;i++){
    quantityInput[i].addEventListener('input',function(event){
        updateTotalPrice();
    });
}
