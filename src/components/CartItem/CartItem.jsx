import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/CartSlice";
import "./CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const totalPrice = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${totalPrice}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;