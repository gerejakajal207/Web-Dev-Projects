let cart = [];
const cartCount = document.getElementById("cart-count");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const orderItems = document.getElementById("order-items");

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));
    cart.push({ name, price });
    updateCart();
    cartSidebar.classList.add("active");
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeItem(${index})">x</button>`;
    cartItemsList.appendChild(li);
  });

  cartTotal.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("close-cart").addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  orderItems.value = cart.map(item => item.name).join(", ");
  cartSidebar.classList.remove("active");
});
