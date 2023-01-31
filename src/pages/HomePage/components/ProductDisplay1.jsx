import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts/filter-context";
import "./ProductDisplay1.css";

const ProductDisplay1 = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="display-1">
      <div className="display-1-img-container">
        <Link
          to="/products"
          onClick={() => filterDispatch({ type: "SHOW_BOY_ONLY" })}
        >
          <img
            src={require("../../../assets/boy-fashion.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Boy Fashion</div>
        </Link>
      </div>
      <div className="display-1-img-container">
        <Link
          to="/products"
          onClick={() => filterDispatch({ type: "SHOW_GIRL_ONLY" })}
        >
          <img
            src={require("../../../assets/girl-fashion.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Girl Fashion</div>
        </Link>
      </div>
      <div className="display-1-img-container">
        <Link
          to="/products"
          onClick={() => filterDispatch({ type: "SHOW_CASUALS_ONLY" })}
        >
          <img
            src={require("../../../assets/casuals.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Casuals</div>
        </Link>
      </div>
      <div className="display-1-img-container">
        <Link
          to="/products"
          onClick={() => filterDispatch({ type: "SHOW_BIRTHDAYS_ONLY" })}
        >
          <img
            src={require("../../../assets/birthdays.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Birthdays</div>
        </Link>
      </div>
      <div className="display-1-img-container">
        <Link
          to="/products"
          onClick={() => filterDispatch({ type: "SHOW_ETHNICWEAR_ONLY" })}
        >
          <img
            src={require("../../../assets/ethnicwear.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Ethnicwear</div>
        </Link>
      </div>
    </div>
  );
};

export { ProductDisplay1 };
