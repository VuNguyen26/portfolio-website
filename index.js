document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");

    let cartItems = 0;

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });

    cartBtn.addEventListener("click", function () {
        alert("Bạn chưa có sản phẩm nào trong giỏ hàng!");
    });

    function updateCartCount(count) {
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? "inline-block" : "none";
    }

    function addToCart() {
        cartItems++;
        updateCartCount(cartItems);
    }

    updateCartCount(cartItems);
});
