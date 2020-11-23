//read function take string (name of storage item) as argument
function read(items) {
  let result = JSON.parse(localStorage.getItem(items));
  return result ? result : [];
}

//save function take array as argument and optional argument as text to name the storage item name
function save(items, prod = "products") {
  localStorage.setItem(prod, JSON.stringify(items));
}
