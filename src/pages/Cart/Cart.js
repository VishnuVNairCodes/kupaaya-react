import { NavBar } from "../../components/NavBar";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="outer-container">
      <NavBar />

      <main className="cart-container">
        <h3 className="cart-heading">My Cart</h3>
        <section className="cart-content">
          <section className="cart-display">
            <div className="card-container horizontal">
              <div className="card-badge">Best Seller</div>

              <div className="card-image-container">
                <img
                  className="card-image"
                  src={require("../../assets/baby-mom.jpg")}
                  alt="card"
                />
              </div>
              <div className="card-details-container">
                <div className="card-details-header">
                  <div className="card-text-container">
                    <h1 className="card-text-heading">Lenovo Legion 5</h1>
                    <p className="card-text-description">
                      The best laptop in the world
                    </p>
                  </div>
                </div>
                <div className="card-price-container">
                  <p className="card-price">Rs.68,000</p>
                  <p className="card-price-old">Rs.91,000</p>
                  <p className="card-price-offer">25% off</p>
                </div>
                <div className="cart-change-qty-container">
                  <button className="btn-cart-change-qty">
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <div className="textbox-container">
                    <input type="text" className="textbox" />
                  </div>
                  <button className="btn-cart-change-qty">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div className="card-button-container">
                  <button className="btn btn-primary-outline">
                    Move To Wishlist
                  </button>
                  <button className="btn btn-secondary-outline">
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="card-container  horizontal">
              <div className="card-badge">Best Seller</div>

              <div className="card-image-container">
                <img
                  className="card-image"
                  src={require("../../assets/baby-mom.jpg")}
                  alt="card"
                />
              </div>
              <div className="card-details-container">
                <div className="card-details-header">
                  <div className="card-text-container">
                    <h1 className="card-text-heading">Lenovo Legion 5</h1>
                    <p className="card-text-description">
                      The best laptop in the world
                    </p>
                  </div>
                </div>
                <div className="card-price-container">
                  <p className="card-price">Rs.68,000</p>
                  <p className="card-price-old">Rs.91,000</p>
                  <p className="card-price-offer">25% off</p>
                </div>
                <div className="cart-change-qty-container">
                  <button className="btn-cart-change-qty">
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <div className="textbox-container">
                    <input type="text" className="textbox" />
                  </div>
                  <button className="btn-cart-change-qty">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div className="card-button-container">
                  <button className="btn btn-primary-outline">
                    Move To Wishlist
                  </button>
                  <button className="btn btn-secondary-outline">
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="cart-summary">
            <div className="cart-summary-header">
              <h3 className="cart-summary-heading">Price Details</h3>
              <p className="cart-summary-total-items">( 6 items )</p>
            </div>
            <div className="cart-summary-coupons cart-summary-element">
              <p className="cart-summary-coupons-text">Coupons Available</p>
              <button className="btn btn-primary cart-summary-element-btn">
                View Coupons
              </button>
            </div>
            <div className="cart-summary-price">
              <div className="cart-summary-element">
                <p>Total Price</p>
                <p>3394</p>
              </div>
              <div className="cart-summary-element">
                <p>Discount</p>
                <p>-948</p>
              </div>
              <div className="cart-summary-element">
                <p>Delivery Charges</p>
                <p>FREE</p>
              </div>
            </div>
            <div className="cart-summary-apply-coupon">
              <div className="cart-summary-element">
                <p>Total</p>
                <p>2678</p>
              </div>
              <div className="cart-summary-element">
                <div>
                  <p>Coupon 20% off</p>
                  <button className="btn btn-secondary-outline cart-summary-element-btn">
                    Remove
                  </button>
                </div>
                <p>-536</p>
              </div>
            </div>
            <div className="cart-summary-subtotal cart-summary-element">
              <p>Subtotal</p>
              <p>2142</p>
            </div>
            <button className="btn btn-primary cart-summary-checkout-btn">
              Checkout
            </button>
          </section>
        </section>
      </main>
    </div>
  );
};

export { Cart };
