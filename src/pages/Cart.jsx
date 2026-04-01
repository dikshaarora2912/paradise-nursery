import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    alert("Checkout Coming Soon! 🛒");
  };

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h2>Total Amount: ${totalAmount}</h2>
          <div style={{ marginTop: "20px" }}>
            <button onClick={handleCheckout} style={{ marginRight: "10px" }}>
              Checkout
            </button>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;