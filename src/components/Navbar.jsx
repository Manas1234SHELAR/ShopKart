import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ userName, cart = [] }) {
  const navigate = useNavigate();

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt="ShopKart"
              className="shopkart-logo"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            className="collapse navbar-collapse"
            id="shopKartNavbar"
          >
            <ul className="navbar-nav main-nav">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                < NavLink className="nav-link" to="/products">Products</NavLink>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#trending"
                  onClick={(e) => {
                    e.preventDefault();

                    if (window.location.pathname === "/") {
                      document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate("/");

                      setTimeout(() => {
                        document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                >
                  Trending 🔥
                </a>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact </NavLink>
              </li>

            </ul>

            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for products..."
              />

              <button className="search-btn">
                <img
                  src="/icons/search-icon.png"
                  alt="Search"
                />
              </button>
            </div>

            {/* Icons */}
            <div className="nav-actions">

              {/* Cart */}
              <div className="cart-wrapper">
                <Link
                  to="/cart"
                  className="cart-wrapper"
                >

                  <img
                    src="/icons/cart-icon.png"
                    alt="Cart"
                    className="nav-icon"
                  />

                  <span className="cart-count">
                    {cartCount}
                  </span>
                </Link>
              </div>


              {/* Account / Greeting */}
              {userName ? (
                <span className="user-greeting">

                  <img
                    src="/icons/profile-icon.png"
                    alt="Profile"
                    className="greeting-profile-icon"
                  />

                  Hello, {userName}

                </span>
              ) : (
                <div className="dropdown account-dropdown">

                  <button
                    className="account-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="My Account"
                  >
                    <img
                      src="/icons/profile-icon-2.png"
                      alt="My Account"
                      className="profile-icon"
                    />
                  </button>

                  <ul className="dropdown-menu account-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>

                  </ul>

                </div>
              )}

            </div>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;