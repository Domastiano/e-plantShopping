import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = {
  aromatic: [
    { id: 1, name: "Lavender", price: 10, desc: "Calming plant" },
    { id: 2, name: "Mint", price: 8, desc: "Fresh smell" },
    { id: 3, name: "Rosemary", price: 12, desc: "Aromatic herb" },
  ],
  medicinal: [
    { id: 4, name: "Aloe Vera", price: 15, desc: "Healing plant" },
    { id: 5, name: "Turmeric", price: 9, desc: "Anti-inflammatory" },
    { id: 6, name: "Ginger", price: 11, desc: "Boost immunity" },
  ],
  ornamental: [
    { id: 7, name: "Orchid", price: 25, desc: "Beautiful flower" },
    { id: 8, name: "Bonsai", price: 30, desc: "Mini tree" },
    { id: 9, name: "Cactus", price: 7, desc: "Low maintenance" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const inCart = (id) => cart.some(i => i.id === id);

  return (
    <div>
      <h1>Products</h1>

      {Object.entries(products).map(([category, items]) => (
        <div key={category}>
          <h2>{category.toUpperCase()}</h2>

          {items.map(p => (
            <div key={p.id}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <p>${p.price}</p>

              <button
                disabled={inCart(p.id)}
                onClick={() => dispatch(addItem(p))}
              >
                {inCart(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
