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
            src={require("../../../assets/baby-shoes.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Baby Shoes</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/swagger-kid.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Swagger Kid</div>
        </div>
        <div className="display-1-img-container">
          <img
            src={require("../../../assets/toy.jpg")}
            alt="product"
            className="display-1-img img-responsive"
          />
          <div className="display-1-img-text">Toys</div>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay1 };
