// function buttonClick(event) {
//   // alert("Hello");
//   let span = document.querySelector("#header-title span");
//   span.style.display = "block";
//   console.log(event);
//   event.target.removeEventListener("click", buttonClick);
// }

// const button = document.getElementById("button");

// button.addEventListener("click", buttonClick);

// let select = document.getElementsByTagName("select")[0];
// let items = document.querySelectorAll("li");

let button = document.getElementById("button");

function buttonClick(event) {
  //   document.getElementById("main-header").style.display = "none";
  document.getElementById("main-header").innerText = "Naslov";
  console.log(event);
  console.log(event.target);
  event.target.removeEventListener("click", buttonClick);
}
button.addEventListener("click", buttonClick);

let select = document.getElementsByTagName("select")[0];
let items = document.querySelectorAll("li");

var currentItem;

select.addEventListener("change", function (event) {
  if (currentItem) {
    currentItem.removeAttribute("style");
  }
  //   for (item of items) {
  //     item.removeAttribute("style");
  //   }
  items[event.target.value - 1].style.backgroundColor = "blue";
  currentItem = items[event.target.value - 1];
});

function addItem(event) {
  event.preventDefault();
  let inpuText = document.getElementById("itemName").value;
  if (!inpuText) {
    document.getElementById("items").innerHTML +=
      "<li class='list-group-items'>" + inpuText + "</li>";
  }
}

document
  .querySelector("input[type='submit']")
  .addEventListener("click", addItem);

// button.removeEventListener("click", buttonClick);

// select.addEventListener("change", function (event) {
//   for (item of items) {
//     item.removeAttribute("style");
//   }
//   let value = event.target.value;
//   items[parseInt(value) - 1].style.borderColor = "red";
// });

// function addItem(event) {
//   event.preventDefault();
//   let newItemName = document.getElementById("itemName").value;
//   console.log(newItemName);
//   if (newItemName) {
//     document.getElementById("items").innerHTML +=
//       "<li class='list-group-item'>" + newItemName + "</li>";
//   }
// }

// document.querySelector("input[type=submit]").addEventListener("click", addItem);

// document.addEventListener(
//   "keydown",
//   function (event) {
//     console.log(event);
//   },
//   true
// );
