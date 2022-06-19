import "./ProductDisplay3.css";

const ProductDisplay3 = () => {
  return (
    <>
      <div className="display-3">
        <div className="display-3-sub-container">
          <img
            src={require("../../../assets/baby-mom.jpg")}
            alt="product"
            className="display-3-img img-responsive"
          />
          <div className="badge-arrivals">NEW ARRIVALS</div>
          <p className="display-3-text">Newborn Collection</p>
        </div>
        <div className="display-3-sub-container">
          <img
            src={require("../../../assets/baby-queen.jpg")}
            alt="product"
            className="display-3-img img-responsive"
          />
          <div className="badge-arrivals">NEW ARRIVALS</div>
          <p className="display-3-text">Summer Collection</p>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay3 };
