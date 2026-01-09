const products = [
    { id: 1, name: "Notebook", price: 500 },
    { id: 2, name: "Pen Pack", price: 300 },
    { id: 3, name: "Calculator", price: 2500 },
];

const cart = [];

function displayProducts() {
    const productsEl = document.getElementById("products");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>₦${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsEl.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₦${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Thank you for your purchase of ₦${document.getElementById("total").textContent}!`);
    cart.length = 0;
    updateCart();
}

// Load products on page load
window.onload = displayProducts;
