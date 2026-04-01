import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} × {item.quantity}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))
            }
          />
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;