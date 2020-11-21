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
    quantity.placeholder="1";

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

    let cardContainer = document.getElementsByClassName("card-container")[0];
    cardContainer.appendChild(card);
    
    card.className="card";
    cardImage.className="card-image";
    firstRowContainer.className="first-row-container";
    secondRowContainer.className="second-row-container";
    deleteBtn.className="delete-btn";
    quantityContainer.className="quantity-container";
    quantity.className="quantity";

    deleteBtn.addEventListener('click',function(event){
        var buttonClicked= event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();
    });
    
    cards.appendChild(card);
})
cards.className="cards";
// updateTotalPrice(){

// };

