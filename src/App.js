import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Cart from "./components/cart/Cart";
import Menu from "./components/menu/Menu";
import Modal from "./UI/Modal";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log("Connected");
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
    console.log("clicked");
  };
  return (
    <Router>
      {cartIsShown && <Cart onClose={closeCartHandler} />}
      <div className="App">
        <Header onShowCart={showCartHandler} />
      </div>
      <Menu />
    </Router>
  );
}

export default App;
