(function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      let innerHtml = "";
      result.products.forEach((element) => {
        innerHtml += `<div class="card"> \
          <div> \
            <h3><b>${element.title}</b></h3> \
            <p class="description"> \
              ${element.description} \
            </p> \
            <div class="price"> \
              <p>$${element.price}</p> \
            </div> \
          </div> \
          <div> \
            <span><p>-${element.discountPercentage}%</p></span> \
            <img \
              src="${element.thumbnail}" \
              alt="" \
            /> \
          </div> \
        </div>`;
      });
      document.getElementById("container").innerHTML = innerHtml;
    });
})();
