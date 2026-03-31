import { useSelector } from "react-redux";

function Navbar({ setPage }) {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("cart")}>
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;
