import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Products.css";



const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: "12,499",
    originalPrice: "14,999",
    rating: 4.4,
    reviews: 1850,
    discount: "17%",
    isAvailable: true,
    image: "/images/products/Samsung_phone.png"
  },

  {
    id: 2,
    name: "Puma Running Shoes",
    category: "Fashion",
    price: "2,499",
    originalPrice: "3,999",
    rating: 3.8,
    reviews: 1320,
    discount: "38%",
    isAvailable: true,
    image: "/images/products/puma_shoes.png"
  },

  {
    id: 3,
    name: "Amazon Echo Dot",
    category: "Electronics",
    price: "3,499",
    originalPrice: "4,499",
    rating: 4.6,
    reviews: 2450,
    discount: "22%",
    isAvailable: true,
    image: "/images/products/amazon_echo_dot.png"
  },

  {
    id: 4,
    name: "American Tourister Trolley Bag",
    category: "Fashion",
    price: "3,299",
    originalPrice: "4,999",
    rating: 2.9,
    reviews: 970,
    discount: "34%",
    isAvailable: false,
    image: "/images/products/trolley-bag..png"
  },

  {
    id: 5,
    name: "HP Wireless Keyboard",
    category: "Electronics",
    price: "899",
    originalPrice: "1,299",
    rating: 4.2,
    reviews: 760,
    discount: "31%",
    isAvailable: true,
    image: "/images/products/keyboard.png"
  },

  {
    id: 6,
    name: "Milton Thermosteel Bottle",
    category: "Home & Kitchen",
    price: "799",
    originalPrice: "1,099",
    rating: 3.5,
    reviews: 1540,
    discount: "27%",
    isAvailable: true,
    image: "/images/products/thermos-bottle.png"
  },

  {
    id: 7,
    name: "Maybelline Lipstick Set",
    category: "Beauty",
    price: "399",
    originalPrice: "749",
    rating: 5,
    reviews: 820,
    discount: "22%",
    isAvailable: true,
    image: "/images/products/lipstick-set.png"
  },

  {
    id: 8,
    name: "Levi's Casual Jeans",
    category: "Fashion",
    price: "1,899",
    originalPrice: "2,999",
    rating: 4.6,
    reviews: 2100,
    discount: "37%",
    isAvailable: true,
    image: "/images/products/jeans-1.png"
  },

  {
    id: 9,
    name: "Bajaj Mixer Grinder",
    category: "Home & Kitchen",
    price: "2,799",
    originalPrice: "3,499",
    rating: 2.4,
    reviews: 690,
    discount: "20%",
    isAvailable: false,
    image: "/images/products/mixer-grinder.png"
  },

  {
    id: 10,
    name: "Canon Inkjet Printer",
    category: "Electronics",
    price: "5,499",
    originalPrice: "6,499",
    rating: 3.2,
    reviews: 540,
    discount: "15%",
    isAvailable: true,
    image: "/images/products/printer.png"
  },

  {
    id: 11,
    name: "Nivea Skincare Combo",
    category: "Beauty",
    price: "599",
    originalPrice: "799",
    rating: 4.5,
    reviews: 1280,
    discount: "25%",
    isAvailable: true,
    image: "/images/products/skincare-combo.png"
  },

  {
    id: 12,
    name: "Cello Non-Stick Pan",
    category: "Home & Kitchen",
    price: "999",
    originalPrice: "1,399",
    rating: 2.8,
    reviews: 475,
    discount: "29%",
    isAvailable: true,
    image: "/images/products/nonstick-pan.png"
  }
];



