let products=[{  
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
        },
        {
    id:4,
    name: "SmartWatch",
    desc: "",
    price: "$200",
    category:"Technology",
    imageURL:"images/smartWatch.jpg" ,
        }];

products.forEach(function(product){
    let card= document.createElement("div");
    let cardImage= document.createElement("img");    
    let firstRowContainer = document.createElement("div");
    let secondRowContainer = document.createElement("div");
    let cardName= document.createElement("h3");
    let cardPrice = document.createElement("span");
    let cardCategory = document.createElement("span");
    let addBtn = document.createElement("button");

    
   card.appendChild(cardImage);
   firstRowContainer.appendChild(cardName);
   firstRowContainer.appendChild(cardPrice);
   card.appendChild(firstRowContainer);
   secondRowContainer.appendChild(cardCategory);
   secondRowContainer.appendChild(addBtn);
   card.appendChild(secondRowContainer);
   

card.className="card";
cardImage.className="card-image";
firstRowContainer.className="first-row-container";
secondRowContainer.className="second-row-container";
cardPrice.className="item-price";
addBtn.className="addBtn";


let cardContainer=document.getElementsByClassName("container")[0];
cardContainer.appendChild(card);
cardImage.src=product.imageURL;
cardName.textContent=product.name;
cardPrice.textContent=product.price;
cardCategory.textContent=product.category;
addBtn.innerHTML='<i class="fa fa-cart-plus" aria-hidden="true"></i>';

addBtn.addEventListener('click',function(){
 
    cart.push(product)
    addBtn.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
    

} );


})
