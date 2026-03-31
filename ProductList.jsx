import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = {
  aromatic: [
    { id: 1, name: "Lavender", price: 10, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Mint", price: 8, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Rosemary", price: 12, img: "https://via.placeholder.com/100" },
    { id: 10, name: "Basil", price: 9, img: "https://via.placeholder.com/100" },
    { id: 11, name: "Thyme", price: 7, img: "https://via.placeholder.com/100" },
    { id: 12, name: "Sage", price: 11, img: "https://via.placeholder.com/100" },
  ],

  medicinal: [
    { id: 4, name: "Aloe Vera", price: 15, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Turmeric", price: 9, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Ginger", price: 11, img: "https://via.placeholder.com/100" },
    { id: 13, name: "Neem", price: 10, img: "https://via.placeholder.com/100" },
    { id: 14, name: "Chamomile", price: 8, img: "https://via.placeholder.com/100" },
    { id: 15, name: "Echinacea", price: 12, img: "https://via.placeholder.com/100" },
  ],

  ornamental: [
    { id: 7, name: "Orchid", price: 25, img: "https://via.placeholder.com/100" },
    { id: 8, name: "Bonsai", price: 30, img: "https://via.placeholder.com/100" },
    { id: 9, name: "Cactus", price: 7, img: "https://via.placeholder.com/100" },
    { id: 16, name: "Fern", price: 9, img: "https://via.placeholder.com/100" },
    { id: 17, name: "Palm", price: 20, img: "https://via.placeholder.com/100" },
    { id: 18, name: "Lily", price: 14, img: "https://via.placeholder.com/100" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const inCart = (id) => cart.some(i => i.id === id);

  return (
    <div>
      <h1>Products</h1>

      {Object.entries(products).map(([cat, items]) => (
        <div key={cat}>
          <h2>{cat.toUpperCase()}</h2>

          {items.map(p => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              <img src={p.img} alt={p.name} width="80" />
              <h3>{p.name}</h3>
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
