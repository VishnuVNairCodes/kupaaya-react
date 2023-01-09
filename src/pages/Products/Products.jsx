import { NavBar } from "../../components/NavBar";
import { SideBar } from "./components/SideBar";
import { ProductsDisplay } from "./components/ProductsDisplay";
import "./Products.css";

const Products = () => {
  return (
    <div className="outer-container">
      <NavBar />
      <div className="products-content">
        <SideBar />
        <ProductsDisplay />
      </div>
    </div>
  );
};

export { Products };
