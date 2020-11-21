let add_but = document.getElementById("add-button");
let products = [];

let name = document.getElementById("name");
let desc = document.getElementById("desc");
let price = document.getElementById("price");
let category = document.getElementById("category");
let imagUrl = document.getElementById("imagUrl");
let add_prod_form = document.getElementById("add-prod-form");


add_but.addEventListener("click", function(e) {
    e.preventDefault();
    products.push({ name: name.value, desc: desc.value, price: price.value, category: category.value, imagUrl: imagUrl.value });
    name.value = "";
    desc.value = "";
    price.value = "";
    category.value = "";
    imagUrl.value = "";
    alert("hi");
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
})