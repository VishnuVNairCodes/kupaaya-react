import "./ProductDisplay1.css";

const ProductDisplay1 = () => {
  return (
    <>
      <div className="display-1">
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/boy-fashion.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Boy Fashion</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/girl-fashion.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Girl Fashion</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/casuals.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Casuals</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/birthdays.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Birthdays</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/ethnicwear.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Ethnicwear</div>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay1 };
