import "./ProductDisplay3.css";

const ProductDisplay3 = () => {
  return (
    <>
      <div className="display-3">
        <div className="display-3-sub-container">
          <img
            src={require("../../../assets/swagger-kid.jpg")}
            alt="product"
            className="display-3-img img-responsive"
          />
          <div className="badge-arrivals">NEW ARRIVALS</div>
          <p className="display-3-text">Swagger Kid</p>
        </div>
        <div className="display-3-sub-container">
          <img
            src={require("../../../assets/nightwear.jpg")}
            alt="product"
            className="display-3-img img-responsive"
          />
          <div className="badge-arrivals">NEW ARRIVALS</div>
          <p className="display-3-text">Nightwear</p>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay3 };
