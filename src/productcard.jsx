import React from 'react';
// Assuming this component uses the same CSS file as ProductList

function ProductCard({ product }) {
    // Conditional Rendering (Gate): Handle missing product data
    if (!product) {
        return null;
    }

    const { name, price, inStock, isNew } = product;

    return (
        <div className="product-card">
            
            {/* Conditional Rendering (Logical AND &&): "SOLD OUT" badge */}
            {!inStock && (
                <div className="badge sold-out-badge">SOLD OUT</div>
            )}
            
            <h3>{name}</h3>
            
            <p className="price-section">
                Price: 
                {/* Conditional Rendering (Ternary): Display price with NEW label */}
                <span className={isNew ? 'new-price' : 'standard-price'}>
                    ${price.toFixed(2)}
                </span>
                
                {isNew ? (
                    <span className="badge new-badge">✨ NEW</span>
                ) : (
                    <span className="stock-status">{inStock ? ' (In Stock)' : ''}</span>
                )}
            </p>
            
            <button 
                className="add-to-cart-btn" 
                disabled={!inStock}
            >
                {inStock ? 'Add to Cart' : 'View Details'}
            </button>
        </div>
    );
}

export default ProductCard;