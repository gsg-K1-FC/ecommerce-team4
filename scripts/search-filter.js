products = read("products");

let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let categoryList = document.getElementById("category");
let priceFrom = document.getElementById("priceFrom");
let priceTo = document.getElementById("priceTo");

search.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchName(e.target.value);
    }
});

searchBtn.addEventListener("click", function() {
    searchName(search.value);
});

categoryList.addEventListener("change", function(e) {
    search.value = "";
    priceFrom.value = "";
    priceTo.value = "";

    let result = products.filter(function(item) {
        return item.category == e.target.value;
    });
    showProds(result);
});

priceFrom.addEventListener("input", function(e) {
    search.value = "";
    categoryList.value = 0;


    let result = products.filter(function(item) {

        if (!priceTo.value) {
            return Number(item.price) >= Number(e.target.value);
        } else {
            return Number(item.price) >= Number(e.target.value) && Number(item.price) <= Number(priceTo.value)
        }
    });
    showProds(result);
});

priceTo.addEventListener("input", function(e) {
    search.value = "";
    categoryList.value = 0;

    let result = products.filter(function(item) {
        if (!priceFrom.value) {
            return Number(item.price) <= Number(e.target.value);
        } else {
            return Number(item.price) >= Number(priceFrom.value) && Number(item.price) <= Number(e.target.value)
        }


    });
    showProds(result);
});

function searchName(text) {
    categoryList.value = 0;
    priceFrom.value = "";
    priceTo.value = "";

    let result = products.filter(function(item) {
        return item.name.toUpperCase().includes(text.toUpperCase());
    });
    showProds(result);
}