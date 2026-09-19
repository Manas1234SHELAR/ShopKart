import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">

        {/* 404 Illustration */}
        <div className="not-found-illustration">
          <img src="/images/not-found-cart.png" alt="Shopping cart" className="not-found-cart" />
        </div>

        {/* 404 Message */}
        <h1>Oops! Page Not Found</h1>

        <p className="not-found-description">
          Looks like this page went shopping and never came back.
        </p>

        <p className="not-found-subtext">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="error-buttons">
          <Link to="/" className="home-button">
            Back to Home
          </Link>

          <Link to="/products" className="products-button">
            Explore Products
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NotFound;