import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul className="filters-list">
        <h4 className="filters-list-heading">
          Filters<button className="btn btn-secondary-outline h5">Clear</button>
        </h4>
        <li className="filters-list-item price-slider">
          <h4 className="price-slider-heading">Price</h4>
          <div className="price-slider-container">
            <div className="price-range">
              <span>₹ 200</span>
              <span>₹ 10000</span>
            </div>
            <input
              type="range"
              min="200"
              max="10000"
              value="5000"
              className="price-slider"
            />
          </div>
        </li>
        <li className="filter-list-item category">
          <h4 className="category-heading">Shop For</h4>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" className="checkbox" />
              Boy
            </label>
            <label>
              <input type="checkbox" className="checkbox" checked />
              Girl
            </label>
          </div>
        </li>
        <li className="filter-list-item category">
          <h4 className="category-heading">Categories</h4>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" className="checkbox" />
              Casuals
            </label>
            <label>
              <input type="checkbox" className="checkbox" checked />
              Birthdays
            </label>
            <label>
              <input type="checkbox" className="checkbox" />
              Ethnicwear
            </label>
            <label>
              <input type="checkbox" className="checkbox" />
              Nightwear
            </label>
            <label>
              <input type="checkbox" className="checkbox" />
              Accessories
            </label>
          </div>
        </li>

        <li className="filter-list-item rating">
          <h4 className="rating-heading">Rating</h4>
          <div className="radio-container">
            <label>
              <input type="radio" name="rating" className="radio" />4 Stars &
              above
            </label>
            <label>
              <input type="radio" name="rating" className="radio" checked />3
              Stars & above
            </label>
            <label>
              <input type="radio" name="rating" className="radio" />2 Stars &
              above
            </label>
            <label>
              <input type="radio" name="rating" className="radio" />1 Stars &
              above
            </label>
          </div>
        </li>
        <li className="filter-list-item sort">
          <h4 className="sort-heading">Sort By</h4>
          <div className="radio-container">
            <label>
              <input type="radio" name="sort" className="radio" />
              Price: High to Low
            </label>
            <label>
              <input type="radio" name="sort" className="radio" checked />
              Price: Low to High
            </label>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export { SideBar };
