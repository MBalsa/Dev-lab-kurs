function addItem(event) {
  event.preventDefault();
  let newItemName = document.getElementById("itemName").value;
  console.log(newItemName);
  if (newItemName) {
    document.getElementById("items").innerHTML +=
      "<li>" + newItemName + "<button class='dugme'>X</button>" + "</li>";
    document
      .getElementsByClassName("dugme")
      .addEventListener("click", removeItem);
  }
}

document.querySelector("input[type=submit]").addEventListener("click", addItem);

// ul.addEventListener("click", function(event){
//     event.target.parentNode.removeChild(event.target)
//   })

// // document.getElementsByClassName("dugme").addEventListener("click", removeItem);
