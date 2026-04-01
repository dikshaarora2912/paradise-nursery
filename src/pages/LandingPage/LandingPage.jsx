import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1>🌿 Welcome to Paradise Nursery</h1>
      <p>Bring nature closer to your home</p>
      <button onClick={() => navigate("/home")}>Get Started</button>
    </div>
  );
}

export default LandingPage;