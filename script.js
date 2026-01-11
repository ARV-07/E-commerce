let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);
        
        cart.push({ id, name, price });
        total += price;
        updateCart();
    });
});

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('cart').style.display = cart.length ? 'block' : 'none';
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout not implemented. Total: $' + total.toFixed(2));
});
