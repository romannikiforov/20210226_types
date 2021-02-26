const products = document.getElementById("products");
const total = document.getElementById("total");
const catsSel = document.getElementById("cats");
const priceSel = document.getElementById("price");

function render(data) {
  products.innerHTML = data
    .map(
      (p) => `<div class="product-item">
        <p>${p.title}</p>
        <p>${renderCats[p.cid].title}</p>
        <p>price: ${p.price}</p> 
     </div>`
    )
    .join("");
  total.textContent = data.length;
}

render(defaultData.products);
