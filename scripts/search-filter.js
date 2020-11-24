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
    let result = products.filter(function(item) {
        return item.category == e.target.value;
    });
    showItems(result);
});

priceFrom.addEventListener("input", function(e) {
    let result = products.filter(function(item) {

        if (!priceTo.value) {
            return Number(item.price) >= Number(e.target.value);
        } else {
            return Number(item.price) >= Number(e.target.value) && Number(item.price) <= Number(priceTo.value)
        }
    });
    showItems(result);
});

priceTo.addEventListener("input", function(e) {
    let result = products.filter(function(item) {
        if (!priceFrom.value) {
            return Number(item.price) <= Number(e.target.value);
        } else {
            return Number(item.price) >= Number(priceFrom.value) && Number(item.price) <= Number(e.target.value)
        }


    });
    showItems(result);
});

function searchName(text) {
    let result = products.filter(function(item) {
        return item.name.toUpperCase().includes(text.toUpperCase());
    });
    showItems(result);
}

function showItems(res) {
    console.log(res);
}