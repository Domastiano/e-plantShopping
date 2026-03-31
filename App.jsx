import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>🌿 Paradise Nursery</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Plants</Link>
            <Link to="/cart">
              🛒 Cart
              {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
            </Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
