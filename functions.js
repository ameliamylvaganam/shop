// init functions for buildings, vacancies, about, and contact
// helper initNav


function initMain(){

    initNav();

    // populating product grid
    var mainHTML = "";
    data.products.forEach((product) => {

 let newlisting = `
 <a href="product.html?slug=${product.slug}" class="product-link">
      <div class="product-card">
        <img src="assets/productimages/${product.coverimage}" alt="${product.title}">
        <p>${product.title}</p>
        <div class="price">$${product.price}</div>
      </div>
      </a>
      `;


        mainHTML+=newlisting;
    });

    document.querySelector('.product-list').innerHTML = mainHTML;
	
}

function initNav(){

}

// product.js

// --- Example helper function ---
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// --- Product page logic ---
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");


  if (!slug) {
    document.getElementById("product").innerHTML = "<p>Product not found.</p>";
    return;
  }

  // Find the matching product from data.js
  const product = data.products.find(p => p.slug === slug);

  if (product) {
    document.getElementById("product-name").textContent = product.title;
    document.getElementById("product-price").textContent = formatPrice(product.price);
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = `assets/productimages/${product.coverimage}`;
    document.title = product.title;
  } else {
    document.getElementById("product").innerHTML = "<p>Product not found.</p>";
  }
}

// --- (optional) Homepage generator ---
function renderProductList(containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ""; // clear existing

  data.products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="assets/productimages/${p.coverimage}" alt="${p.title}">
      <h2>${p.title}</h2>
      <p>${formatPrice(p.price)}</p>
      <a href="product.html?slug=${p.slug}">View details</a>
    `;
    container.appendChild(div);
  });
}
