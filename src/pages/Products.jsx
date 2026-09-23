import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { ShopKartContext } from "../context/ShopkartContext";



function Products() {


   const {  products, dispatch, loading, error } = useContext(ShopKartContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");
  const [addedProductId, setAddedProductId] = useState(null);
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
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
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = Number(product.price.replace(",", "")) <= maxPrice;
    const ratingMatch = product.rating >= selectedRating;
    const availabilityMatch =
      availability === "" ||
      (availability === "inStock" && product.isAvailable) ||
      (availability === "outOfStock" && !product.isAvailable);

    return categoryMatch && priceMatch && ratingMatch && availabilityMatch;
  });


  // ====================== Sorting Logic =========================================

  let sortedProducts = [...filteredProducts];

  if (sortOption === "price-low") {
    sortedProducts.sort((a, b) =>
      Number(String(a.price).replace(/,/g, "")) - Number(String(b.price).replace(/,/g, ""))
    );
  }

  if (sortOption === "price-high") {
    sortedProducts.sort(
      (a, b) =>
        Number(String(b.price).replace(/,/g, "")) - Number(String(a.price).replace(/,/g, ""))
    );
  }


  if (sortOption === "rating-high") {
    sortedProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sortOption === "rating-low") {
    sortedProducts.sort(
      (a, b) => a.rating - b.rating
    );
  }



  if (sortOption === "popular") {
    sortedProducts.sort(
      (a, b) => b.reviews - a.reviews
    );
  }



  // ====================== Sorting Logic =========================================

  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  );


  const startIndex = (currentPage - 1) * productsPerPage;

  const endIndex = startIndex + productsPerPage;

  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  useEffect(() => { setCurrentPage(1);}, [sortOption]);

  useEffect(() => {setCurrentPage(1);}, [selectedCategories,maxPrice,selectedRating,availability]);




// ====================== Loading and Error UI =========================================
 
if (loading) {
  return (
    <div className="loading-message">
      <div className="loading-spinner"></div>
      <h2>Loading Products</h2>
      <p>Please wait while we fetch the latest products...</p>
    </div>
  );
}

if (error) {
  return (
    <div className="error-message">
      <div className="error-icon">!</div>
      <h2>Oops! Something went wrong</h2>
      <p>{error}</p>
      <button onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
}



  return (
    <>
      <main className="products-page">
        <section className="products-banner">
          <div className="banner-content">
            <h1>All <span>Products</span></h1>
            <p>Explore our wide range of top quality products</p>
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
                <input type="checkbox" checked={selectedCategories.includes("Electronics")} onChange={() => handleCategoryChange("Electronics")} />
                Electronics
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Fashion")} onChange={() => handleCategoryChange("Fashion")} />
                Fashion
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Home & Kitchen")} onChange={() => handleCategoryChange("Home & Kitchen")} />
                Home & Kitchen
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Beauty")} onChange={() => handleCategoryChange("Beauty")} />
                Beauty
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Sports")} onChange={() => handleCategoryChange("Sports")} />
                Sports
              </label>

              <label>
                <input type="checkbox" checked={selectedCategories.includes("Books")} onChange={() => handleCategoryChange("Books")} />
                Books
              </label>
            </div>

            <div className="filter-group">
              <h4>Price Range</h4>

              <input type="range" min="199" max="20000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />

              <div className="price-range">
                <span>₹199</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>

            <div className="filter-group">
              <h4>Ratings</h4>

              <label>
                <input type="checkbox" checked={selectedRating === 5} onChange={() => handleRatingChange(5)} />
                ⭐⭐⭐⭐⭐ & above
              </label>

              <label>
                <input type="checkbox" checked={selectedRating === 4} onChange={() => handleRatingChange(4)} />
                ⭐⭐⭐⭐☆ & above
              </label>

              <label>
                <input type="checkbox" checked={selectedRating === 3} onChange={() => handleRatingChange(3)} />
                ⭐⭐⭐☆☆ & above
              </label>
            </div>

            <div className="filter-group">
              <h4>Availability</h4>

              <label>
                <input type="checkbox" checked={availability === "inStock"} onChange={() => handleAvailabilityChange("inStock")} />
                In Stock
              </label>

              <label>
                <input type="checkbox" checked={availability === "outOfStock"} onChange={() => handleAvailabilityChange("outOfStock")} />
                Out of Stock
              </label>
            </div>
          </aside>

          <div className="products-area">
            <div className="products-header">
              <p>Showing {filteredProducts.length} of {products.length} products</p>

              <div className="sort-section">
                <label htmlFor="sort">Sort By:</label>

                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating-high">Rating: High to Low</option>
                  <option value="rating-low">Rating: Low to High</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>





            <div className="products-grid">
              {sortedProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div className="product-card" key={product.id} title="Click for more info">
                    <div
                      className="product-image"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      {product.discount && (
                        <span className="discount-badge">
                          -{product.discount}
                        </span>
                      )}

                      <button className="wishlist-button" onClick={(e) => e.stopPropagation()}
                      >
                        ♡
                      </button>

                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-info" onClick={() => navigate(`/products/${product.id}`)}>
                      <small>{product.category}</small>

                      <h3>{product.name}</h3>

                      <div className="rating">
                        ⭐ {product.rating}
                        <span>({product.reviews})</span>
                      </div>

                      <div className="product-price">
                        ₹{product.price}
                        <del>₹{product.originalPrice}</del>
                      </div>

                      <button
                        className="add-cart-button"
                        onClick={(e) => {
                          e.stopPropagation();

                          dispatch({
                            type: "ADD_ITEM",
                            payload: product
                          });

                          setAddedProductId(product.id);

                          setTimeout(() => {
                            setAddedProductId(null);
                          }, 2000);
                        }}
                      >
                        {addedProductId === product.id
                          ? <>✓ Added to Cart</>
                          : <>🛒 Add to Cart</>}
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

            {totalPages > 1 && (
              <div className="pagination">
                <button onClick={() => setCurrentPage((previous) => Math.max(previous - 1, 1))} disabled={currentPage === 1}>
                  ←
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button key={index + 1} className={currentPage === index + 1 ? "active" : ""} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                ))}

                <button onClick={() => setCurrentPage((previous) => Math.min(previous + 1, totalPages))} disabled={currentPage === totalPages}>
                  →
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Products;