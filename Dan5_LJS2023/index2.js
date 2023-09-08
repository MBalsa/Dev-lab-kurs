let list = document.getElementById("lista");
let elements = list.querySelectorAll("li");
let form = document.getElementById("forma1");
let input = document.querySelector('#forma1 input[type="text"]');
let submit = document.getElementById("submit2");
let xButtons = document.querySelectorAll("li button");
let search = document.getElementById("search");
let searchResults = document.getElementById("searchResults");
let selectedResultIndex = -1; //Inicijalni rez

function removeEl(x) {
  list = document.getElementById("lista");
  console.log("remove " + x.parentElement.innerText);
  list.removeChild(x.parentElement);
  xButtons = document.querySelectorAll("li button");
}

function addNew(event) {
  event.preventDefault();

  let newEl = document.createElement("li");
  newEl.innerText = input.value;
  console.log(newEl.innerText);

  let newX = document.createElement("button");
  newX.innerText = "X";
  newEl.appendChild(newX);
  list.appendChild(newEl);
  xButtons = document.querySelectorAll("li button");
  console.log(xButtons);
  list = document.getElementById("lista");
  elements = list.querySelectorAll("li");

  newX.addEventListener("click", () => {
    removeEl(newX);
  });
}

submit.addEventListener("click", addNew);

xButtons.forEach((x) => {
  x.addEventListener("click", () => {
    removeEl(x);
  });
});

search.addEventListener("input", (event) => {
  elements = list.querySelectorAll("li");
  let results = [];

  elements.forEach((e) => {
    if (e.innerText.includes(search.value)) {
      e.style.display = "block";
      results.push(e.innerText);
    } else {
      e.style.display = "none";
    }
  });

  // Prikazi rezultate pretrage u dropdown opciji
  showDropdownResults(results);
});

// Funkcija za prikazivanje rezultata pretrage u dropdown opciji
function showDropdownResults(results) {
  searchResults.innerHTML = "";

  console.log(results);

  results.forEach((result, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = result.split("X")[0]; //.split(" ")[0]; //uzimamo ime bez karaktera x
    searchResults.appendChild(listItem);

    // Dodajte event listener za klik na rezultat pretrage
    listItem.addEventListener("click", () => {
      search.value = result;
      searchResults.innerHTML = ""; // Sakrijte dropdown opciju nakon odabira
      selectedResultIndex = -1; //reset odabrani index
    });
    listItem.addEventListener("keydown", (e) => {
      if (e.key == "ArrowDown") {
        selectedResult(index + 1);
        e.preventDefault();
      }
    });
  });
}

function selectedResult(index) {
  results = searchResults.querySelectorAll("li"); //bio const
  if (index < 0) {
    index = results.length - 1;
  } else if (index >= results.length) {
    index = 0;
  }
  if (selectedResultIndex !== -1) {
    results[selectedResultIndex].classList.remove("selected");
  }
  results[index].classList.add("selected");
  selectedResultIndex = index;
  search.value = results[index].textContent;
}

search.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    results = searchResults.querySelectorAll("li"); //bio const
    if (results.lenght > 0) {
      if (e.key === "ArrowDown") {
        selectedResult(selectedResult + 1);
      } else if (e.key === "ArrowUp") {
        selectedResult(selectedResult - 1);
      }
    }
    e.preventDefault();
  }
});
