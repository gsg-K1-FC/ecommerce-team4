let products =[
    {
    id:1,
    name: "Perfume",
    price: "$100",
    description:"Lavander ",
    category:"Cosmetics",
    imageURL:"perfume.jpg" ,
        },{
    id:2,
    name: "Lipstick",
    price: "$25",    
    description :"Red  Shiny ",
    category:"Cosmetics",
    imageURL:"lipstick.jpg" ,
        },{
    id:3,
    name: "Apple Airpods",
    price: "$100",
    description:"Best voice Ever",
    category:"Technology",
    imageURL:"airpods.jpg" ,
        }];

showSellerProduct();

function showSellerProduct(){

    let cardContainer = document.createElement("div");
    let cardSeller = document.getElementsByClassName("div__card")[0];

products.forEach(function(productSeller){



let firstDiv = document.createElement("div");
let seconedDiv = document.createElement("div");
let firstInnerDiv = document.createElement("div");
let seconedInnerDiv = document.createElement("div");
let thirdDiv = document.createElement("div");


let productImg = document.createElement("img");

let productCardName = document.createElement("h3");
let productDescription = document.createElement("h3");

let productCategory = document.createElement("span");
let productPrice = document.createElement("span");

let deleteIcon = document.createElement("button");

let editAnchor = document.createElement("a");



productImg.src = productSeller.imageURL;
productCategory.textContent=productSeller.category;
productCardName.textContent =  productSeller.name;
productDescription.textContent= productSeller.description;
productPrice.textContent = productSeller.price;
deleteIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
editAnchor.href='#';
editAnchor.innerHTML = '<i class="fas fa-edit"></i>';



firstDiv.appendChild(productImg);
seconedDiv.appendChild(productCardName);
seconedDiv.appendChild(productPrice);
firstInnerDiv.appendChild(productCategory);
firstInnerDiv.appendChild(productDescription);
seconedInnerDiv.appendChild(editAnchor);
seconedInnerDiv.appendChild(deleteIcon);
thirdDiv.appendChild(firstInnerDiv);
thirdDiv.appendChild(seconedInnerDiv);
firstDiv.appendChild(seconedDiv);
firstDiv.appendChild(thirdDiv);


firstDiv.className = "product__card" ;
productImg.className = "product__image";
productPrice.className = "product__price";
productCategory.className="font__decoration";
productDescription.className = "font__decoration";
seconedDiv.className = "seconed__container";
thirdDiv.className = "third__container";
productCardName.className = "product__name";
deleteIcon.className= "product__delete";
editAnchor.className = "product__edit";
seconedInnerDiv.className= "icon__container";


deleteIcon.addEventListener('click',function(event){
    var clickedButton= event.target;
    clickedButton.parentElement.parentElement.parentElement.parentElement.remove();
});



cardContainer.appendChild(firstDiv);
cardSeller.appendChild(cardContainer);

});
cardContainer.className = "products__view"
 


}