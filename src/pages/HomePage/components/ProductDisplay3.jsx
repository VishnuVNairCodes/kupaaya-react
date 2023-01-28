import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts/filter-context";
import "./ProductDisplay3.css";

const ProductDisplay3 = () => {
  const { filterDispatch } = useFilter();
  return (
    <div className="display-3">
      <Link
        to="/products"
        onClick={() => filterDispatch({ type: "SHOW_ACCESSORIES_ONLY" })}
        className="display-3-img-container"
      >
        <img
          src={require("../../../assets/swagger-kid.jpg")}
          alt="product"
          className="display-3-img img-responsive"
        />
        <div className="badge-arrivals">NEW ARRIVALS</div>
        <p className="display-3-text">Swagger Kid</p>
      </Link>
      <Link
        to="/products"
        onClick={() => filterDispatch({ type: "SHOW_NIGHTWEAR_ONLY" })}
        className="display-3-img-container"
      >
        <img
          src={require("../../../assets/nightwear.jpg")}
          alt="product"
          className="display-3-img img-responsive"
        />
        <div className="badge-arrivals">NEW ARRIVALS</div>
        <p className="display-3-text">Nightwear</p>
      </Link>
    </div>
  );
};

export { ProductDisplay3 };
