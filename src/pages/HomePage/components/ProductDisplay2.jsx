import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts/filter-context";
import "./ProductDisplay2.css";

const ProductDisplay2 = () => {
  const { filterDispatch } = useFilter();
  return (
    <>
      <div className="display-2">
        <div className="display-2-img-container">
          <img
            src={require("../../../assets/sand-baby.jpg")}
            alt="product"
            className="display-2-img img-responsive"
          />
          <div className="display-2-cta">
            <p>
              Cute <span className="text-highlight">duds</span> for your Cute
              <span className="text-highlight"> kid</span>
            </p>
            <Link
              to="/products"
              onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
              className="btn btn-primary link"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay2 };
