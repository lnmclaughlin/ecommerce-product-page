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
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="">
                  <button
                    className="cart"
                    onClick={() => setShowCart((prev) => !prev)}
                  >
                    Cart
                  </button>
                  <ProductList />
                  {showCart && <ShoppingCart />}
                </div>
              }
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
