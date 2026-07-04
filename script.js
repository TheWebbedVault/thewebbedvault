// =========================
// THE WEBBED VAULT
// =========================

// Back to top button
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =========================
// PRODUCTS
// =========================

const products = [

{
    name:"Spider-Punk Mask",
    price:"£49.99",
    category:"Masks",
    badge:"NEW",
    emoji:"🎭"
},

{
    name:"Classic Web Shooter",
    price:"£59.99",
    category:"Props",
    badge:"BEST SELLER",
    emoji:"🕸"
},

{
    name:"Amazing Spider Comic",
    price:"£14.99",
    category:"Comics",
    badge:"",
    emoji:"📚"
},

{
    name:"Collector Figure",
    price:"£79.99",
    category:"Collectibles",
    badge:"LIMITED",
    emoji:"🧸"
}

];

// Build products automatically
const productContainer = document.querySelector(".products");

if(productContainer){

    productContainer.innerHTML = "";

    productContainer.innerHTML += `

<div class="product">

<div class="badge">${product.badge}</div>

<div class="product-image">

${product.emoji}

</div>

<h3>${product.name}</h3>

<p class="category">${product.category}</p>

<p class="price">${product.price}</p>

<a href="product.html" class="buy-btn">

View Product

</a>

</div>

`;
// =========================
// PRODUCT SEARCH
// =========================

const searchBar = document.getElementById("searchBar");

if (searchBar) {

    searchBar.addEventListener("input", () => {

        const searchText = searchBar.value.toLowerCase();

        const cards = document.querySelectorAll(".product");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchText)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
// =========================
// CATEGORY FILTERS
// =========================

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        document.querySelectorAll(".product").forEach(card => {

            if (
                category === "All" ||
                card.querySelector(".category").textContent === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});       

// =========================
// CART COUNTER
// =========================

let cart = 0;

const cartCount = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        if(cartCount){

            cartCount.textContent = cart;

        }

    });

});
