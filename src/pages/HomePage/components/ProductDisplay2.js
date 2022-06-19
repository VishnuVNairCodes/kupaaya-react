import "./ProductDisplay2.css";

const ProductDisplay2 = () => {
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
              Cute <span className="text-highlight">dud</span> for your Cute
              <span className="text-highlight"> kid</span>
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDisplay2 };
