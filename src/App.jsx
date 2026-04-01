import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {!showProductList ? (
        <div className="background-image">
          <div className="landing-content">
            <h1>🌿 Welcome to Paradise Nursery</h1>
            <button onClick={() => setShowProductList(true)}>Get Started</button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;