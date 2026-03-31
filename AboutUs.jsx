import React from 'react';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>🌿 Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful house plants.</p>
      <p>We offer a wide variety of aromatic and medicinal plants to bring nature into your home.</p>
      <button className="continue-btn" onClick={() => window.location.href = '/products'}>
        Shop Now
      </button>
    </div>
  );
}

export default AboutUs;
