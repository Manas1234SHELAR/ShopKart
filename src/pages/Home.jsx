import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "boAt Rockerz 450",
    category: "Electronics",
    price: "1,599",
    rating: 4.5,
    reviews: 1200,
    image: "/images/products/headphones.png"
  },

  {
    id: 2,
    name: "Noise ColorFit Pro 4",
    category: "Electronics",
    price: "2,999",
    rating: 4.6,
    reviews: 2300,
    image: "/images/products/noisefit.png"
  },

  {
    id: 3,
    name: "Red Tape Sneakers",
    category: "Fashion",
    price: 2099,
    rating: 4.5,
    reviews: 890,
    image: "/images/products/sneakers.png"
  },

  {
    id: 4,
    name: "Levi's Jeans",
    category: "Fashion",
    price: "2,099",
    rating: 4.5,
    reviews: 890,
    image: "/images/products/jeans.png",
  },

  {
    id: 5,
    name: "boAt Airdopes 141",
    category: "Electronics",
    price: "1,299",
    rating: 4.4,
    reviews: 3400,
    image: "/images/products/airdopes.png",
  },

  {
    id: 6,
    name: "Iphone 17 pro max",
    category: "Electronics",
    price: "1,24,000",
    rating: 4.9,
    reviews: 2100,
    image: "/images/products/iphone.png",
  },

  {
    id: 7,
    name: "Men's Casual Shirt",
    category: "Fashion",
    price: "899",
    rating: 4.3,
    reviews: 760,
    image: "/images/products/ferrari.png",
  },

  {
    id: 8,
    name: "Minimalist Table Lamp",
    category: "Home & Kitchen",
    price: "1,199",
    rating: 4.5,
    reviews: 540,
    image: "/images/products/lamp.png",
  },

];



function Home({ userName }) {

  const navigate = useNavigate();
  
  return (
    <>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Good Choices.
            <br />
            <span>Great Prices.</span>
          </h1>

          <p>
            Everything you need,
            <br />
            delivered to your door.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn" onClick={() => navigate("/products")}>
              Shop Now →
            </button>
            <button className="deal-btn">Explore Deals</button>
          </div>

          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" />
              <p>100% Secure Payments</p>
            </div>

            <div className="benefit-item">
              <img src="/icons/clock.png" />
              <p>7 Days Easy Returns</p>
            </div>

            <div className="benefit-item">
              <img src="/icons/express-delivery.png" />
              <p>Fast & Free Delivery</p>
            </div>
          </div>
        </div>
      </section>




      {/* Shop By Category */}

      <section className="category-section">

        <div className="section-heading">
          <h2>Shop by Category</h2>

          <a href="#">
            View All Categories →
          </a>
        </div>


        <div className="category-list">

          <div className="category-card electronics">
            <img
              src="/images/category-electronics.png"
              alt="Electronics"
            />

            <h3>Electronics</h3>
            <p>1200+ Products</p>
          </div>


          <div className="category-card fashion">
            <img
              src="/images/category-fashion.png"
              alt="Fashion"
            />

            <h3>Fashion</h3>
            <p>1800+ Products</p>
          </div>


          <div className="category-card home-kitchen">
            <img
              src="/images/category-home.png"
              alt="Home & Kitchen"
            />

            <h3>Home & Kitchen</h3>
            <p>950+ Products</p>
          </div>


          <div className="category-card beauty">
            <img
              src="/images/category-beauty.png"
              alt="Beauty & Personal Care"
            />

            <h3>Beauty & Personal Care</h3>
            <p>750+ Products</p>
          </div>


          <div className="category-card sports">
            <img
              src="/images/category-fitness.png"
              alt="Sports & Fitness"
            />

            <h3>Sports & Fitness</h3>
            <p>600+ Products</p>
          </div>


          <div className="category-card books">
            <img
              src="/images/category-books.png"
              alt="Books & Stationery"
            />

            <h3>Books & Stationery</h3>
            <p>500+ Products</p>
          </div>

        </div>

      </section>





      {/* Trending Products */}
      <section className="trending-products-section" id="trending">

        <div className="trending-section-heading">

          <div className="trending-heading">

            <h2 className="trending-title">
              <span className="trending-icon">
                <img src="/icons/trending.png" alt="Trending" />
              </span>

              <span>
                Trending <strong>Now</strong>
              </span>
            </h2>

            <div className="trending-accent"></div>

            <p className="trending-subtitle">
              Most popular choices this week
            </p>

          </div>

          <a href="/products" className="trending-view-products">
            View All Products <span>→</span>
          </a>

        </div>


        <div className="trending-product-grid">

          {products.map((product) => (

            <div
              className="trending-product-card"
              key={product.id}
            >

              <div className="trending-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="trending-product-details">

                <div className="trending-product-meta">

                  <span className="trending-product-category">
                    {product.category}
                  </span>

                  <span className="trending-product-rating">
                    ⭐ {product.rating} ({product.reviews})
                  </span>

                </div>

                <h3>{product.name}</h3>

                <div className="trending-product-price">
                  ₹{product.price}
                </div>

                <div className="trending-product-actions">

                  <button className="trending-buy-now-button">
                    Buy Now
                  </button>

                  <button className="trending-cart-button">
                    <img
                      src="/icons/product-cart.png"
                      alt="Cart"
                    />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  );
}

export default Home;