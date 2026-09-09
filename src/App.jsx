import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {

  const [userName, setUserName] = useState("");

  return (
<>
    <Navbar userName={userName} />
    <Routes>

      <Route
        path="/"
        element={<Home userName={userName} />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/login"
        element={<Login setUserName={setUserName} />}
      />

      <Route
        path="/register"
        element={<Register setUserName={setUserName} />}
      />

    </Routes>
    </>
  );
}

export default App;