function Products() {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    }
    else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };


  const handleRatingChange = (rating) => {

    if (selectedRating === rating) {
      setSelectedRating(0);
    } else {
      setSelectedRating(rating);
    }

  };



  const handleAvailabilityChange = (value) => {

    if (availability === value) {
      setAvailability("");
    } else {
      setAvailability(value);
    }

  };


  const clearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(20000);
    setSelectedRating(0);
    setAvailability("");
  };


  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch =
      Number(product.price.replace(",", "")) <= maxPrice;

    const ratingMatch =
      product.rating >= selectedRating;

    const availabilityMatch =
      availability === "" ||
      (availability === "inStock" && product.isAvailable) ||
      (availability === "outOfStock" && !product.isAvailable);

    return (
      categoryMatch &&
      priceMatch &&
      ratingMatch &&
      availabilityMatch
    );

  });



  return (
    <>
    
      <main className="products-page">

        <section className="products-banner">

          <div className="banner-content">

            <h1>
              All <span>Products</span>
            </h1>

            <p>
              Explore our wide range of top quality products
            </p>

          </div>

        </section>

        <section className="products-content">

          <aside className="filter-sidebar">

            <div className="filter-title">
              <h3>FILTERS</h3>

              <button onClick={clearFilters}>Clear All</button>
            </div>

            <div className="filter-group">

              <h4>Categories</h4>
              <label>
                <input type="checkbox" checked={selectedCategories.includes("Electronics")}
                  onChange={() => handleCategoryChange("Electronics")} /> Electronics
              </label>

              <label> <input type="checkbox" checked={selectedCategories.includes("Fashion")}
                onChange={() => handleCategoryChange("Fashion")} />Fashion
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Home & Kitchen")}
                  onChange={() => handleCategoryChange("Home & Kitchen")} /> Home & Kitchen
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Beauty")}
                  onChange={() => handleCategoryChange("Beauty")} /> Beauty
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Sports")}
                  onChange={() => handleCategoryChange("Sports")} /> Sports
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Books")}
                  onChange={() => handleCategoryChange("Books")} /> Books
              </label>




            </div>

            <div className="filter-group">

              <h4>Price Range</h4>
              <input type="range" min="199" max="20000"
                value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />

              <div className="price-range">
                <span>₹199</span>
                <span>₹{maxPrice}</span>
              </div>

            </div>

            <div className="filter-group">

              <h4>Ratings</h4>

              <label> <input type="checkbox" checked={selectedRating === 5}
                onChange={() => handleRatingChange(5)} /> ⭐⭐⭐⭐⭐ & above
              </label>

              <label> <input type="checkbox" checked={selectedRating === 4}
                onChange={() => handleRatingChange(4)} /> ⭐⭐⭐⭐☆ & above
              </label>

              <label> <input type="checkbox" checked={selectedRating === 3}
                onChange={() => handleRatingChange(3)} /> ⭐⭐⭐☆☆ & above
              </label>

            </div>

            <div className="filter-group">

              <h4>Availability</h4>
              <label> <input type="checkbox" checked={availability === "inStock"}
                onChange={() => handleAvailabilityChange("inStock")} /> In Stock
              </label>

              <label> <input type="checkbox" checked={availability === "outOfStock"}
                onChange={() => handleAvailabilityChange("outOfStock")} /> Out of Stock
              </label>


            </div>

          </aside>

          <div className="products-area">

            <div className="products-header">
              <p>
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>



            <div className="products-grid">

              {filteredProducts.length > 0 ? (

                filteredProducts.map((product) => (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    <div className="product-image">

                      {product.discount && (
                        <span className="discount-badge">
                          -{product.discount}
                        </span>
                      )}

                      <button className="wishlist-button">
                        ♡
                      </button>

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                    </div>

                    <div className="product-info">

                      <small>{product.category}</small>

                      <h3>{product.name}</h3>

                      <div className="rating">
                        ⭐ {product.rating}
                        <span> ({product.reviews})</span>
                      </div>

                      <div className="product-price">

                        ₹{product.price}

                        <del>
                          ₹{product.originalPrice}
                        </del>

                      </div>

                      <button className="add-cart-button">
                        🛒 Add to Cart
                      </button>

                    </div>

                  </div>

                ))

              ) : (

                <div className="no-products">
                  <h3>No Products Found !</h3>
                  <p>Try changing your filters.</p>
                </div>

              )}

            </div>



          </div>


        </section>

      </main>
    </>
  );
}

export default Products;