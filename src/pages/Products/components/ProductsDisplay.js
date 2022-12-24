import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../../../context/filter-context";
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

  const categoryFilter = (products, category) =>
    products.filter((product) => product.categories.includes(category));
  const genderFilter = (products, showBoy, showGirl, showUnisex) => {
    if (showBoy || showGirl || showUnisex) {
      let filteredProducts = [];
      if (showBoy) {
        const boyProducts = categoryFilter(products, "boy");
        filteredProducts = [...filteredProducts, ...boyProducts];
      }
      if (showGirl) {
        const girlProducts = categoryFilter(products, "girl");
        filteredProducts = [...filteredProducts, ...girlProducts];
      }
      if (showUnisex) {
        const unisexProducts = categoryFilter(products, "unisex");
        filteredProducts = [...filteredProducts, ...unisexProducts];
      }
      return filteredProducts;
    } else {
      return products;
    }
  };
  const typeOfDressFilter = (
    products,
    showCasuals,
    showBirthdays,
    showEthnicwear,
    showNightwear,
    showAccessories
  ) => {
    if (
      showCasuals ||
      showBirthdays ||
      showEthnicwear ||
      showNightwear ||
      showAccessories
    ) {
      let filteredProducts = [];
      if (showCasuals) {
        const casuals = categoryFilter(products, "casuals");
        filteredProducts = [...filteredProducts, ...casuals];
      }
      if (showBirthdays) {
        const birthdayDresses = categoryFilter(products, "birthdays");
        filteredProducts = [...filteredProducts, ...birthdayDresses];
      }
      if (showEthnicwear) {
        const ethnicwears = categoryFilter(products, "ethnicwear");
        filteredProducts = [...filteredProducts, ...ethnicwears];
      }
      if (showNightwear) {
        const nightwears = categoryFilter(products, "nightwear");
        filteredProducts = [...filteredProducts, ...nightwears];
      }
      if (showAccessories) {
        const accessories = categoryFilter(products, "accessories");
        filteredProducts = [...filteredProducts, ...accessories];
      }
      return filteredProducts;
    } else {
      return products;
    }
  };
  const ratingFilter = (products) => products;
  const priceFilter = (products) => products;
  const getFilteredProducts = (
    dataToFilter,
    {
      showBoy,
      showGirl,
      showUnisex,
      showCasuals,
      showBirthdays,
      showEthnicwear,
      showNightwear,
      showAccessories,
    }
  ) => {
    const priceFiltered = priceFilter(dataToFilter);
    const ratingAndPriceFiltered = ratingFilter(priceFiltered);
    const genderAndRatingAndPriceFiltered = genderFilter(
      ratingAndPriceFiltered,
      showBoy,
      showGirl,
      showUnisex
    );
    const typeAndGenderAndRatingAndPriceFiltered = typeOfDressFilter(
      genderAndRatingAndPriceFiltered,
      showCasuals,
      showBirthdays,
      showEthnicwear,
      showNightwear,
      showAccessories
    );
    return typeAndGenderAndRatingAndPriceFiltered;
  };
  const filteredProducts = getFilteredProducts(products, filterState);

  return (
    <main className="products-display">
      {loader && <p>Loading...</p>}
      <ul className="products-display-listing">
        {filteredProducts.map((product) => {
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
