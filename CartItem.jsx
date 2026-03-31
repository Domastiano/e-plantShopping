import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ setPage }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Unit: ${item.price}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
              }))
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
              }))
            }
          >
            +
          </button>

          <p>Subtotal: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={() => setPage("products")}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Checkout Successful!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
