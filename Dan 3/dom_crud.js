let newItem = document.createElement("li");
console.log(newItem);
let newItemText = document.createTextNode("Item 5");

let list = document.getElementById("items");
list.appendChild(newItem);

newItem.innerText = "Item 5";
// newItem.appendChild(newItemText);
newItem.classList.add("list-group-item");

// // list.remove();
// list.removeChild(list.firstElementChild);

let secondItem = list.children[1];
console.log(secondItem);

list.insertBefore(newItem, secondItem);

list.remove(newItem);
