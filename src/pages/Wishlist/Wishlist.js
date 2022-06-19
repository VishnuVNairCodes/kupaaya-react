import { NavBar } from "../../components/NavBar";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <div className="outer-container">
      <NavBar />
      <main className="wishlist-main">
        <h4 className="wishlist-heading">My Wishlist</h4>
        <div className="wishlist-display">
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-boy-dress.webp")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">BABY GO</h1>
                  <p className="card-text-description">
                    Infant Boys Cotton Rompers
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.557</p>
                <p className="card-price-old">Rs.899</p>
                <p className="card-price-offer">38% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-girl-dress.jpg")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">Pantaloons Baby</h1>
                  <p className="card-text-description">
                    Infant Girls Cotton Dress
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.700</p>
                <p className="card-price-old">Rs.1,000</p>
                <p className="card-price-offer">30% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-boy-dress.webp")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">BABY GO</h1>
                  <p className="card-text-description">
                    Infant Boys Cotton Rompers
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.557</p>
                <p className="card-price-old">Rs.899</p>
                <p className="card-price-offer">38% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-boy-dress.webp")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">BABY GO</h1>
                  <p className="card-text-description">
                    Infant Boys Cotton Rompers
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.557</p>
                <p className="card-price-old">Rs.899</p>
                <p className="card-price-offer">38% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-boy-dress.webp")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">BABY GO</h1>
                  <p className="card-text-description">
                    Infant Boys Cotton Rompers
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.557</p>
                <p className="card-price-old">Rs.899</p>
                <p className="card-price-offer">38% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="card-container shadow">
            <div className="card-badge">Best Seller</div>
            <div className="card-image-container">
              <img
                className="card-image"
                src={require("../../assets/baby-girl-dress.jpg")}
                alt="card"
              />
            </div>
            <div className="card-details-container">
              <div className="card-details-header">
                <div className="card-text-container">
                  <h1 className="card-text-heading">Pantaloons Baby</h1>
                  <p className="card-text-description">
                    Infant Girls Cotton Dress
                  </p>
                </div>
              </div>
              <div className="card-price-container">
                <p className="card-price">Rs.700</p>
                <p className="card-price-old">Rs.1,000</p>
                <p className="card-price-offer">30% off</p>
              </div>
              <div className="card-button-container">
                <button className="btn btn-primary">
                  <i className="fa-solid fa-cart-plus"></i>Move to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Wishlist };
