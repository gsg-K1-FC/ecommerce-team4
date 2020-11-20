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

products.map(function(product){
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
    cardName.innerHTML=product.name;
    cardPrice.innerHTML=product.price;
    cardCategory.innerHTML=product.category;
    deleteBtn.innerHTML='<i class="fas fa-trash-alt"></i>';
    quantityText.innerHTML="Quantity:";
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
    
    card.style.display="flex";
    card.style.flexDirection="column";
    card.style.border="solid 1px #3C9B8A";
    card.style.padding="25px";
    card.style.margin= "2%";
    card.style.boxShadow="-5px 6px 16px -6px rgba(0,0,0,0.59)";

    cardImage.style.width="225px";
    cardImage.style.height="225px";
    cardImage.style.marginBottom="10px";
    cardName.style.fontSize="23px";
    cardImage.style.marginLeft="8.5px";

    firstRowContainer.style.display="flex";
    firstRowContainer.style.justifyContent="space-between";
    firstRowContainer.style.alignItems="center";
    firstRowContainer.style.padding="5px";
    firstRowContainer.style.fontSize="20px";
    firstRowContainer.style.fontWeight="700";

    secondRowContainer.style.display="flex";
    secondRowContainer.style.justifyContent="space-between";
    secondRowContainer.style.alignItems="center";
    secondRowContainer.style.fontSize="20px";
    secondRowContainer.style.padding="5px";

    deleteBtn.style.border="none";
    deleteBtn.style.background="white";
    deleteBtn.style.fontSize="30px";
    deleteBtn.style.cursor="pointer";

    quantityContainer.style.display="flex";
    quantityContainer.style.justifyContent="center";
    quantityContainer.style.alignItems="center";
    quantityContainer.style.fontSize="15px";
    quantityContainer.style.fontWeight="600";

    quantity.style.border="none";
    quantity.style.width="10%";
    quantity.style.outline="0";
    quantity.style.marginLeft="10px";

    deleteBtn.addEventListener('click',function(event){
        var buttonClicked= event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateTotalPrice();
    });
    
    cards.appendChild(card);
})
cards.style.padding="2%";
cards.style.display='flex';
cards.style.flexWrap='wrap';
cards.style.width="100%";
// updateTotalPrice(){

// };

