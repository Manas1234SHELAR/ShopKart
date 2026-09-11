import React, { useState, useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  const [userName, setUserName] = useState("");

  const [cart, dispatch] = useReducer(cartReducer, []);

  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      dispatch({
        type: "LOAD_CART",
        payload: JSON.parse(savedCart)
      });
    }

    setCartLoaded(true);
  }, []);

  useEffect(() => {
    if (!cartLoaded) {
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, cartLoaded]);

  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM": {
        const existingItem = state.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          return state.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          );
        }

        return [
          ...state,
          {
            ...action.payload,
            quantity: 1
          }
        ];
      }

      case "INCREASE_QUANTITY":
        return state.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      case "DECREASE_QUANTITY":
        return state
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
          )
          .filter((item) => item.quantity > 0);

      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.payload);

      case "CLEAR_CART":
        return [];

      case "LOAD_CART":
        return action.payload;

      default:
        return state;
    }
  }

  return (
    <>
      <Navbar userName={userName} cart={cart} />

      <Routes>
        <Route path="/" element={<Home userName={userName} />} />

        <Route
          path="/products"
          element={<Products dispatch={dispatch} />}
        />

        <Route
          path="/login"
          element={<Login setUserName={setUserName} />}
        />

        <Route
          path="/register"
          element={<Register setUserName={setUserName} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} dispatch={dispatch} />}
        />
      </Routes>
    </>
  );
}

export default App;