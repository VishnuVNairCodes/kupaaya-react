import NavBar from "../../components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./Products.css";

const Products = () => {
  return (
    <div className="outer-container">
      <NavBar />
      <div className="content">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Products;
