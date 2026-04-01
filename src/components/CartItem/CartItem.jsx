import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../redux/CartSlice";

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

  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} width={100} />
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Total: ${itemTotal}</p>
      <button onClick={handleDecrement}>-</button>
      <span>{item.quantity}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}

export default CartItem;