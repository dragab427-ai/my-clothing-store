let cart = [];

let cartCount = document.getElementById("cartCount");
let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");

let addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let name = button.dataset.name;
        let price = Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        alert("تمت إضافة " + name + " إلى السلة!");
    });
});

function updateCart() {
    cartCount.textContent = cart.length;

    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML =
            "<p>السلة فارغة، اختاري منتجاتك الأول!</p>";
    }

    cart.forEach(function(item, index) {
        total += item.price;

        let row = document.createElement("div");
        row.className = "cart-item";

        let name = document.createElement("span");
        name.textContent = item.name + " - " + item.price + " جنيه";

        let removeButton = document.createElement("button");
        removeButton.textContent = "حذف";
        removeButton.className = "remove-button";

        removeButton.addEventListener("click", function() {
            cart.splice(index, 1);
            updateCart();
        });

        row.appendChild(name);
        row.appendChild(removeButton);

        cartItems.appendChild(row);
    });

    totalPrice.textContent = total;
}

document.getElementById("clearCart").addEventListener("click", function() {
    cart = [];
    updateCart();
});

document.getElementById("cartButton").addEventListener("click", function() {
    document.getElementById("cart").scrollIntoView({
        behavior: "smooth"
    });
});