import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../../../contexts/filter-context";
import { getFilteredProducts } from "../../../utils/filter-utils";
import { getSortedProducts } from "../../../utils/sort-utils";
import "./ProductsDisplay.css";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { filterState } = useFilter();

  useEffect(() => {
    setLoader(true);
    (async () => {
      const productsFromServer = await axios.get("/api/products");
      setProducts(productsFromServer.data.products);
      setLoader(false);
    })();
  }, []);

  const filteredProducts = getFilteredProducts(products, filterState);
  const sortedAndFilteredProducts = getSortedProducts(
    filteredProducts,
    filterState.sortOrder
  );

  return (
    <main className="products-display">
      {loader && <p>Loading...</p>}
      <ul className="products-display-listing">
        {sortedAndFilteredProducts.map((product) => {
          return (
            <li key={product._id}>
              <div className="card-container">
                {product.badge && (
                  <div className="card-badge">{product.badge}</div>
                )}
                <div className="card-image-container">
                  <img
                    className="card-image"
                    src={product.coverImg}
                    alt="card"
                  />
                  <div className="rating-badge-container">
                    <span className="rating-badge-value">{product.rating}</span>
                    <span className="rating-badge-icon">
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="rating-badge-number">
                      <span className="rating-badge-separator">|</span>
                      {product.totalRatings}
                    </span>
                  </div>
                </div>
                <div className="card-details-container">
                  <div className="card-details-header">
                    <div className="card-text-container">
                      <h1 className="card-text-heading">{product.title}</h1>
                      <p className="card-text-description">
                        {product.shortDescription}
                      </p>
                    </div>
                    <button className="btn-icon">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <div className="card-price-container">
                    <p className="card-price">Rs. {product.discountedPrice}</p>
                    <p className="card-price-old">
                      Rs. {product.originalPrice}
                    </p>
                    <p className="card-price-offer">
                      {product.discountPercent}%
                    </p>
                  </div>
                  <div className="card-button-container">
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-cart-plus"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export { ProductsDisplay };
