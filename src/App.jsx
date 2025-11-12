import React from 'react';
import ProductCard from './productcard';
import './index.css'; // Import shared CSS

// --- 1. Data Structure ---
const PRODUCTS_DATA = [
    { id: 101, name: "Luxury Leather Wallet", price: 49.99, inStock: true, isNew: true },
    { id: 102, name: "Noise Cancelling Headphones", price: 199.99, inStock: false, isNew: false },
    { id: 103, name: "Smart Wi-Fi Thermostat", price: 125.00, inStock: true, isNew: true },
    { id: 104, name: "Vintage Camera Lens", price: 75.50, inStock: true, isNew: false },
    { id: 105, name: "Ergonomic Office Chair", price: 349.00, inStock: false, isNew: true },
    { id: 106, name: "Portable Espresso Maker", price: 89.99, inStock: true, isNew: false },
];

function ProductList() {
    return (
        <div className="product-listing-page">
            <h2>Featured Products</h2>
            
            {/* 2. ProductList Component (Lists) */}
            <div className="product-grid">
                {PRODUCTS_DATA.map(product => (
                    // Crucial List Rule: Use the unique 'id' as the key
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;