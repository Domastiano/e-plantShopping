import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';

const plantsData = {
  aromatic: [
    { id: 1, name: 'Lavender', desc: 'Relaxing scent', price: 15, image: 'https://via.placeholder.com/200x200?text=Lavender' },
    { id: 2, name: 'Rosemary', desc: 'Fresh herb aroma', price: 12, image: 'https://via.placeholder.com/200x200?text=Rosemary' },
    { id: 3, name: 'Mint', desc: 'Refreshing leaves', price: 10, image: 'https://via.placeholder.com/200x200?text=Mint' },
  ],
  medicinal: [
    { id: 4, name: 'Aloe Vera', desc: 'Healing gel', price: 20, image: 'https://via.placeholder.com/200x200?text=Aloe+Vera' },
    { id: 5, name: 'Tulsi', desc: 'Immunity booster', price: 18, image: 'https://via.placeholder.com/200x200?text=Tulsi' },
    { id: 6, name: 'Ginger', desc: 'Digestive aid', price: 14, image: 'https://via.placeholder.com/200x200?text=Ginger' },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart({ ...plant, quantity: 1 }));
  };

  const renderProducts = (plants, title) => (
    <div className="section">
      <h2>{title}</h2>
      <div className="products-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <div className="product-info">
              <div className="product-name">{plant.name}</div>
              <div className="product-desc">{plant.desc}</div>
              <div className="product-price">${plant.price}</div>
              <button className="add-btn" onClick={() => handleAddToCart(plant)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="products-container">
      <h1>Our Plants</h1>
      {renderProducts(plantsData.aromatic, '🌿 Aromatic Plants')}
      {renderProducts(plantsData.medicinal, '🌱 Medicinal Plants')}
    </div>
  );
}

export default ProductList;
