import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Menu />
    </Router>
  );
}

export default App;
