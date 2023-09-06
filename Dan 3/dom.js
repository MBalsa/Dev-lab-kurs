// console.log(document);
// console.log(document.title);
document.title = "Novi Title";
// console.log(document.body);

// // console.dir(document);

// document.title = "Novi title";

// // console.log(document.body);

let list = document.getElementById("items");
console.log(list.innerHTML);

let items = document.querySelectorAll("#items li");

// let items =list.getElementsByClassName("")
// console.log(items[0]);

for (item of items) {
  item.setAttribute("style", "background-color: blue");
  item.style.color = "White";
}
//   console.log(item);

list.innerHTML += "<p>Ovo je test.</p>";
console.log(list);

// let items = document.querySelectorAll("#items li");
// // console.log(items);

// for (let item of items) {
//   item.setAttribute("style", "background-color: blue");
//   item.style.color = "white";
// }
items[0].removeAttribute("style");

// items[0].setAttribute("id", "first-item");

let header = document.getElementById("header-title");
// console.log(header.innerHTML);
console.log(header.innerText);
console.log(header.textContent);

header.innerText = "Novi naslov";

// document.getElementById("first-item").innerText = "Item 1 New";

// // console.log(document.querySelector("#header-title").innerText);
// // console.log(document.querySelector("#header-title").textContent);
// // console.log(document.querySelector("#header-title").innerHTML);

// let darkButtons = document.getElementsByClassName("btn-dark");
// // console.log(darkButtons);

document.getElementsByClassName("btn-dark")[0].setAttribute("disabled", true);
document.getElementsByClassName("btn-dark")[0].value = "Prihvati";

// // console.log(darkButtons[0].value);
// darkButtons[0].setAttribute("disabled", true);

let form = document.getElementsByTagName("form")[0];
console.log(form.firstElementChild);
// // console.log(form.lastChild);

// let inputs = form.querySelectorAll("input");
// // console.log(inputs);

// // console.log(form.children);
// // console.log(form.childNodes);
