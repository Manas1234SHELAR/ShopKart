import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, dispatch }) {

  const [orderPlaced, setOrderPlaced] =
    useState(false);


  /* =========================================
     CART CALCULATIONS
  ========================================= */

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      Number(
        String(item.price).replace(/,/g, "")
      ) * item.quantity,
    0
  );


  /* =========================================
     DISCOUNT LOGIC
  ========================================= */

  let discountPercentage = 0;

  if (subtotal >= 5000) {
    discountPercentage = 25;
  } else if (subtotal >= 3500) {
    discountPercentage = 20;
  } else if (subtotal >= 2000) {
    discountPercentage = 10;
  }


  const discount =
    (subtotal * discountPercentage) / 100;


  /* =========================================
     SHIPPING LOGIC
  ========================================= */

  const shipping =
    subtotal >= 499 || subtotal === 0
      ? 0
      : 40;


  /* =========================================
     FINAL TOTAL
  ========================================= */

  const totalAmount =
    subtotal - discount + shipping;


  return (
    <div className="cart-page">

      {/* =====================================
          EMPTY CART UI
      ===================================== */}

      {cart.length === 0 ? (

        <div className="empty-cart-container">

          <div className="empty-cart-box">

            <div className="empty-cart-icon">

              <img
                src="/icons/cart-icon.png"
                alt="Empty Cart"
              />

            </div>


            <h1>
              Your Cart is Empty
            </h1>


            <p>
              Looks like you haven't added
              anything to your cart yet.
            </p>


            <Link
              to="/products"
              className="empty-cart-btn"
            >
              Start Shopping
              <span>→</span>
            </Link>

          </div>

        </div>

      ) : (

        /* =====================================
           CART WITH PRODUCTS
        ===================================== */

        <>

          <div className="cart-container">

            {/* =================================
                CART TABLE
            ================================= */}

            <div className="cart-table-wrapper">

              <table className="cart-table">

                <thead>

                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th>ACTION</th>
                  </tr>

                </thead>


                <tbody>

                  {cart.map((item) => (

                    <tr
                      className="cart-item-row"
                      key={item.id}
                    >

                      {/* PRODUCT */}

                      <td>

                        <div className="cart-product">

                          <div className="cart-product-image">

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                          </div>


                          <div className="cart-product-info">

                            <h3>
                              {item.name}
                            </h3>

                            <p className="cart-category">
                              {item.category}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* PRICE */}

                      <td>

                        <div className="cart-price">

                          <strong>
                            ₹
                            {Number(
                              String(item.price)
                                .replace(/,/g, "")
                            ).toLocaleString("en-IN")}
                          </strong>

                          <span className="original-price">
                            ₹
                            {Number(
                              String(item.originalPrice)
                                .replace(/,/g, "")
                            ).toLocaleString("en-IN")}
                          </span>

                        </div>

                      </td>


                      {/* QUANTITY */}

                      <td>

                        <div className="quantity-control">

                          <button
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "DECREASE_QUANTITY",
                                payload: item.id
                              })
                            }
                          >
                            −
                          </button>


                          <span>
                            {item.quantity}
                          </span>


                          <button
                            type="button"
                            onClick={() =>
                              dispatch({
                                type: "INCREASE_QUANTITY",
                                payload: item.id
                              })
                            }
                          >
                            +
                          </button>

                        </div>

                      </td>


                      {/* ITEM TOTAL */}

                      <td>

                        <strong className="item-total">

                          ₹
                          {(
                            Number(
                              String(item.price)
                                .replace(/,/g, "")
                            ) *
                            item.quantity
                          ).toLocaleString("en-IN")}

                        </strong>

                      </td>


                      {/* DELETE */}

                      <td>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: item.id
                            })
                          }
                        >

                          <img
                            src="/icons/delete-icon.png"
                            alt="Delete"
                          />

                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>


              {/* CLEAR CART */}

              <div className="cart-footer">

                <button
                  type="button"
                  className="clear-cart-btn"
                  onClick={() =>
                    dispatch({
                      type: "CLEAR_CART"
                    })
                  }
                >

                  <img
                    src="/icons/clear-cart.png"
                    alt=""
                  />

                  Clear Cart

                </button>

              </div>

            </div>


            {/* =================================
                ORDER SUMMARY
            ================================= */}

            <aside className="cart-sidebar">

              <div className="order-summary">

                <h2>
                  Order Summary
                </h2>


                <div className="summary-row">

                  <span>
                    Subtotal ({cart.length} items)
                  </span>

                  <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>

                </div>


                <div className="summary-row discount-row">

                  <span>
                    Discount ({discountPercentage}%)
                  </span>

                  <span>
                    −₹{discount.toLocaleString("en-IN")}
                  </span>

                </div>


                <div className="summary-row">

                  <span>
                    Shipping
                  </span>

                  <span className="free-shipping">

                    {shipping === 0
                      ? "FREE"
                      : `₹${shipping.toLocaleString("en-IN")}`}

                  </span>

                </div>


                <div className="summary-divider"></div>


                <div className="summary-total">

                  <span>
                    Total Amount
                  </span>

                  <strong>
                    ₹{totalAmount.toLocaleString("en-IN")}
                  </strong>

                </div>


                <p className="saved-message">

                  You saved ₹
                  {discount.toLocaleString("en-IN")}
                  {" "}on this order

                </p>


                {/* CHECKOUT */}

                <button
                  type="button"
                  className="checkout-btn"
                  onClick={() =>
                    setOrderPlaced(true)
                  }
                >

                  Proceed to Checkout

                  <span>
                    →
                  </span>

                </button>


                {/* COUPON */}

                <button
                  type="button"
                  className="coupon-btn"
                >

                  <img
                    src="/icons/coupon.png"
                    alt=""
                  />

                  Apply Coupon

                </button>

              </div>


              {/* SECURE PAYMENT */}

              <div className="secure-box">

                <img
                  src="/icons/security-icon.png"
                  alt=""
                  className="secure-icon"
                />

                <div>

                  <h3>
                    Safe & Secure Payments
                  </h3>

                  <p>
                    100% secure payments.
                    Easy returns.
                    Your data is protected.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </>

      )}


      {/* =====================================
          CONTINUE SHOPPING
      ===================================== */}

      <div className="cart-navigation">

        <Link
          to="/products"
          className="continue-shopping"
        >
          ← Continue Shopping
        </Link>

      </div>


      {/* =====================================
          ORDER SUCCESS POPUP
      ===================================== */}

      {orderPlaced && (

        <div className="order-popup-overlay">

          <div className="order-popup">

            <div className="success-icon">
              ✓
            </div>


            <h2>
              Order Placed Successfully!
            </h2>


            <p>
              Your order has been placed successfully.
            </p>


            <button
              type="button"
              className="popup-ok-btn"
              onClick={() =>
                setOrderPlaced(false)
              }
            >
              OK
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;