function showProds(prods) {

    cart = read("cart");
    let cardContainer = document.getElementsByClassName("container")[0];
    cardContainer.innerHTML = "";
    if (prods.length == 0) {
        cardContainer.innerHTML = "<div class='noResults'> <p><h3>No search results ...  try again</h3></p><br><br></div>";
    }
    prods.forEach(function(product) {
        let card = document.createElement("div");
        let cardImage = document.createElement("img");
        let firstRowContainer = document.createElement("div");
        let secondRowContainer = document.createElement("div");
        let cardName = document.createElement("h3");
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


        card.className = "card";
        cardImage.className = "card-image";
        firstRowContainer.className = "first-row-container";
        secondRowContainer.className = "second-row-container";
        cardPrice.className = "item-price";
        addBtn.className = "addBtn";



        cardContainer.appendChild(card);
        cardImage.src = product.imageURL;
        cardName.textContent = product.name;
        cardPrice.textContent = "$" + product.price;
        cardCategory.textContent = product.category;
        if (cart.findIndex(findItem, product.id) == -1) {
            addBtn.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>';
        } else {
            addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
            addBtn.disabled = true;
        }

        addBtn.addEventListener('click', function() {
            product.quantity = 1;
            cart.push(product)
            addBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';

            save(cart, "cart");
            addBtn.disabled = true;
        });

    })
} //end of showProds function

function findItem(v) {
    return v.id == this;
}

showProds(products);