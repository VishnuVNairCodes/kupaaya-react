import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/Cart/Cart";
import { HomePage } from "./pages/HomePage/HomePage";
import { Login } from "./pages/Login/Login";
import { MockAPI } from "./pages/Mockman/MockAPI";
import { Products } from "./pages/Products/Products";
import { Signup } from "./pages/Signup/Signup";
import { Wishlist } from "./pages/Wishlist/Wishlist";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
};

export { App };
