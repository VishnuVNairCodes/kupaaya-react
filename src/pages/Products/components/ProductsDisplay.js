import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductsDisplay.css";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    (async () => {
      const productsFromServer = await axios.get("/api/products");
      setProducts(productsFromServer.data.products);
      setLoader(false);
    })();
  }, []);
  return (
    <main className="products-display">
      {loader && <p>Loading...</p>}
      <ul>
        {products.map((product) => {
          return (
            <li>
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
