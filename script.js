let products = [
    { id: 1, name: "Black Jeans", price: "$40", description: "Stylish black jeans", image: "https://i.pinimg.com/originals/31/7f/29/317f29a3ab901fb88af9f6f376f3eae1.png"},
    { id: 2, name: "White T-shirt", price: "$20", description: "Comfortable white T-shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwXKPuZu364O-lo4plVwQDjK0cnGW_KRwsA&s" },
    { id: 3, name: "Jacket", price: "$50", description: "Warm and cozy jacket", image: "https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png" }
];

function renderProducts(filteredProducts) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<div class="no-products">There is no product now!</div>';
    } else {
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            `;
            
            productContainer.appendChild(productCard);
        });
    }
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id); 
    renderProducts(products); 
}

document.getElementById('search-input').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toUpperCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    renderProducts(filteredProducts); 
});

renderProducts(products);
