import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
      <Link to="/plants" style={{ margin: "0 10px", color: "white" }}>Plants</Link>
      <Link to="/cart" style={{ margin: "0 10px", color: "white" }}>
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
}

export default Navbar;