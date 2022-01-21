import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Menu from "./components/menu/Menu";
import Modal from "./UI/Modal";

function App() {
  // const [modal, setModal] = useState(true);

  return (
    <Router>
      <div className="App">
        <Modal />
        <Header />
      </div>
      <Menu />
    </Router>
  );
}

export default App;
