// Shopping cart
let cart = [];
let total = 0;

// Add product to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    updateCart();

    alert(name + " added to cart!");
}

// Update cart display
function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toLocaleString("en-IN");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price.toLocaleString("en-IN")}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });
}

// Remove product
function removeFromCart(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    updateCart();
}

// Search products
function searchProducts() {

    let searchText = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let productName =
            product.getAttribute("data-name").toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Scroll to products
function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert(
        "Order placed successfully!\nTotal Amount: ₹" +
        total.toLocaleString("en-IN")
    );

    cart = [];
    total = 0;

    updateCart();
}