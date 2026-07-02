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
        name: "Movie Replica Mask",
        price: "£39.99",
        emoji: "🎭"
    },
    {
        name: "Web Shooter",
        price: "£59.99",
        emoji: "🕸"
    },
    {
        name: "Amazing Spider Comic",
        price: "£14.99",
        emoji: "📚"
    },
    {
        name: "Collector Figure",
        price: "£79.99",
        emoji: "🧸"
    }
];

// Build products automatically
const productContainer = document.querySelector(".products");

if(productContainer){

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="product">

            <div class="product-image">
                ${product.emoji}
            </div>

            <h3>${product.name}</h3>

            <p class="price">${product.price}</p>

            <a href="#" class="buy-btn">
                View Product
            </a>

        </div>

        `;

    });

}
