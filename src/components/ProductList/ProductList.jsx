import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CartSlice";
import plantsData from "../../data/plants";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      {plantsData.map((category) => (
        <div key={category.category} className="category">
          <h2>{category.category}</h2>
          <div className="plants-grid">
            {category.items.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;