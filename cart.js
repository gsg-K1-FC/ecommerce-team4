let cart=[{  
    id:1,
    name: "Perfume",
    desc: "",
    price: "$100",
    category:"Cosmetics",
    imageURL:"images/perfume.jpg" ,
        },{
    id:2,
    name: "Lipstick",
    desc: "",
    price: "$25",
    category:"Cosmetics",
    imageURL:"images/lipstick.jpg" ,
        },{
    id:3,
    name: "Apple Airpods",
    desc: "",
    price: "$100",
    category:"Technology",
    imageURL:"images/airpods.jpg" ,
        }];
    for(var i=0;i<cart.length;i++)
        cart[i].quantity="1";

        showListView();
    let viewBtns = document.querySelectorAll('.view-btn');
    for(var i=0; i<viewBtns.length; i++){
        viewBtns[i].addEventListener("click",function(event){
            var buttonSelected = event.target;

        for(var i=0; i<viewBtns.length; i++)
            viewBtns[i].classList.remove("selected");
            
        buttonSelected.classList.add("selected");
           });
           viewBtns[i].addEventListener("click",function(event){
            var buttonSelected = event.target;
           if(buttonSelected.id==="list-view-btn"){
  
           showListView();
           hideOtherView();
           updateTotalPrice();
        }
           else if(buttonSelected.id==="grid-view-btn") {
            showGridView();
            hideOtherView();
            updateTotalPrice();
    }
           });
}

function hideOtherView(){
    let view =document.getElementsByClassName("items-container")[0];
    view.remove();
}

function showGridView(){
    let cards = document.createElement("div");
    let cardsContainer = document.getElementsByClassName("cards-container")[0];
    cardsContainer.appendChild(cards);
    cart.forEach(function(product){

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
    let itemQuantity = document.createElement("input");
    let quantityText = document.createElement("span");

    cardImage.src=product.imageURL;
    cardName.textContent=product.name;
    cardPrice.textContent=product.price;
    cardCategory.textContent=product.category;
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    quantityText.textContent="Quantity:";
    itemQuantity.type="number";
    itemQuantity.min="1";
    itemQuantity.value=product.quantity;
    

    card.appendChild(cardImage);
    firstRowContainer.appendChild(cardName);
    firstRowContainer.appendChild(cardPrice);
    secondRowContainer.appendChild(cardCategory);
    secondRowContainer.appendChild(deleteBtn);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(itemQuantity);
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
    itemQuantity.className="item-quantity";
    itemQuantity.classList.add("quantity-value");
    cardPrice.className="item-price";
    cardPrice.classList.add("price");


    deleteBtn.addEventListener('click',function(event){
        let itemId = product.id;
        for(var i=0;i<cart.length;i++){
            if(cart[i].id==itemId)
                cart.splice(i,1);
        }
        var buttonClicked= event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();

    });

    cards.appendChild(card);
    updateTotalPrice();
    
});
cards.className="cards-grid";
cards.classList.add("items-container");
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

    cart.forEach(function(product){
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
        productQuantity.value=product.quantity;

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
            let itemId = product.id;
            for(var i=0;i<cart.length;i++){
                if(cart[i].id==itemId)
                    cart.splice(i,1);
            }
            var buttonClicked= event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateTotalPrice();
            let listElements = document.getElementsByClassName("item");
            if(listElements.length==0)
                titles.remove();
        });
        
    
        cards.appendChild(productRow);
        updateTotalPrice(); 
    });
    cards.className="cards-list";
    cards.classList.add("items-container");
   
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
    let TotalPrice = document.getElementsByClassName("total-price")[0];
    let total=0;
    for(var i=0; i<cart.length; i++)
        total= Number (total+ (parseFloat(cart[i].price.replace('$','')*cart[i].quantity)));
    
    TotalPrice.textContent=total;
    if(total==0)
     showEmptyCartText();
};

function emptyCart(){
    let cartItems =document.getElementsByClassName("item");
    cart.splice(0,cart.length)
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
        quantityInput[i].addEventListener('input',function(){
            updateQuantity(i,this.value);
        });
    }
    
function updateQuantity(i,newValue){
    cart[i].quantity=newValue;
    updateTotalPrice();
        }
