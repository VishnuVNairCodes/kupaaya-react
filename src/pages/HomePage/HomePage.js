import React from "react";
import NavBar from "../../components/NavBar";
import ProductDisplay1 from "./components/ProductDisplay1";
import ProductDisplay2 from "./components/ProductDisplay2";
import ProductDisplay3 from "./components/ProductDisplay3";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="outer-container">
      <NavBar />
      <ProductDisplay1 />
      <ProductDisplay2 />
      <ProductDisplay3 />
    </div>
  );
};

export default HomePage;
