import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cart/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price} each</p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <p><strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong></p>
      </div>
      <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>
        Delete
      </button>
    </div>
  );
}

export default CartItem;
