import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setPage("products")}>
            Get Started
          </button>
        </div>
      )}

      {page === "products" && <ProductList setPage={setPage} />}
      {page === "cart" && <CartItem setPage={setPage} />}
    </div>
  );
}

export default App;
