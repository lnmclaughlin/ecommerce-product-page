import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Header from "./components/Header";
import ProductList, { product } from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="">
                <img
                  src="/images/icon-cart.svg"
                  className="cart"
                  onClick={() => setShowCart((prev) => !prev)}
                />
                <ProductList />
                {showCart && <ShoppingCart />}
              </div>
            }
          />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
