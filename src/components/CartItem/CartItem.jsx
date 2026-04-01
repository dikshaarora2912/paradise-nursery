import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total Amount: ${calculateTotalAmount()}</h2>
      <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
      <button onClick={() => window.location.href = "/plants"}>Continue Shopping</button>
    </div>
  );
}

export default Cart;