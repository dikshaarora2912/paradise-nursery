import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">🌿 Paradise Nursery</Link></div>
      <ul className="nav-links">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li>
          <Link to="/cart">
            🛒 Cart {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;