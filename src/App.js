import { Route, Routes } from "react-router-dom";

import "./App.css";

import Cart from "./pages/Cart/Cart";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Wishlist from "./pages/Wishlist/Wishlist";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
